
"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import Sortingtable from "./Sortingtable";
import { findFilteredUniversities } from "@/actions/filtereduniversities";
import { DharmaGothicRegular, gotham } from "@/app/layout";
import Image from "next/image";
import { Filter } from 'lucide-react';

const AdmissionTableList = ({ university_raw_data, advertisementData }) => {

  const [universities, setUniversities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]); // To hold unique cities for the selected province
  const [loading, setLoading] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [hide, sethide] = useState(true); // Set default state to an empty array


  useEffect(() => {
    if (university_raw_data) {
      const transformedData = transformUniversityData(university_raw_data);
      setUniversities(transformedData);
    }
  }, [university_raw_data, setUniversities]);

  useEffect(() => {
    if (selectedProvince) {
      const uniqueCities = Array.from(
        new Set(
          university_raw_data
            .filter((uni) => uni.location.province === selectedProvince)
            .map((uni) => uni.location.city)
        )
      );
      setFilteredCities(uniqueCities);
    } else {
      setFilteredCities([]); // Clear cities if no province selected
    }
  }, [selectedProvince, university_raw_data]);


  const handleProvinceChange = (province) => {
    setSelectedProvince(province); // Update the selected province
  };

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

      async function filteredUniversitiesData(data) {
        setLoading(true);
        const filteredUniversities = await findFilteredUniversities(data);
        const transformedFilteredUniversities = transformUniversityData(filteredUniversities);
        setUniversities(transformedFilteredUniversities);
        setLoading(false);
      }

  useEffect(() => {
    if (university_raw_data) {
      const universities_transformed_data = transformUniversityData(university_raw_data);
      setUniversities(universities_transformed_data);
    }
  }, [university_raw_data]); // Use useEffect to avoid setting state directly in the component body

  return (
    <div>
      <div className="HIDE FILTER BOX OR NOT mb-11">
          <h1 className="border-b border-teal-600 cursor-pointer inline-block select-none text-base lg:text-xl xl:text-2xl text-teal-500 font-bold" onClick={() => sethide(!hide)}>  Filter University Admissions <span className="inline-block text-center"><Filter size={`20px`}/></span> </h1>
      </div>
      {!hide && (
        <Sortingtable
          filteredUniversitiesData={filteredUniversitiesData}
          cities={filteredCities} // Pass unique cities to SortingTable
          onProvinceChange={handleProvinceChange} // Pass province change handler
        />
      )}

      <div className={loading ? `block text-yellow-400 text-3xl pb-12 italic ${gotham.className}` : "hidden"}>
          <h1>Please Wait Loading........</h1>
      </div>

      <h1
        className={`glowy dark:glowy_3 text-2xl sm:text-4xl   border-b  inline-block border-rose-600 tracking-wider ${DharmaGothicRegular.className}`}
      >
        List of Universities where Admissions are Open!
      </h1>


        <div className="MainContaineroftable_and_Advertisement flex gap-6 flex-wrap lg:flex-nowrap max-[768px]:flex-col">

            <div className="mt-8 overflow-x-auto w-full">
              <table className="min-w-full table-auto bg-zinc-950 dark:bg-neutral-100 dark:text-black border border-gray-300 dark:border-black rounded-lg">
                <thead>
                  <tr className="bg-zinc-800 dark:bg-slate-900 text-white  uppercase text-xs md:text-sm leading-normal">
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left hidden md:table-cell">Sr.</th>
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left">University</th>
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left">Programs</th>
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left hidden md:table-cell">Sector</th>
                    <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left whitespace-nowrap">Deadline</th>
                  </tr>
                </thead>
                <tbody className="text-white dark:text-black  text-xs md:text-sm font-light">
                  {universities.map((university, idx) => (
                    <tr
                      key={university.id}
                      className="border-b border-gray-700 dark:border-black hover:bg-zinc-900 dark:hover:bg-slate-900 dark:hover:text-white transition duration-300"
                    >
                      {/* Row separator line */}
                      <td className="py-3 px-4 md:px-6 relative hidden md:table-cell">
                        <div className="absolute inset-y-0 left-0 w-px bg-white" /> {/* Separator */}
                        <h1>{idx + 1}</h1>
                      </td>

                      <td className="py-3 px-4 md:px-6 relative">
                        <div className="absolute inset-y-0 left-0 w-px bg-white dark:bg-black" /> {/* Separator */}
                        <Link href={`/university/${university.id}`} className="max-[340px]:text-[0.7rem] sm:text-xs block  md:text-sm">{university.name}</Link>
                      </td>

                      <td className="py-3 px-4 md:px-6 relative">
                                <div className="absolute inset-y-0 left-0 w-px bg-white dark:bg-black" /> {/* Separator */}
                                <ul className="flex flex-wrap gap-1  md:gap-1">
                                  {university.programs.map((program, idx) => (
                                    <li key={idx} className="inline w-fit text-xs md:text-sm">
                                      {program}{idx < university.programs.length - 1 && ","} 
                                    </li>
                                  ))}
                                </ul>
                              </td>


                      <td className="py-3 px-4 md:px-6 relative hidden md:table-cell">
                        <div className="absolute inset-y-0 left-0 w-px bg-white dark:bg-black" /> {/* Separator */}
                        <h1>
                          {university.sector === 'Government' && 'Govt' }
                          {university.sector === 'Semi Government' && 'Semi Govt' }
                          {university.sector === 'Private' && 'Private' }
                        </h1>
                      </td>

                      <td className="py-3 px-4 md:px-6 relative text-red-500 font-semibold sm:whitespace-nowrap">
                        <div className="absolute inset-y-0 left-0 w-px bg-white dark:bg-black" /> {/* Separator */}
                        <h1 className="max-[340px]:text-[0.65rem] text-xs md:text-sm">{university.deadline}</h1>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>



              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 lg:flex-col">
                        {advertisementData.map((ad) => (
                          <Link href={`/advertisement/${ad._id}`} key={ad._id}>
                            <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] xl:w-[280px] xl:h-[280px] 2xl:w-[320px] 2xl:h-[320px] relative top-0 left-0 fancy">
                              <Image
                                src={ad.advertisementImg} // Assuming advertisementImg contains the image URL
                                alt={`Advertisement ${ad.priority}`}
                                className="object-cover"
                                fill
                              />
                            </div>
                          </Link>
                        ))}
                </div>
        </div>



     
    </div>
  );
};

export default AdmissionTableList;
