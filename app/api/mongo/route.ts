/* eslint-disable */
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import {Users} from "@/db/userMessages";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET({}) {
  try {
    await connectToDatabase()
    const message = await Users.deleteMany();
    return NextResponse.json(message);

  } catch (error) {
    console.log(error.message);
    return NextResponse.json(error.message);
  }
}




// 
// Universitymodel.syncIndexes()
// .then(() => {
//   console.log(`sucessfull`);
// })
// .catch((error) => {
//   console.error("Error synchronizing indexes:", error);
// });