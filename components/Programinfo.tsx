export const Programinfo = ({ university, program }) => {
  const selectedProgram = university.programs[program]; // Dynamically access the correct program
  // Extract only the first part like "BS", "MPhil" without "Programs"
  const programTypeRaw = program.replace("Programs", "").replace(/([A-Z])/g, ' $1').trim();
  const programType = programTypeRaw.charAt(0).toUpperCase() + programTypeRaw.slice(1);
  console.log(programTypeRaw, programType);

  // Split the programs into chunks of 10
  const chunkedPrograms = [];
  for (let i = 0; i < selectedProgram.list.length; i += 15) {
    chunkedPrograms.push(selectedProgram.list.slice(i, i + 15));
  }

  return (
    <div className="BS_Programs pl-2 mt-8">
      {selectedProgram?.isOpen && (
        <div>
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-cyan-500 underline mb-4">
            {program === `bs5thPrograms` ? "BS 5th" : programType.toUpperCase()} Programs
          </h1>
          <h1 className="text-xs md:text-base lg:text-lg font-bold mb-6 pl-2">
            {university.name} has announced {programType} Admissions in the following programs for fall 2024:
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-2">
            {chunkedPrograms.map((chunk, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                {chunk.map((programName, programIdx) => (
                  <h1 key={programName} className="pl-4 text-sm md:text-base lg:text-lg">
                    {idx * 15 + programIdx + 1}. {programName} {/* Display type + program name */}
                  </h1>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
