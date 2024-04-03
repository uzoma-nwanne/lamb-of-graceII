"use server";

import { z } from "zod";
//import paths from '@/paths';
const dotenv = require('dotenv');

dotenv.config()

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
  let response = "";
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

  const apiEndpoint = process.env.ROOT + "/api/email/";

  const sendMail = async () => {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(result.data),
    });
    const data = await response.json();
    return data;
  };

  try {
    response = await sendMail();
  } catch (e) {
    console.log(e);
  }
  if (response) {
    return {
      errors: {
        _success: ["Message sent"],
      },
    };
  } else {
    return {
      errors: {
        _form: ["Something went wrong"],
      },
    };
  }
}
