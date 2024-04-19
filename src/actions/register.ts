"use server";
import { z } from "zod";
import bcrypt from "bcrypt";
import dbClient from "../../libs/prismadb";
import { User } from "@prisma/client";

const registerSchema = z.object({
  name: z.string().min(3, { message: "Must be 3 or more characters long." }),
  email: z.string().min(3).email({ message: "Must be a valid email address." }),
  password: z.string().min(5),
});

export async function register(formData: FormData) {
  const result = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, name, password } = result.data;
  const hashedPassword = await bcrypt.hash(password, 20);
  let user: User;
  try {
    user = await dbClient.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    return user;
  } catch (err: unknown) {
    console.log(err);
    return null;
  }
}
