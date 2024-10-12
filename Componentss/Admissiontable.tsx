"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import Sortingtable from "./Sortingtable";
import { findFilteredUniversities } from "@/actions/filtereduniversities";
import { gotham } from "@/app/layout";

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
        className={`text-2xl text-rose-600 border-b  inline-block border-rose-600 tracking-wider`}
      >
        List of Universities in which Admissions are Open
      </h1>

      <div className="mt-8">
        <table className="min-w-full table-auto bg-zinc-950 border border-gray-300 rounded-lg h-auto">
          <thead>
            <tr className="bg-zinc-800 text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sr.</th>
              <th className="py-3 px-6 text-left">University</th>
              <th className="py-3 px-6 text-left">Programs University Offering</th>
              <th className="py-3 px-6 text-left">Deadline</th>
            </tr>
          </thead>
          <tbody className="text-white text-sm font-light">
            {universities.map((university, idx) => (
              <tr
                key={university.id}
                className="border-b  hover:bg-zinc-900 transition duration-300"
              >
                <td className="py-3 px-6 relative w-[0px]">
                  <div className="absolute inset-y-0 left-0 w-px bg-white" />
                  <h1>{idx + 1}</h1>
                </td>
                <td className="py-3 px-6 relative">
                  <div className="absolute inset-y-0 left-0 w-px bg-white" />
                  <Link href={`/university/${university.id}`}>{university.name}</Link>
                </td>
                <td className="py-3 px-6 relative">
                  <div className="absolute inset-y-0 left-0 w-px bg-white" />
                  <ul className="flex gap-3">
                    {university.programs.map((program, idx) => (
                      <li key={idx}>{`${program}, `}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-6 relative text-rose-500">
                  <div className="absolute inset-y-0 left-0 w-px bg-white" />
                  {university.deadline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionTableList;
