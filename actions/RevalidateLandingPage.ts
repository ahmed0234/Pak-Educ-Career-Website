"use server";


/* eslint-disable */
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";


import { revalidatePath } from "next/cache";

export const revalidatelandingpage = async () => {
  revalidatePath("/");
  return  { success: true, message: "Page has been Revalidated"};
};


export const deleteexpireduniversitiesdata = async () => {
  try {
    await connectToDatabase();
    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00
    const result = await Universitymodel.deleteMany({
      "admissionDates.deadlineDate": { $lt: currentDate },
    });
    return { success: true, message: `${result.deletedCount} Expired Universities has been Deleted` };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
