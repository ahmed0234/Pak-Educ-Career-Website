export const Programinfo = ({ university, program }) => {
    const selectedProgram = university.programs[program]; // Dynamically access the correct program
  
    return (
      <div className="BS_Programs pl-4 mt-8 ">
        {selectedProgram?.isOpen && (
          <div>
            <h1 className="font-bold text-3xl text-cyan-500 underline mb-4">
            {program.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase() + program.replace(/([A-Z])/g, ' $1').trim().slice(1)}

            </h1>
            <h1 className="font-bold mb-6 pl-2">
              {university.name} has announced {program.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase() + program.replace(/([A-Z])/g, ' $1').trim().slice(1)} Admissions in the following programs for fall 2024:
            </h1>
            <div className="flex flex-col gap-4 pl-4">
              {selectedProgram.list.map((programName, idx) => (
                <h1 key={programName} className="pl-4">{idx + 1}. {programName}</h1>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  