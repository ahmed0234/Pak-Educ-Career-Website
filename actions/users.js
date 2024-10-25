// app/actions.js
"use server";

import { Users } from "../db/userMessages";
import { connectToDatabase } from "@/db/connectDB.js";



export async function submitContactForm({ name, phone, email, subject, message }) {
  try {
    await connectToDatabase();

    // Validate the data
    if (!name || !phone || !email || !subject || !message) {
      throw new Error("All fields are required");
    }

    // Create new contact entry
    const newContact = await Users.create({
      name,
      phone,
      email,
      subject,
      message,
    });

    return { success: true, message: "Message sent successfully", contact: newContact };
  } catch (error) {
    console.error("Error in server action:", error);
    throw new Error("Failed to send message");
  }
}
