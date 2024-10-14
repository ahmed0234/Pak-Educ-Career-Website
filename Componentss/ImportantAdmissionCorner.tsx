import { gotham } from "@/app/layout";
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import Link from "next/link";


async function findImportantAdmissions() {
  try {
    await connectToDatabase();
    const universities = await Universitymodel.find({
      importantAdmission: true,
    })
      .sort({ priority: 1 }) // Sort by priority in ascending order
      .exec();
    return universities;
  } catch (error) {
    console.error("Error finding universities:", error);
    throw error;
  }
}

const ImportantAdmissionCorner = async () => {
  const Importantuniversities = await findImportantAdmissions();
  return (
    <div className="">
      <h1 className={`glowy text-3xl  border-b inline-block border-rose-600 ${gotham.className} tracking-wider`}>
        Important Admissions Corner !
      </h1>
      <div className="flex mt-6 flex-wrap gap-4">
        {Importantuniversities.map((university) => (
          <div
            key={university._id}
            className="universitycard px-5 py-4 bg-zinc-800 rounded-3xl"
          >
            <Link href={`/university/${university._id}`} className="text-sm">
              {university.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantAdmissionCorner;
