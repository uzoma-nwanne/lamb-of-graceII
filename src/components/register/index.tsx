'use client'
import FormButton from "../common/form-button";
import { Button, Input } from "@nextui-org/react";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFormState } from "react-dom";
import * as actions from  "@/actions"

export default function Register() {
    const [formState, action] = useFormState(actions.sendMessage, {
        errors: {},
      });
  return (
    <Container>
      <div className="flex flex-col mt-24 md:w-1/2 mx-auto">
        <h3 className="text-2xl text-center  md:text-6xl my-8 font-semibold">
          Sign up here
        </h3>
        
        <form  className="flex" >
          <Button variant="bordered" className="w-full">
            <FontAwesomeIcon icon={faGoogle} />
            Sign up with Google
          </Button>
        </form>
        
        <form className="flex flex-col gap-4 mt-12">
          <Input
            name="email"
            label="Email"
            labelPlacement="outside"
            placeholder="Email"
            isInvalid={!!formState.errors.email}
            errorMessage={formState.errors.email?.join(", ")}
            isClearable
          />

          <Input
            name="password"
            type="password"
            label="Password"
            labelPlacement="outside"
            placeholder="Password"
            isInvalid={!!formState.errors.name}
            errorMessage={formState.errors.name?.join(", ")}
            isClearable
          />

          <FormButton>Sign Up</FormButton>
        </form>
      </div>
    </Container>
  );
}
