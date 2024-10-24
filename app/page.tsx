// import { revalidatelandingpage } from "@/actions/RevalidateLandingPage";
import AdmissionTableList from "@/components/Admissiontable";
import ImportantAdmissionCorner from "@/components/ImportantAdmissionCorner";
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";



// export const dynamic = "force-dynamic";





async function findUniversitiesSortedByDeadline() {
  try {
    await connectToDatabase();
    const universities_data = await Universitymodel.find()
      .sort({ "admissionDates.deadlineDate": -1 }) // Sort by deadlineDate in descending order
      .lean() // This ensures we return plain objects
      .exec();
      return await JSON.parse(JSON.stringify(universities_data));
  } catch (error) {
    console.error("Error finding universities:", error);
    throw error;
  }
}



export default async function Home() {
  const data = await findUniversitiesSortedByDeadline();
 
  return (
    <div className=" h-auto pb-24 px-4 mt-14 font-[family-name:var(--font-geist-sans)] bg-[#0a0a0a] ">
      <ImportantAdmissionCorner />

      <div className="mt-12 px-4 mx-auto w-full">
        <AdmissionTableList university_raw_data={data} />
      </div>
    </div>
  );
}
