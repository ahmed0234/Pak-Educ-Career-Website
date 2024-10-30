"use server";


import { connectToDatabase } from "@/db/connectDB.js";
import { AdvertisementsData } from "@/db/advertisement";
import { revalidatePath } from "next/cache";


export async function submitContentAction({ content, priority, advertisementImage }) {
  if (!content) {
    throw new Error("Content is required.");
  }
  var priority = Number(priority)

  try {
    await connectToDatabase();
    console.log(typeof(priority));
    const newContent = new AdvertisementsData({ contentPara: content, priority, advertisementImg: advertisementImage });
    const savedContent = await newContent.save();
    // Revalidate the path for the new advertisement page
    revalidatePath(`/advertisement/${savedContent._id.toString()}`);
    return { success: true, message: "Content saved successfully",};
  } catch (error) {
    console.error("Error saving content:", error);
    throw new Error("Failed to save content. Please try again.");
  }
}