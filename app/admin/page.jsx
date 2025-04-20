"use client";

import Miscellaneous from "./miscellaneous";
import { Create_University } from "@/actions/serveractions";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";
import { gotham } from "../layout";
import Auth from "@/components/client/Auth";


const Page = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [hrimage, sethrimage] = useState(null);
  const [showme, setshowme] = useState(false)

  function authenticator(abc) {
    setshowme(abc)
  } 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      // Call the server action
      const response = await Create_University(formData, hrimage);

      // Handle the response
      if (response.success) {
        setMessage(response.message);
      } else {
        setError(response.message);
      }
    } catch (e) {
      setError("An unexpected error occurred.", e.message);
    } finally {
      setLoading(false);
    }
  };
 
  const copyToClipboard = () => {
   
    navigator.clipboard.writeText(hrimage).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      alert("Text copied to clipboard!", err);
    });
  };
  return (
  <div className="min-h-screen">
    <Auth authenticator={authenticator}/>
    <div className={`${showme? "block" : "hidden"} first-line:hidden bg-background py-10 px-4 `}>
  
        <Miscellaneous />
        <div className="container mb-4">
          <h1 className={`${gotham.className} text-2xl border-b inline-block text-orange-500 border-orange-500`}>Universities Details Add Portal</h1>
        </div>
      <div className="max-w-4xl mx-auto bg-primary p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-secondary">
          Add University Details
        </h2>
        <form className="space-y-6 " onSubmit={handleSubmit}>
          {/* University Name */}
          <div className="flex flex-col">
            <label htmlFor="university_name" className="mb-2 font-semibold text-secondary">
              University Name
            </label>
            <input
              type="text"
              id="university_name"
              name="university_name"
              required
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location Province*/}
          <div className="flex flex-col">
            <label htmlFor="location_province" className="mb-2 font-semibold text-secondary">
              Location (Province)
            </label>
            <input
              type="text"
              id="location_province"
              name="location_province"
              required
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Location Province*/}

          {/* Location City*/}
          <div className="flex flex-col">
            <label htmlFor="location_city" className="mb-2 font-semibold text-secondary">
              Location (City)
            </label>
            <input
              type="text"
              id="location_city"
              name="location_city"
              required
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Location City*/}

          {/* Affiliation if have Start*/}

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="affiliation"
                name="affiliation"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="affiliation" className="font-semibold text-secondary">
                Affiliation
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="affiliation_name"
              name="affiliation_name"
              placeholder="Affiliation University Name"
              className="border text-primary border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Affiliation if have End*/}

          {/* Sector */}
          <div className="flex flex-col">
            <label htmlFor="sector" className="mb-2 font-semibold text-secondary">
              Sector
            </label>
            <select
              id="sector"
              name="sector"
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Government">Government</option>
              <option value="Semi Government">Semi Government</option>
              <option value="Private">Private</option>
            </select>
          </div>

          {/* BS Programs */}

          <div className="flex flex-col">
            <label htmlFor="bsPrograms" className="mb-2 font-semibold text-secondary">
              BS Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="bsOpen"
                name="bsProgramsOpen"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="bsOpen" className="font-semibold text-secondary">
                BS Admissions Open
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="bsPrograms"
              name="bsPrograms"
              placeholder="Enter BS programs, separated by commas"
              className="border text-primary border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>
          {/* BS Programs */}

          {/* MPhil Programs */}
          <div className="flex flex-col">
            <label htmlFor="MphilProgramsOpen" className="mb-2 font-semibold text-secondary">
              MPhil Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="MphilProgramsOpen"
                name="MphilProgramsOpen"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="bsOpen" className="font-semibold text-secondary">
                MPhil Programs Open
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="MphilPrograms"
              name="MphilPrograms"
              placeholder="Enter MPhil programs, separated by commas"
              className="border text-primary border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>
          {/* MPhil Programs */}

          {/* PhD Programs */}
          <div className="flex flex-col">
            <label htmlFor="PhDprogramopen" className="mb-2 font-semibold text-secondary">
              PhD Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="PhDprogramsopen"
                name="PhDprogramsopen"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="PhDprogramsopen" className="font-semibold text-secondary">
                PhD Programs Open
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="PhDprograms"
              name="PhDprograms"
              placeholder="Enter PhD programs, separated by commas"
              className="border text-primary border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>

          {/* ADP Programs */}
          <div className="flex flex-col">
            <label htmlFor="ADP_programs" className="mb-2 font-semibold text-secondary">
              ADP Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="ADP_programs_open"
                name="ADP_programs_open"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="adp_programs_open" className="font-semibold text-secondary">
                ADP Programs Open
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="adp_programs"
              name="adp_programs"
              placeholder="Enter ADP programs, separated by commas"
              className="border text-primary border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>
          {/* ADP Programs */}

          {/* BS 5th Semester */}
          <div className="flex flex-col">
            <label htmlFor="bs5th_programs_open" className="mb-2 font-semibold text-secondary">
              BS 5th Semester Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="bs5th_programs_open"
                name="bs5th_programs_open"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="bs5th_programs_open" className="font-semibold text-secondary">
                BS 5th Semester Programs Open
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="bs5th_programs"
              name="bs5th_programs"
              placeholder="Enter BS 5th Semester programs, separated by commas"
              className="border text-primary border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>
          {/* BS 5th Semester */}

          {/* Diploma  */}
          <div className="flex flex-col">
            <label htmlFor="Diploma" className="mb-2 font-semibold text-secondary">
              Diploma Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="Diplomaopen"
                name="Diplomaopen"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="diploma_programs_open" className="font-semibold text-secondary">
                Diploma Programs
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="diploma_programs"
              name="Diplomaprograms"
              placeholder="Enter Diploma  programs, separated by commas"
              className="border text-primary border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>
          {/* Diploma  */}


          {/* fcps/mcps Programs */}

          <div className="flex flex-col">
            <label htmlFor="fcpsmcpsProgramsOpen" className="mb-2 font-semibold text-secondary">
            FCPS/MCPS Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="fcpsmcpsProgramsOpen"
                name="fcpsmcpsProgramsOpen"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="fcpsmcpsProgramsOpen" className="font-semibold text-secondary">
              FCPS/MCPS Admissions Open
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="fcpsmcpsPrograms"
              name="fcpsmcpsPrograms"
              placeholder="Enter FCPS programs, separated by commas"
              className="border text-primary border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>
          {/* fcps/mcps Programs */}


          
              
                      {/* University Description */}
          <div className="flex flex-col">
            <label htmlFor="universityDescription" className="mb-2 font-semibold text-secondary">
              University Description
            </label>
            <textarea
            rows={5}
              type="text"
              id="universityDescription"
              name="universityDescription"
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          

          {/* ImportantAdmission or Not */}
          <div className="flex flex-col">
            <label htmlFor="admissionStatus" className="mb-2 font-semibold text-secondary">
              Important Admission
            </label>
            <select
              id="admissionStatus"
              name="importantadmission"
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        {/* ImportantAdmission or Not */}

          {/*  Priority of Important Admission */}
          <div className="flex flex-col">
            <label htmlFor="priority" className="mb-2 font-semibold text-secondary">
              Priority of Important Admission
            </label>
            <input
              type="number"
              id="priority"
              name="priority"
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
              {/*  Priority of Important Admission */}

          

          {/* DeadLine Date S*/}
          <div className="flex flex-col">
            <label htmlFor="deadlinedate" className="mb-2 font-semibold text-secondary">
              Deadline Date
            </label>
            <input
              type="date"
              id="deadlinedate"
              name="deadlinedate"
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* DeadLine Date E*/}

          {/* Test Date */}
          <div className="flex flex-col">
            <label htmlFor="testDate" className="mb-2 font-semibold text-secondary">
              Test Dates
            </label>
            <input
              type="text"
              id="testDate"
              name="testDate"
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="text-sm text-rose-500 mt-2">
              Separate each Date with a comma (e.g. 01/10/2024,
              11/10/2024).
          </p>
          {/* Test Date */}

          {/* University Website*/}
          <div className="flex flex-col">
            <label htmlFor="testDate" className="mb-2 font-semibold text-secondary">
              University Website To Apply Online
            </label>
            <input
              type="text"
              id="universitywebsite"
              name="universitywebsite"
              className="border border-gray-300 text-primary font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* University Website*/}

          {/* HR NOTICE */}
          {/* <div className="flex flex-col">
            <label htmlFor="testDate" className="mb-2 font-semibold">
              HR ADMISSION NOTICE IMAGE LINK
            </label>
            <input
              type="text"
              id="hradmissionnotice"
              name="hradmissionnotice"
              className="border border-gray-300 text-black font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
          {/* HR NOTICE */}

            <div className=" h-fit w-fit flex gap-6  ">
              <div className="border h-fit px-6 flex flex-col gap-6 w-fit rounded-2xl text-center py-6">
                <h1 className="text-secondary">HR NOTICE IMAGE UPLOAD</h1>
                <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      alert("Upload Completed");
                      sethrimage(res[0].url);
                    }}
                    onUploadError={(error) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
              </div>

              {
              hrimage &&  
              <div className="w-fit h-fit">
                <Image src={hrimage} alt="Image" width={200} height={200} />        
              </div>
              }
            
             
            </div>
            {hrimage && (
              <div className="flex flex-col gap-2  w-fit text-wrap border">
                <button onClick={copyToClipboard} className="bg-black text-white py-2 px-4 rounded shadow-lg hover:bg-gray-800  focus:ring-opacity-75">
                  Copy Image Link
                </button>

              </div>
            )}
          

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-[family-name:var(--font-geist-sans)]"
            >
              {loading ? "Submitting..." : "Submit"}
              {/* Submit */}
            </button>
          </div>
          {message && <div className="success-message">{message}</div>}
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  </div>
  );
};

export default Page;
