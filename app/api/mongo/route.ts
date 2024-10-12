import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import { NextResponse } from "next/server";




export async function GET({}){
    
try {
    await connectToDatabase();
    const data = await Universitymodel.find()
    return NextResponse.json(data) 
} catch (error) {
        console.log(error.message);
        return NextResponse.json(error.message) 
}           
}