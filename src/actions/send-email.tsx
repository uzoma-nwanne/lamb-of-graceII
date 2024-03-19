"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
//import paths from '@/paths';

const sendMessageSchema = z.object({
  name: z.string().min(3, { message: "Must be 3 or more characters long." }),
  email: z.string().min(3).email({ message: "Must be a valid email address." }),
  phone: z.string().min(5),
  message: z.string().min(10),
});

interface SendMessageFormState {
  errors: {
    name?: string[];
    phone?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
    _success?: string[];
  };
}

export async function sendMessage(
  formState: SendMessageFormState,
  formData: FormData
): Promise<SendMessageFormState> {
  const result = sendMessageSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const apiEndpoint = process.env.ROOT+"/api/email/";
 fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(result.data),
  }) .then((res) => res.json())
  .then((response) => {
    console.log(response.message);
  })
  .catch((err) => {
    console.log(err);
  });

  return { errors: {} };
}
