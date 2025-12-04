// this file store the function for import
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// this function use on form page
export const createUser = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // prisma.user.create();
  console.log(data);
  revalidatePath("/form"); // clear the data cache
  // redirect("/form"); // use for redirect if you want to refresh the page

  return "User Created";
};

// this function use for /api/user/route.ts
export async function fetchUser() {
  // prisma.user.findMany({});
  const users = [
    { id: 1, firstname: "john" },
    { id: 2, firstname: "jane" },
    { id: 3, firstname: "bob" },
  ];

  return users;
}
