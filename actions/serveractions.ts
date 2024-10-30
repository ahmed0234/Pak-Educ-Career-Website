// "use server";

// import { connectToDatabase } from "@/db/connectDB";
// import Universitymodel from "@/db/UniversitiesSchema";



// export async function Create_University(data: FormData) {
//   const admissionOpenDate1 = new Date(data.get("admissionopendate") as string);
//   const testDate2 = new Date(data.get("testDate") as string);
//   const deadlineDate3 = new Date(data.get("deadlinedate") as string);

//   // const formatDate = (dateString) => {
//   //   const date = new Date(dateString);
//   //   return `${date.getDate().toString().padStart(2, "0")}-${(
//   //     date.getMonth() + 1
//   //   )
//   //     .toString()
//   //     .padStart(2, "0")}-${date.getFullYear()}`;
//   // };

//   // Extract values from the FormData object
//   const university = {
//     universityName: data.get("university_name") as string,
//     location: data.get("location") as string,
//     sector: data.get("sector") as string,
//     bsProgramsOpen: data.get("bsProgramsOpen") === "on",
//     bsPrograms: (data.get("bsPrograms") as string)
//       .split(",")
//       .map((p) => p.trim()),
//     mphilProgramsOpen: data.get("MphilProgramsOpen") === "on",
//     mphilPrograms: (data.get("MphilPrograms") as string)
//       .split(",")
//       .map((p) => p.trim()),
//     phdProgramsOpen: data.get("PhDprogramsopen") === "on",
//     phdPrograms: (data.get("PhDprograms") as string)
//       .split(",")
//       .map((p) => p.trim()),
//     adpProgramsOpen: data.get("ADP_programs_open") === "on",
//     adpPrograms: (data.get("adp_programs") as string)
//       .split(",")
//       .map((p) => p.trim()),
//     bs5thProgramsOpen: data.get("bs5th_programs_open") === "on",
//     bs5thPrograms: (data.get("bs5th_programs") as string)
//       .split(",")
//       .map((p) => p.trim()),
//     diplomaProgramsOpen: data.get("Diplomaopen") === "on",
//     diplomaPrograms: (data.get("Diplomaprograms") as string)
//       .split(",")
//       .map((p) => p.trim()),
//     priority: parseInt(data.get("priority") as string, 10),
//     importantAdmission: data.get("importantadmission") === "true",
//     admissionOpenDate: admissionOpenDate1,
//     testDate: testDate2,
//     deadlineDate: deadlineDate3,
//     universityWebsite: data.get("universitywebsite") as string,
//     hrAdmissionNotice: (data.get("hradmissionnotice") as string) || "",
//   };

//   // Log the organized data for debugging purposes

//   await connectToDatabase();

//   const universityData = {
//     name: university.universityName,
//     location: university.location,
//     sector: university.sector,
//     priority: university.priority,
//     importantAdmission: university.importantAdmission,
//     admissionOpenDate: university.admissionOpenDate,
//     testDate: university.testDate,
//     deadlineDate: university.deadlineDate,
//     universityWebsite: university.universityWebsite,
//     hrAdmissionNotice: university.hrAdmissionNotice,
//     programs: {
//       bsPrograms: {
//         isOpen: university.bsProgramsOpen,
//         list: university.bsPrograms,
//       },
//       mphilPrograms: {
//         isOpen: university.mphilProgramsOpen,
//         list: university.mphilPrograms,
//       },
//       phdPrograms: {
//         isOpen: university.phdProgramsOpen,
//         list: university.phdPrograms,
//       },
//       adpPrograms: {
//         isOpen: university.adpProgramsOpen,
//         list: university.adpPrograms,
//       },
//       bs5thPrograms: {
//         isOpen: university.bs5thProgramsOpen,
//         list: university.bs5thPrograms,
//       },
//       diplomaPrograms: {
//         isOpen: university.diplomaProgramsOpen,
//         list: university.diplomaPrograms,
//       },
//     },
//   };

//   // Create a new instance of the University model
//   const newUniversity = new Universitymodel(universityData);

//   newUniversity.save().then(() => {
//     return { success: true, message: 'Data uploaded successfully!' };
//   }).catch((error) => {
//     return { success: false, message: error.message };
//   });

//   // Example: save to database (pseudo-code)
//   // await saveToDatabase(university);

//   // Revalidate the page to show new data
//   // revalidatePath("/");

// }

"use server";

import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import { revalidatePath } from "next/cache";
// Improved Server Action to handle form data submission and provide feedback
export async function Create_University(data: FormData, hrimage: string) {


  
  try {
    // Extract and transform values from FormData
    const deadlineDate = new Date(data.get("deadlinedate") as string);
    const testDate =  (data.get("testDate") as string);


   
  

  
    

    // Extract values from the FormData object
    const university = {
      name: data.get("university_name") as string,
      location: {
        province: data.get("location_province") as string || null,
        city: (data.get("location_city") as string) || null,
      },
      affiliation: {
        isOpen:  (data.get("affiliation") as string) === "on",
        name: (data.get("affiliation_name") as string) || null,
      },
      sector: data.get("sector") as string,
      priority: parseInt(data.get("priority") as string, 10) || null,
      importantAdmission: data.get("importantadmission") === "true",
      admissionDates: {
        deadlineDate,
        testDate,
      },
      universityWebsite: (data.get("universitywebsite") as string) || null,
      universityDescription: (data.get("universityDescription") as string) || null,
      hrAdmissionNotice: (hrimage as string) || null,
      programs: {
        bsPrograms: {
          isOpen: data.get("bsProgramsOpen") === "on",
          list:
          (data.get("bsPrograms") as string)
          ?.split(",")
          .map((p) => p.trim()) || [],
             
        },
        mphilPrograms: {
          isOpen: data.get("MphilProgramsOpen") === "on",
          list:
            (data.get("MphilPrograms") as string)
              ?.split(",")
              .map((p) => p.trim()) || [],
        },
        phdPrograms: {
          isOpen: data.get("PhDprogramsopen") === "on",
          list:
            (data.get("PhDprograms") as string)
              ?.split(",")
              .map((p) => p.trim()) || [],
        },
        adpPrograms: {
          isOpen: data.get("ADP_programs_open") === "on",
          list:
            (data.get("adp_programs") as string)
              ?.split(",")
              .map((p) => p.trim()) || [],
        },
        bs5thPrograms: {
          isOpen: data.get("bs5th_programs_open") === "on",
          list:
            (data.get("bs5th_programs") as string)
              ?.split(",")
              .map((p) => p.trim()) || [],
        },
        diplomaPrograms: {
          isOpen: data.get("Diplomaopen") === "on",
          list:
            (data.get("Diplomaprograms") as string)
              ?.split(",")
              .map((p) => p.trim()) || [],
        },
      },
    };


    // Validate required fields
    if (
      !university.name ||
      !university.location.province ||
      !university.sector
    ) {
      throw new Error(
        "University name, location (province), and sector are required fields."
      );
    }


  

    // Connect to the database
    await connectToDatabase();

    // Create and save the university document
    const newUniversity = new Universitymodel(university);
    await newUniversity.save();
    
    revalidatePath('/');

    // Return a success response
    return { success: true, message: "University data uploaded successfully!" };
  } catch (error: any) {
    // Handle errors and return a failure response
    return { success: false, message: error.message };
  }
}
