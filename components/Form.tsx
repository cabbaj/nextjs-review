"use client";
import { createUser} from "@/utils/user";
import { useActionState } from "react";
import SubmitButton from "./SubmitButton";

const Form = () => {
  const [message, formAction, isPending] = useActionState(createUser, null); // use for access value the return value of action from form submit
  return (
    <form action={formAction}>
      Form
      <input
        type="text"
        placeholder="Firstname"
        name="firstname"
        className="border"
        defaultValue="john"
      />
      <input
        type="text"
        placeholder="Lastname"
        name="lastname"
        className="border"
        defaultValue="doe"
      />
      <SubmitButton />
      { isPending ? "Loading..." : message}
    </form>
  );
};
export default Form;
