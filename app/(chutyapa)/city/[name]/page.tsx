import { connectToDatabase } from '@/db/connectDB';
import Universitymodel from "@/db/UniversitiesSchema";
import Link from 'next/link';

interface ParamPageProps {
  params: { name: string };
}


async function fetchUniversity(name: string) {
  await connectToDatabase()
  const cityData = await Universitymodel.find({ "location.city": name });
  return cityData;
}


const Page = async ({params}: ParamPageProps) => {
  function transformUniversityData(data) {
    const today = new Date();

    // First, transform the data
    const transformedData = data.map((university) => {
      const programs = [];

      if (university.programs.bsPrograms.isOpen) {
        programs.push("BS");
      }
      if (university.programs.mphilPrograms.isOpen) {
        programs.push("MPhil");
      }
      if (university.programs.phdPrograms.isOpen) {
        programs.push("PhD");
      }
      if (university.programs.adpPrograms.isOpen) {
        programs.push("ADP");
      }
      if (university.programs.bs5thPrograms.isOpen) {
        programs.push("BS 5th Semester");
      }
      if (university.programs.diplomaPrograms.isOpen) {
        programs.push("Diploma");
      }

      // Transform the data
      return {
        id: university._id, // Include the unique ID here
        name: university.name,
        programs: programs, // Only program categories like ["BS", "MPhil"]
        sector: university.sector, // Add sector field
        deadline: new Date(university.admissionDates.deadlineDate), // Keep the Date object for sorting
      };
    });

    // Sort the universities by deadline closest to today
    const sortedUniversities = transformedData.sort((a, b) => {
      const timeDiffA = a.deadline.getTime() - today.getTime();
      const timeDiffB = b.deadline.getTime() - today.getTime();

      return timeDiffA - timeDiffB; // Sort by closest deadline
    });

    // Format the deadline for display
    return sortedUniversities.map((university) => ({
      ...university,
      deadline: university.deadline.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    }));
  }
  const data = await fetchUniversity(params.name)
  if (!data) return <div className='min-h-[75vh] container pt-12'><h1 className='text-yellow-400 text-xl'>No Universities . . . . . . . . . . .</h1></div>
  const universities = transformUniversityData(data)
  return (
    <div className="mt-8 overflow-x-auto container min-h-[75vh]">
        <table className="min-w-full table-auto bg-zinc-950 border border-gray-300 rounded-lg h-auto">
          <thead>
            <tr className="bg-zinc-800 text-white uppercase text-sm leading-normal">
              <th className="py-3 px-2 md:px-6 text-left">Sr.</th>
              <th className="py-3 px-2 md:px-6 text-left">University</th>
              <th className="py-3 px-2 md:px-6 text-left">Programs</th>
              <th className="py-3 px-2 md:px-6 text-left">Sector</th>
              <th className="py-3 px-2 md:px-6 text-left whitespace-nowrap">Deadline</th>
            </tr>
          </thead>
          <tbody className="text-white text-sm font-light">
            {universities?.map((university, idx) => (
              <tr
                key={university.id}
                className="border-b hover:bg-zinc-900 transition duration-300"
              >
                <td className="py-3 px-2 md:px-6 relative w-[0px] max-sm:hidden">
                  <div className="absolute inset-y-0 left-0 w-px bg-white" />
                  <h1 className="max-md:text-xs">{idx + 1}</h1>
                </td>
                <td className="py-3 px-2 md:px-6 relative">
                  <div className="absolute inset-y-0 left-0 w-px bg-white" />
                  <Link href={`/university/${university.id}`} className="max-md:text-xs">{university.name}</Link>
                </td>
                <td className="py-3 px-2 md:px-6 relative">
                  <div className="absolute inset-y-0 left-0 w-px bg-white" />
                  <ul className="flex flex-wrap gap-3">
                    {university.programs.map((program, idx) => (
                      <li className="max-md:text-xs" key={idx}>{`${program}, `}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-2 md:px-6 relative ">
                  <div className="absolute inset-y-0 left-0 w-px bg-white" />
                  <h1 className="max-md:text-xs">{university.sector === `Government` ? "Govt" : university.sector}</h1>
                </td>
                <td className="py-3 px-2 md:px-6 relative text-rose-500 whitespace-nowrap max-md:text-xs">
                  <div className="absolute inset-y-0 left-0 w-px bg-white" />
                  {university.deadline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Page