"use client";
import { useState } from "react";

const Sortingtable = ({ filteredUniversitiesData, cities, onProvinceChange }) => {
  const [formData, setFormData] = useState({
    province: "",
    city: "",
    sector: "",
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
    if (name === "province") {
      setFormData({ ...formData, province: value, city: "" }); // Reset city when province changes
      onProvinceChange(value); // Notify parent of province change
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        programs: {
          ...formData.programs,
          [name]: checked,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    filteredUniversitiesData(organizedData);
  };

  const reSetvalues = () => {
    setFormData({
      province: "",
      city: "",
      sector: "",
      programs: {
        Bs: false,
        Mphil: false,
        Phd: false,
        Adp: false,
        Diploma: false,
        Bs5th: false,
      },
    });
    onProvinceChange(""); // Reset province in parent component
  };

  return (
    <form onSubmit={handleSubmit}className="p-6 space-y-6 bg-zinc-900 text-white dark:bg-neutral-100 dark:shadow-black dark:shadow-md dark:text-black shadow-md rounded-lg w-full max-w-4xl  mt-16 mb-16">
       <h1 className="text-lg  sm:text-2xl font-bold text-center mb-6 dark:text-black dark:simple-shadow">
      Filter University Admissions
      </h1>
      <div>
        <label htmlFor="province" className="block  font-semibold mb-2 dark:text-black" >Select Province:</label>
        <select
          id="province"
          name="province"
          value={formData.province}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-300 text-black dark:text-black"
        >
          <option value="">None</option>
          <option value="Punjab">Punjab</option>
          <option value="Sindh">Sindh</option>
          <option value="KPK">KPK</option>
          <option value="AJK">AJK</option>
          <option value="Balochistan">Balochistan</option>
        </select>
      </div>

      <div>
        <label htmlFor="city">Select City:</label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          disabled={!formData.province}
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-300 text-black"
        >
          <option value="">None</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Programs */}
      <div>
        <label className="block text-white dark:text-black font-semibold mb-2">
          Select Programs:
        </label>
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
        <label className="block text-white dark:text-black font-semibold mb-2" htmlFor="sector">
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
          <div>
            <button className="px-6 py-2 bg-red-500 rounded-xl dark:text-white" onClick={reSetvalues}>
              Reset
            </button>
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
