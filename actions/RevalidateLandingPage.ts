"use server";

import { revalidatePath } from "next/cache";

export const revalidatelandingpage = async () => {
  revalidatePath("/");
};