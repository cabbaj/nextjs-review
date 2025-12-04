"use client";

import { useFormStatus } from "react-dom"; // use for show the status when click the button

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return <button type="submit" disabled={pending}>
    {pending ? "Submitting...." : "Submit"}
  </button>;
};
export default SubmitButton;
