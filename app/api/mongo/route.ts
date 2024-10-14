/* eslint-disable */
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import { NextResponse } from "next/server";

export async function GET({}) {
  try {
    await connectToDatabase();
    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00
    const result: any = await Universitymodel.deleteMany({
      "admissionDates.deadlineDate": { $lt: currentDate },
    });
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(error.message);
  }
}
