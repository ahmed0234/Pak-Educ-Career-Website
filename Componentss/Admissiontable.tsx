"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import Sortingtable from "./Sortingtable";
import { findFilteredUniversities } from "@/actions/filtereduniversities";
import { DharmaGothicRegular, gotham } from "@/app/layout";
import Image from "next/image";

const AdmissionTableList = ({ university_raw_data }) => {
  const [loading, setloading] = useState(false)
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

  async function filteredUniversitiesData(data){
    setloading(true)
    const filteredUniversities = await findFilteredUniversities(data);
    const transformedfiltereduniversities = transformUniversityData(filteredUniversities);
    setUniversities(transformedfiltereduniversities)
    setloading(false)
  }

  const [universities, setUniversities] = useState([]); // Set default state to an empty array
  const [hide, sethide] = useState(true); // Set default state to an empty array

  useEffect(() => {
    if (university_raw_data) {
      const universities_transformed_data = transformUniversityData(university_raw_data);
      setUniversities(universities_transformed_data);
    }
  }, [university_raw_data]); // Use useEffect to avoid setting state directly in the component body

  return (
    <div>
      <div className="HIDE FILTER BOX OR NOT mb-11">
          <h1 className="border-b cursor-pointer inline-block select-none text-xl" onClick={() => sethide(!hide)}>Wanna Filter Universities?</h1>
      </div>
      <div className={hide ? "hidden" : "block"}>
        <Sortingtable filteredUniversitiesData={filteredUniversitiesData}/>
      </div>

      <div className={loading ? `block text-yellow-400 text-3xl pb-12 italic ${gotham.className}` : "hidden"}>
          <h1>Please Wait Loading........</h1>
      </div>

      <h1
        className={`glowy text-4xl  border-b  inline-block border-rose-600 tracking-wider ${DharmaGothicRegular.className}`}
      >
        List of Universities in which Admissions are Open !
      </h1>

      <div className="MainContaineroftable_and_Advertisement flex gap-6 max-[1024px]:flex-col">
          <div className="mt-8 overflow-x-auto">
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
                {universities.map((university, idx) => (
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
                    <td className="py-3 px-2 md:px-6 relative text-red-500 font-semibold whitespace-nowrap max-md:text-xs">
                      <div className="absolute inset-y-0 left-0 w-px bg-white" />
                      {university.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 xl:flex xl:flex-col gap-4 items-center justify-center max-[1024px]:grid max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-2">
            <div className="w-[300px] h-[300px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[200px] max-md:h-[200px] max-sm:w-[170px] max-sm:h-[170px] relative fancy">
              <Image src={`/advertisement/1.jpg`} alt="Advertisement" fill />
            </div>

            <div className="w-[300px] h-[300px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[200px] max-md:h-[200px] max-sm:w-[170px] max-sm:h-[170px] relative fancy">
              <Image src={`/advertisement/2.jpg`} alt="Advertisement" fill />
            </div>

            <div className="w-[300px] h-[300px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[200px] max-md:h-[200px] max-sm:w-[170px] max-sm:h-[170px] relative fancy">
              <Image src={`/advertisement/4.jpg`} alt="Advertisement" fill />
            </div>

            <div className="w-[300px] h-[300px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[200px] max-md:h-[200px] max-sm:w-[170px] max-sm:h-[170px] relative fancy">
              <Image src={`/advertisement/3.jpg`} alt="Advertisement" fill />
            </div>

            <div className="w-[300px] h-[300px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[200px] max-md:h-[200px] max-sm:w-[170px] max-sm:h-[170px] relative fancy">
              <Image src={`/advertisement/5.jpg`} alt="Advertisement" fill />
            </div>
          </div>

      </div>

     
    </div>
  );
};

export default AdmissionTableList;
