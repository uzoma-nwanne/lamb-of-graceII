"use client";

import { useFormState } from "react-dom";
import { Input, Button, Textarea } from "@nextui-org/react";
import FormButton from "../common/form-button";
import * as actions from  "@/actions"

export default function ContactForm() {
  const [formState, action] = useFormState(actions.sendMessage, {
    errors: {},
  });

  return (
    <div>
      <form className="flex flex-col gap-4" action={action}>
        <Input
          name="name"
          label="Name"
          labelPlacement="outside"
          placeholder="Name"
          isInvalid={!!formState.errors.name}
          errorMessage={formState.errors.name?.join(", ")}
        />
        <Input
          name="email"
          label="Email"
          labelPlacement="outside"
          placeholder="Email"
          isInvalid={!!formState.errors.email}
          errorMessage={formState.errors.email?.join(", ")}
        />
        <Input
          name="phone"
          label="Phone"
          labelPlacement="outside"
          placeholder="Phone"
          isInvalid={!!formState.errors.phone}
          errorMessage={formState.errors.phone?.join(", ")}
        />

        <Textarea
          name="message"
          label="Message"
          labelPlacement="outside"
          placeholder="Message"
          isInvalid={!!formState.errors.message}
          errorMessage={formState.errors.message?.join(", ")}
        />

        {formState.errors._form ? (
          <div className="rounded p-2 bg-red-200 border border-red-400">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}

        <FormButton>Send Message</FormButton>
      </form>
    </div>
  );
}
