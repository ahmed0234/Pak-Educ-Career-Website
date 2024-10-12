"use client";
import { useState } from "react";

const Sortingtable = ({filteredUniversitiesData}) => {
  // Form state management
  const [formData, setFormData] = useState({
    province: '',
    city: '',
    sector: '',
    programs: {
      Bs: false,
      Mphil: false,
      Phd: false,
      Adp: false,
      Diploma: false,
      Bs5th: false,
    },
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        programs: {
          ...prevFormData.programs,
          [name]: checked, // Update the specific program checkbox
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value, // Update regular text/select inputs
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Organized object containing all form data in the desired format
    const organizedData = {
      city: formData.city,
      province: formData.province,
      sector: formData.sector,
      Bs: formData.programs.Bs,
      Mphil: formData.programs.Mphil,
      Phd: formData.programs.Phd,
      Adp: formData.programs.Adp,
      Diploma: formData.programs.Diploma,
      Bs5th: formData.programs.Bs5th,
    };

    filteredUniversitiesData(organizedData)


  };

  return (
    <form
      className="p-6 space-y-6 bg-zinc-900 shadow-md rounded-lg w-full max-w-4xl  mt-16 mb-16"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        Filter Universities
      </h1>

      {/* Province */}
      <div>
        <label className="block text-white font-semibold mb-2" htmlFor="province">
          Select Province:
        </label>
        <select
          id="province"
          name="province"
          value={formData.province}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-300 text-black"
        >
          <option value="">None</option>
          <option value="Punjab">Punjab</option>
          <option value="Sindh">Sindh</option>
          <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
          <option value="Azad Kashmir">Azad Kashmir</option>
          <option value="Gilgit Baltistan">Gilgit-Baltistan</option>
        </select>
      </div>

      {/* City */}
      <div>
        <label className="block text-white font-semibold mb-2" htmlFor="city">
          Select City:
        </label>
        <input
          id="city"
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter city name in Capitalize Form"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-300 text-black"
        />
      </div>

      {/* Programs */}
      <div>
        <label className="block text-white font-semibold mb-2">Select Programs:</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="Bs"
                checked={formData.programs.Bs}
                onChange={handleChange}
                className="form-checkbox px-4 py-2"
              />
              <span>BS</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="Mphil"
                checked={formData.programs.Mphil}
                onChange={handleChange}
                className="form-checkbox px-4 py-2"
              />
              <span>MPhil</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="Phd"
                checked={formData.programs.Phd}
                onChange={handleChange}
                className="form-checkbox px-4 py-2"
              />
              <span>PhD</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="Adp"
                checked={formData.programs.Adp}
                onChange={handleChange}
                className="form-checkbox px-4 py-2"
              />
              <span>ADP</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="Diploma"
                checked={formData.programs.Diploma}
                onChange={handleChange}
                className="form-checkbox px-4 py-2"
              />
              <span>Diploma</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="Bs5th"
                checked={formData.programs.Bs5th}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span>BS 5th Semester</span>
            </label>
          </div>
        </div>
      </div>

      {/* Sector */}
      <div>
        <label className="block text-white font-semibold mb-2" htmlFor="sector">
          Select Sector:
        </label>
        <select
          id="sector"
          name="sector"
          value={formData.sector}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-300 text-black"
        >
          <option value="">Any</option>
          <option value="Government">Government</option>
          <option value="Semi Government">Semi Government</option>
          <option value="Private">Private</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Filter Universities
        </button>
      </div>
    </form>
  );
};

export default Sortingtable;
