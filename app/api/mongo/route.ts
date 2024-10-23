/* eslint-disable */
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET({}) {
  try {
    await connectToDatabase()
    const data = await Universitymodel.deleteMany({name: `Dummy`})
    return NextResponse.json(data);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(error.message);
  }
}




// await connectToDatabase()
//     Universitymodel.syncIndexes()
//     .then(() => {
//       console.log(`sucessfull`);
//     })
//     .catch((error) => {
//       console.error("Error synchronizing indexes:", error);
//     });
//     return NextResponse.json("Indexes synchronized successfully.");
