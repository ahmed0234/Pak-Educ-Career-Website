/* eslint-disable */
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import {AdvertisementsData} from "@/db/advertisement";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET({}) {
  try {
    await connectToDatabase();
    return NextResponse.json(`aa`);
    
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(error.message);
  }
}

// await Universitymodel.syncIndexes();

// // Update existing documents to add the new field with a default value
// const result = await Universitymodel.updateMany(
//   { universityAdmissionExpired: { $exists: false } },  // Target documents without the field
//   { $set: { universityAdmissionExpired: false } }      // Set the new field to its default
// );



// const universities_data = await Universitymodel.find({
//   "admissionDates.deadlineDate": { $ne: null } // Ensure deadlineDate exists
// })
// .sort({ "admissionDates.deadlineDate": -1 }) // Sort by deadlineDate in descending order
// .lean() 
// .exec();