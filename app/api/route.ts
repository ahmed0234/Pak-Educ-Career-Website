import { connectToDatabase } from "@/db/connectDB";
import universitymodel from "@/db/UniversitiesSchema";

export const dynamic = "force-dynamic";

export async function GET() {
  await connectToDatabase();
  const data = new universitymodel({
    name: "GC University Lahore",
    location: "Lahore",
    admissionStatus: true,
    importantAdmission: true,
    code: "GC123",
  });

  await data.save();

  return new Response(JSON.stringify(data));
}
