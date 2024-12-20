// import { revalidatelandingpage } from "@/actions/RevalidateLandingPage";
import AdmissionTableList from "@/components/Admissiontable";
import ImportantAdmissionCorner from "@/components/ImportantAdmissionCorner";
import { AdvertisementsData } from "@/db/advertisement";
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";

async function advertisementsData() {
  try {
    await connectToDatabase();
    const advertisements = await AdvertisementsData.find().sort({
      priority: 1,
    });
    return advertisements;
  } catch (error) {
    console.error("Error finding universities:", error);
    throw error;
  }
}

async function findUniversitiesSortedByDeadline() {
  try {
    await connectToDatabase();
    const universities_data = await Universitymodel.find({
      universityAdmissionExpired: false, // Only fetch non-expired universities
      "admissionDates.deadlineDate": { $ne: null }, // Ensure deadlineDate exists
    })
      .sort({ "admissionDates.deadlineDate": -1, createdAt: 1 }) // Sort by deadlineDate descending, then by createdAt ascending
      .lean()
      .exec();
    return universities_data;
  } catch (error) {
    console.error("Error finding universities:", error);
    throw error;
  }
}

export default async function Home() {
  const data = await findUniversitiesSortedByDeadline();
  const data2 = await advertisementsData();

  return (
    <div className=" h-auto pb-24 px-4 mt-14 font-[family-name:var(--font-geist-sans)]">
      <ImportantAdmissionCorner />

      <div className="mt-12  sm:px-4 mx-auto w-full">
        <AdmissionTableList
          university_raw_data={data}
          advertisementData={data2}
        />
      </div>
    </div>
  );
}
