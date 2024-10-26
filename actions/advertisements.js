"use server";


import { connectToDatabase } from "@/db/connectDB.js";
import { AdvertisementsData } from "@/db/advertisement";


export async function submitContentAction({ content, priority, advertisementImage }) {
  if (!content) {
    throw new Error("Content is required.");
  }
  var priority = Number(priority)

  try {
    await connectToDatabase();
    console.log(typeof(priority));
    const newContent = new AdvertisementsData({ contentPara: content, priority, advertisementImg: advertisementImage });
    await newContent.save();
    console.log(newContent);
    return { success: true, message: "Content saved successfully",};
  } catch (error) {
    console.error("Error saving content:", error);
    throw new Error("Failed to save content. Please try again.");
  }
}