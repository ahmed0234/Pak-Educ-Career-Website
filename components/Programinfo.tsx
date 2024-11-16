export const Programinfo = ({ university, program }) => {
  const selectedProgram = university.programs[program]; // Dynamically access the correct program

  return (
    <div className="BS_Programs pl-2 mt-8">
      {selectedProgram?.isOpen && (
        <div>
          <h1 className="font-bold max-md:text-xl md:text-2xl lg:text-3xl text-cyan-500 underline mb-4">
            {program === `bsPrograms` && "BS "}
            {program === `bs5thPrograms` && "BS 5th Semester "}
            {program === `adpPrograms` && "ADP "}
            {program === `mphilPrograms` && "MPhil "}
            {program === `phdPrograms` && "PhD "}
            {program === `diplomaPrograms` && "Diploma "}
            Programs
          </h1>
          <div className="pl-2 flex flex-col gap-1">
            {selectedProgram.list.map((programName, idx) => (
              <h1 key={programName} className="pl-4 max-md:text-sm md:text-base lg:text-lg text-primary font-semibold">
                {idx + 1}. {programName}
              </h1>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

















// export const Programinfo = ({ university, program }) => {
//   const selectedProgram = university.programs[program]; // Dynamically access the correct program
//   // Extract only the first part like "BS", "MPhil" without "Programs"


//   // Split the programs into chunks of 10
//   const chunkedPrograms = [];
//   for (let i = 0; i < selectedProgram.list.length; i += 15) {
//     chunkedPrograms.push(selectedProgram.list.slice(i, i + 15));
//   }

//   return (
//     <div className="BS_Programs pl-2 mt-8">
//       {selectedProgram?.isOpen && (
//         <div>
//           <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-cyan-500 underline mb-4">
//             {program === `bsPrograms` && "BS " } 
//             {program === `bs5thPrograms` && "BS 5th Semester "} 
//             {program === `adpPrograms` && "ADP " } 
//             {program === `mphilPrograms` && "MPhil " } 
//             {program === `phdPrograms` && "PhD " } 
//             {program === `diplomaPrograms` && "Diploma " } 
//             Programs
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-2">
//             {chunkedPrograms.map((chunk, idx) => (
//               <div key={idx} className="flex flex-col gap-2">
//                 {chunk.map((programName, programIdx) => (
//                   <h1 key={programName} className="pl-4 text-sm md:text-base lg:text-lg text-white dark:text-black">
//                     {idx * 15 + programIdx + 1}. {programName} {/* Display type + program name */}
//                   </h1>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
