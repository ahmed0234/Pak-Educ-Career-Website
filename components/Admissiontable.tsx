/* eslint-disable */

"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import Sortingtable from "./Sortingtable";
import { findFilteredUniversities } from "@/actions/filtereduniversities";
import { DharmaGothicRegular, gotham } from "@/app/layout";
import Image from "next/image";
import { Filter } from 'lucide-react';
import { SkeletonUI } from "./SkeletonUI";

const AdmissionTableList = ({ university_raw_data, advertisementData }) => {
  const [universities, setUniversities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [hide, sethide] = useState(true);
  const [allUniversities, setAllUniversities] = useState([]); // Store all universities
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [totalPages, setTotalPages] = useState(1);


  
  function transformUniversityData(data) {
    const today = new Date();
    const transformedData = data.map((university) => {
      const programs = [];
      if (university.programs.bsPrograms.isOpen) programs.push("BS");
      if (university.programs.mphilPrograms.isOpen) programs.push("MPhil");
      if (university.programs.phdPrograms.isOpen) programs.push("PhD");
      if (university.programs.adpPrograms.isOpen) programs.push("ADP");
      if (university.programs.bs5thPrograms.isOpen) programs.push("BS 5th Semester");
      if (university.programs.diplomaPrograms.isOpen) programs.push("Diploma");

      return {
        id: university._id,
        name: university.name,
        programs: programs,
        sector: university.sector,
        deadline: new Date(university.admissionDates.deadlineDate),
        province: university.location.province // Add province for filtering
      };
    });

    const sortedUniversities = transformedData.sort((a, b) => {
      const timeDiffA = a.deadline.getTime() - today.getTime();
      const timeDiffB = b.deadline.getTime() - today.getTime();
      return timeDiffA - timeDiffB;
    });

    return sortedUniversities.map((university) => ({
      ...university,
      deadline: university.deadline.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    }));
  }

  useEffect(() => {
    if (university_raw_data) {
      const transformedData = transformUniversityData(university_raw_data);
      setAllUniversities(transformedData); // Store all universities
      setUniversities(transformedData);
      updatePagination(transformedData);
    }
  }, [university_raw_data]);

  useEffect(() => {
    updatePagination(universities);
  }, [itemsPerPage, universities]);

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
      setFilteredCities([]);
    }
  }, [selectedProvince, university_raw_data]);

  const updatePagination = (data) => {
    setTotalPages(itemsPerPage === 'all' ? 1 : Math.ceil(data.length / itemsPerPage));
    setCurrentPage(1);
  };

  const handleProvinceChange = (province) => {
    setSelectedProvince(province);
    setCurrentPage(1);
  };


  async function filteredUniversitiesData(data) {
    setLoading(true);
    const filteredUniversities = await findFilteredUniversities(data);
    const transformedFilteredUniversities = transformUniversityData(filteredUniversities);
    setUniversities(transformedFilteredUniversities);
    updatePagination(transformedFilteredUniversities);
    setLoading(false);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = e.target.value === 'all' ? 'all' : parseInt(e.target.value);
    setItemsPerPage(newItemsPerPage);
    updatePagination(universities); // Use current filtered universities
  };

  const getCurrentUniversities = () => {
    if (itemsPerPage === 'all') {
      return universities;
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return universities.slice(indexOfFirstItem, indexOfLastItem);
  };

  const currentUniversities = getCurrentUniversities();

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="HIDE FILTER BOX OR NOT mb-11">
        <h1 className="border-b border-primary cursor-pointer inline-block select-none max-lg:text-base lg:text-xl xl:text-2xl text-primary font-bold" onClick={() => sethide(!hide)}>
          Filter University Admissions <span className="inline-block text-center"><Filter size={`20px`}/></span>
        </h1>
      </div>
      
      {!hide && (
        <Sortingtable
          filteredUniversitiesData={filteredUniversitiesData}
          cities={filteredCities}
          onProvinceChange={handleProvinceChange}
        />
      )}

      <div className={loading ? `block text-yellow-400 text-3xl pb-12 italic ${gotham.className}` : "hidden"}>
        <SkeletonUI />
      </div>

      <div className="flex justify-between items-center mb-4">
        <h1 className={`glowy dark:glowy_3 max-sm:text-2xl sm:text-4xl border-b inline-block border-rose-600 tracking-wider ${DharmaGothicRegular.className}`}>
          List of Universities where Admissions are Open!
        </h1>
      </div>

      <div className="MainContaineroftable_and_Advertisement flex gap-6 flex-wrap lg:flex-nowrap max-[768px]:flex-col">
        <div className={loading ? "hidden" : `mt-8 overflow-x-auto w-full`}>
          <div className="flex md:justify-between md:items-center mb-4  max-md:flex-col items-start justify-start gap-5">
            {itemsPerPage !== 'all' && (
              <div className="flex items-center gap-2 max-sm:flex-wrap">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-primary text-primary rounded disabled:opacity-50 hover:bg-primary hover:text-secondary transition-colors duration-200"
                >
                  Previous
                </button>
                
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`px-3 py-1 border border-primary rounded transition-colors duration-200 ${
                      currentPage === number ? 'bg-primary text-secondary' : 'text-primary hover:bg-primary hover:text-secondary'
                    }`}
                  >
                    {number}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-primary text-primary rounded disabled:opacity-50 hover:bg-primary hover:text-secondary transition-colors duration-200"
                >
                  Next
                </button>
              </div>
            )}
            <div className="flex items-center gap-4">
              <label className="text-primary flex items-center gap-2">
                <span className="text-sm font-medium">Show:</span>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className="px-3 py-1.5 border border-primary rounded-md bg-secondary text-primary hover:bg-opacity-90 transition-colors duration-200 cursor-pointer focus:outline-none appearance-none min-w-[100px] text-center"
                >
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={150}>150</option>
                  <option value="all">All</option>
                </select>
              </label>
            </div>
          </div>
       
          <table className="min-w-full table-auto rounded-lg border border-primary border-collapse">
            <thead>
              <tr className="bg-primary text-secondary uppercase text-xs md:text-sm leading-normal">
                <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left max-md:hidden md:table-cell">Sr.</th>
                <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left">University</th>
                <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left">Programs</th>
                <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left max-md:hidden md:table-cell">Sector</th>
                <th className="max-[350px]:text-[0.6rem] py-3 px-4 md:px-6 text-left whitespace-nowrap">Deadline</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm font-light">
              {currentUniversities.map((university, idx) => (
                <tr key={university.id} className="border-b border-primary hover:bg-primary hover:text-secondary transition duration-200">
                  <td className="py-3 max-md:px-4 md:px-6 relative max-md:hidden md:table-cell">
                    <div className="absolute inset-y-0 left-0 w-px" />
                    <h1 className="max-md:text-xs md:text-sm">{itemsPerPage === 'all' ? idx + 1 : (currentPage - 1) * itemsPerPage + idx + 1}</h1>
                  </td>
                  <td className="py-3 max-md:px-4 md:px-6 relative">
                    <div className="absolute inset-y-0 left-0 w-px border border-primary" />
                    <Link href={`/university/${university.id}`} className="max-[340px]:text-[0.7rem] sm:text-xs block md:text-sm">{university.name}</Link>
                  </td>
                  <td className="py-3 max-md:px-4 md:px-6 relative">
                    <div className="absolute inset-y-0 left-0 w-px border border-primary" />
                    <ul className="flex flex-wrap gap-1 md:gap-1">
                      {university.programs.map((program, idx) => (
                        <li key={idx} className="inline w-fit text-xs md:text-sm">
                          {program}{idx < university.programs.length - 1 && ","} 
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-3 max-md:px-4 md:px-6 relative max-md:hidden md:table-cell">
                    <div className="absolute inset-y-0 left-0 w-px border border-primary max-md:text-xs md:text-sm" />
                    <h1 className="max-md:text-xs md:text-sm">
                      {university.sector === 'Government' && 'Govt'}
                      {university.sector === 'Semi Government' && 'Semi Govt'}
                      {university.sector === 'Private' && 'Private'}
                    </h1>
                  </td>
                  <td className="py-3 max-md:px-4 md:px-6 relative text-red-500 font-semibold sm:whitespace-nowrap">
                    <div className="absolute inset-y-0 left-0 w-px border border-primary" />
                    <h1 className="max-[340px]:text-[0.65rem] max-md:text-xs md:text-sm">{university.deadline}</h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={loading ? "hidden" : "max-sm:mt-6 sm:mt-8 flex flex-wrap max-[1024px]:justify-center lg:justify-start gap-3 lg:flex-col"}>
          {advertisementData.map((ad) => (
            <Link href={`/advertisement/${ad._id}`} key={ad._id}>
              <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] xl:w-[280px] xl:h-[280px] 2xl:w-[320px] 2xl:h-[320px] relative top-0 left-0 fancy">
                <Image
                  src={ad.advertisementImg}
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