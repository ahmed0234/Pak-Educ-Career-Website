"use server";

import { connectToDatabase } from "@/db/connectDB"; // Assuming this connects to your MongoDB
import UniversityModel from "@/db/UniversitiesSchema"; // Your Mongoose model

// Function to build the query dynamically
async function buildQuery(data) {
    const { city, province, sector, Bs, Mphil, Phd, Adp, Diploma, Bs5th } = data;
  
    // Initialize an empty query object
    let query = {};

    // Add location-based filters if they are provided
    if (city) {
      query['location.city'] = city;
    }
  
    if (province) {
      query['location.province'] = province;
    }
  
    if (sector) {
      query.sector = sector;
    }

    // Handle program availability only if at least one program is selected
    const programConditions = [];
    
    if (Bs) programConditions.push({ "programs.bsPrograms.isOpen": true });
    if (Mphil) programConditions.push({ "programs.mphilPrograms.isOpen": true });
    if (Phd) programConditions.push({ "programs.phdPrograms.isOpen": true });
    if (Adp) programConditions.push({ "programs.adpPrograms.isOpen": true });
    if (Diploma) programConditions.push({ "programs.diplomaPrograms.isOpen": true });
    if (Bs5th) programConditions.push({ "programs.bs5thPrograms.isOpen": true });

    // If at least one program is selected, use `$or` to query any of the programs
    if (programConditions.length > 0) {
      query.$or = programConditions;
    }

    return query;
}

// Server action to find filtered universities
export async function findFilteredUniversities(data) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Build the query based on form data
    const query = await buildQuery(data);
    // Query the MongoDB database using Mongoose
    const universities = await UniversityModel.find(query);
 
    
    // Return the result
    return universities;
  } catch (error) {
    console.error("Error fetching universities:", error);
    return { error: "Failed to fetch universities" };
  }
}
