/* eslint-disable */
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import {AdvertisementsData} from "@/db/advertisement";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET({}) {
  try {
    await connectToDatabase();
    const data = await AdvertisementsData.find();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(error.message);
  }
}

// Universitymodel.syncIndexes()
// .then((data) => {
//   console.log(`sucessfull synced indexxes`);

// })
// .catch((error) => {
//   console.error("Error synchronizing indexes:", error);
// });
