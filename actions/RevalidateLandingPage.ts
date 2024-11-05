"use server";


/* eslint-disable */
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";



import { revalidatePath, revalidateTag } from "next/cache";

export const revalidatelandingpage = async () => {
   revalidatePath("/");
   revalidateTag('dynamicUnis')
  return  { success: true, message: "Page has been Revalidated"};
};


export const deleteexpireduniversitiesdata = async () => {
  try {
    await connectToDatabase();
    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00
    const result = await Universitymodel.updateMany(
      { "admissionDates.deadlineDate": { $lt: currentDate } },
      { $set: { universityAdmissionExpired: true } }
    );

    if(result){
      revalidatePath('/')
    }

  return { success: true, message: `${result.modifiedCount} universities marked as expired` };
  
  } catch (error) {
    return { success: false, message: error.message };
  }
};



