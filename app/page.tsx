// import { revalidatelandingpage } from "@/actions/RevalidateLandingPage";
import AdmissionTableList from "@/Componentss/Admissiontable";
import ImportantAdmissionCorner from "@/Componentss/ImportantAdmissionCorner";
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import { Metadata } from "next";



// export const dynamic = "force-dynamic";


async function findUniversitiesSortedByDeadline() {
  try {
    await connectToDatabase();
    const universities_data = await Universitymodel.find()
      .sort({ "admissionDates.deadlineDate": -1 }) // Sort by deadlineDate in descending order
      .exec();
    return universities_data;
  } catch (error) {
    console.error("Error finding universities:", error);
    throw error;
  }
}


export const metadata: Metadata = {
  title: "Pak Edu Career",
  description: "Pak Edu Career",
};


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
