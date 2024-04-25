"use client";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from 'axios'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import paths from "../../../path";

const registerSchema = z
  .object({
    name: z.string().min(3, { message: "Must be 3 or more characters long." }),
    email: z
      .string()
      .min(3, { message: "Email is required" })
      .email({ message: "Must be a valid email address." }),
    password: z
      .string()
      .min(5, { message: "Password must be atleast 5 characters" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Confirm Password is required" }),
    // terms: z.literal(true, {
    //   errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    // }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

type RegisterSchema = z.infer<typeof registerSchema>;

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
    setIsLoading(true)
    toast.success('User registered successfully');
    axios.post('api/register',data).then(()=>{
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          router.push(paths.contact());
          router.refresh();
          toast.success("Logged In");
        }

        if (callback?.error) {
          toast.error(callback.error);
        }
      });
    })
    
  };
  return (
    <Container>
      <div className="flex flex-col mt-24 md:w-1/2 mx-auto">
        <h3 className="text-2xl text-center  md:text-6xl my-8 font-semibold">
          Sign up here
        </h3>

        <form className="flex">
          <Button variant="bordered" className="w-full">
            <FontAwesomeIcon icon={faGoogle} />
            Sign up with Google
          </Button>
        </form>

        <form
          className="flex flex-col gap-4 mt-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register("name")}
            name="name"
            id="name"
            label="Name"
            labelPlacement="outside"
            placeholder="Name"
            isClearable
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
          />
          <Input
            {...register("email")}
            name="email"
            id="email"
            label="Email"
            labelPlacement="outside"
            placeholder="Email"
            isClearable
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />

          <Input
            {...register("password")}
            name="password"
            id="password"
            type="password"
            label="Password"
            labelPlacement="outside"
            placeholder="Password"
            isClearable
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />

          <Input
            {...register("confirmPassword")}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            labelPlacement="outside"
            placeholder="Confirm Password"
            isClearable
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
          />
          <Button type="submit" color="primary">
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
}
