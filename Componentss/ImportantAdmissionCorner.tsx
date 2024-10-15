
import { DharmaGothicRegular } from "@/app/layout";
import Importantadmission2 from "@/Componentss/client/Importantadmission2";
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";

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
      <h1
        className={`glowy text-5xl  border-b inline-block border-rose-600 ${DharmaGothicRegular.className} font-medium tracking-wider`}
      >
        Important Admissions Corner !
      </h1>

      <Importantadmission2 data={Importantuniversities} />
    </div>
  );
};

export default ImportantAdmissionCorner;
