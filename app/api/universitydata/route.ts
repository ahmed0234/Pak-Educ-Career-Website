// app/api/universities/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";

export async function GET() {
  try {
    await connectToDatabase();
    const universities_data = await Universitymodel.find()
      .sort({ "admissionDates.deadlineDate": -1 }) // Sort by deadlineDate in descending order
      .lean()
      .exec();

    // Return the data as JSON
    return NextResponse.json(universities_data);
  } catch (error) {
    console.error("Error fetching universities:", error);
    return NextResponse.json({ error: "Failed to fetch universities" }, { status: 500 });
  }
}
