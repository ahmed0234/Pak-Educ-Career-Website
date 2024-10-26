/* eslint-disable */
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import {Users} from "@/db/userMessages";
import { NextResponse } from "next/server";
import { AdvertisementsData } from "@/db/advertisement";
export const dynamic = "force-dynamic";

export async function GET({}) {


  try {


    await connectToDatabase()
    const data  = await AdvertisementsData.deleteMany();
    return NextResponse.json(data);

  } catch (error) {
    console.log(error.message);
    return NextResponse.json(error.message);
  }
}



Universitymodel.syncIndexes()
      .then(() => {
        console.log(`sucessfull`);
      })
      .catch((error) => {
        console.error("Error synchronizing indexes:", error);
      });
