const page = () => {
  return (
    <div className="bg-background py-10 px-4">
      <div className="max-w-4xl mx-auto bg-zinc-900 p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add University Details
        </h2>
        <form className="space-y-6">
          {/* University Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold">
              University Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 text-black font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label htmlFor="location" className="mb-2 font-semibold">
              Location (Province/Region)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="border border-gray-300 text-black font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Admission Status */}
          <div className="flex flex-col">
            <label htmlFor="admissionStatus" className="mb-2 font-semibold">
              Admission Status
            </label>
            <select
              id="admissionStatus"
              name="admissionStatus"
              className="border border-gray-300 text-black font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="true">Open</option>
              <option value="false">Closed</option>
            </select>
          </div>

          {/* BS Programs */}

          <div className="flex flex-col">
            <label htmlFor="bsPrograms" className="mb-2 font-semibold">
              BS Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="bsOpen"
                name="bsProgramsOpen"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="bsOpen" className="font-semibold">
                BS Admissions Open
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="bsPrograms"
              name="bsPrograms"
              placeholder="Enter BS programs, separated by commas"
              className="border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>
          {/* MPhil Programs */}
          <div className="flex flex-col">
            <label htmlFor="bsPrograms" className="mb-2 font-semibold">
              MPhil Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="bsOpen"
                name="bsProgramsOpen"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="bsOpen" className="font-semibold">
                MPhil Programs Open
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="bsPrograms"
              name="bsPrograms"
              placeholder="Enter BS programs, separated by commas"
              className="border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>

          {/* PhD Programs */}
          <div className="flex flex-col">
            <label htmlFor="bsPrograms" className="mb-2 font-semibold">
              PhD Programs
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="bsOpen"
                name="bsProgramsOpen"
                className="focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="bsOpen" className="font-semibold">
                PhD Programs Open
              </label>
            </div>

            {/* Textarea for Adding Programs */}
            <textarea
              id="bsPrograms"
              name="bsPrograms"
              placeholder="Enter BS programs, separated by commas"
              className="border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Additional Info */}
            <p className="text-sm text-rose-500 mt-2">
              Separate each program with a comma (e.g. Computer Science,
              Agriculture, Business Administration).
            </p>
          </div>

          {/* Established Year */}
          <div className="flex flex-col">
            <label htmlFor="establishedYear" className="mb-2 font-semibold">
              Established Year
            </label>
            <input
              type="number"
              id="establishedYear"
              name="establishedYear"
              className="border border-gray-300 text-black font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Priority */}
          <div className="flex flex-col">
            <label htmlFor="priority" className="mb-2 font-semibold">
              Priority
            </label>
            <input
              type="number"
              id="priority"
              name="priority"
              className="border border-gray-300 text-black font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* University Code */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold">
              University Code
            </label>
            <input
              type="text"
              id="name"
              name="University Code"
              required
              className="border border-gray-300 text-black font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ImportantAdmission or Not */}
          <div className="flex flex-col">
            <label htmlFor="admissionStatus" className="mb-2 font-semibold">
            Important Admission
            </label>
            <select
              id="admissionStatus"
              name="ImportantAdmission"
              className="border border-gray-300 text-black font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-[family-name:var(--font-geist-sans)]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
