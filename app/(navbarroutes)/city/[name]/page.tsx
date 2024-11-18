import { connectToDatabase } from '@/db/connectDB';
import Universitymodel from "@/db/UniversitiesSchema";
import Link from 'next/link';

interface ParamPageProps {
  params: { name: string };
}


async function fetchUniversity(name: string) {
  await connectToDatabase()
  const cityData = await Universitymodel.find({ "location.city": name,  universityAdmissionExpired: false });
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
                <table className="min-w-full table-auto  rounded-lg border border-primary border-collapse">
                <thead>
                  <tr className="bg-primary text-secondary uppercase text-xs md:text-sm leading-normal ">
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left max-md:hidden md:table-cell">Sr.</th>
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left">University</th>
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left">Programs</th>
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left max-md:hidden md:table-cell">Sector</th>
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left whitespace-nowrap">Deadline</th>
                  </tr>
                </thead>
                <tbody className="  text-xs md:text-sm font-light ">
                  {universities.map((university, idx) => (
                    <tr
                      key={university.id}
                      className="border-b border-primary  hover:bg-primary hover:text-secondary  transition duration-200"
                    >
                      {/* Row separator line */}
                      <td className="py-3 px-4 md:px-6 relative max-md:hidden md:table-cell">
                        <div className="absolute inset-y-0 left-0 w-px " /> {/* Separator */}
                        <h1>{idx + 1}</h1>
                      </td>

                      <td className="py-3 px-4 md:px-6 relative">
                        <div className="absolute inset-y-0 left-0 w-px border border-primary" /> {/* Separator */}
                        <Link href={`/university/${university.id}`} className="max-[340px]:text-[0.7rem] sm:text-xs block  md:text-sm">{university.name}</Link>
                      </td>

                      <td className="py-3 px-4 md:px-6 relative">
                                <div className="absolute inset-y-0 left-0 w-px border border-primary" /> {/* Separator */}
                                <ul className="flex flex-wrap gap-1  md:gap-1">
                                  {university.programs.map((program, idx) => (
                                    <li key={idx} className="inline w-fit text-xs md:text-sm">
                                      {program}{idx < university.programs.length - 1 && ","} 
                                    </li>
                                  ))}
                                </ul>
                              </td>


                      <td className="py-3 px-4 md:px-6 relative max-md:hidden md:table-cell">
                        <div className="absolute inset-y-0 left-0 w-px border border-primary" /> {/* Separator */}
                        <h1>
                          {university.sector === 'Government' && 'Govt' }
                          {university.sector === 'Semi Government' && 'Semi Govt' }
                          {university.sector === 'Private' && 'Private' }
                        </h1>
                      </td>

                      <td className="py-3 px-4 md:px-6 relative text-red-500 font-semibold sm:whitespace-nowrap">
                        <div className="absolute inset-y-0 left-0 w-px border border-primary" /> {/* Separator */}
                        <h1 className="max-[340px]:text-[0.65rem] text-xs md:text-sm">{university.deadline}</h1>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
    </div>
  )
}

export default Page