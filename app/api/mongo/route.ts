/* eslint-disable */
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import { NextResponse } from "next/server";

export async function GET({}) {
  try {
    await connectToDatabase();


    const result: any = await Universitymodel.find();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(error.message);
  }
}
