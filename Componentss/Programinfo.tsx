export const Programinfo = ({ university, program }) => {
  const selectedProgram = university.programs[program]; // Dynamically access the correct program

  // Extract only the first part like "BS", "MPhil" without "Programs"
  const programTypeRaw = program.replace("Programs", "").replace(/([A-Z])/g, ' $1').trim();
  const programType = programTypeRaw.charAt(0).toUpperCase() + programTypeRaw.slice(1)
  console.log(programTypeRaw, programType);

  return (
    <div className="BS_Programs pl-4 mt-8 ">
      {selectedProgram?.isOpen && (
        <div>
          <h1 className="font-bold text-3xl text-cyan-500 underline mb-4">
            {programType} Programs
          </h1>
          <h1 className="font-bold mb-6 pl-2">
            {university.name} has announced {programType} Admissions in the following programs for fall 2024:
          </h1>
          <div className="flex flex-col gap-4 pl-4">
            {selectedProgram.list.map((programName, idx) => (
              <h1 key={programName} className="pl-4">
                {idx + 1}. {programType.toUpperCase()} {programName} {/* Display type + program name */}
              </h1>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
