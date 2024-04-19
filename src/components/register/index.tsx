"use client";
import FormButton from "../common/form-button";
import { Button, Input } from "@nextui-org/react";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Register() {
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

        <form className="flex flex-col gap-4 mt-12">
          <Input
            name="name"
            label="Name"
            labelPlacement="outside"
            placeholder="Name"
            isClearable
          />
          <Input
            name="email"
            label="Email"
            labelPlacement="outside"
            placeholder="Email"
            isClearable
          />

          <Input
            name="password"
            type="password"
            label="Password"
            labelPlacement="outside"
            placeholder="Password"
            isClearable
          />
          <FormButton>Sign Up</FormButton>
        </form>
      </div>
    </Container>
  );
}
