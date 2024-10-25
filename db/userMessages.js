// models/University.js

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
      type: String,

    },
    phone: {
      type: String,

    },
    email: {
      type: String,
 
    },
    subject: {
      type: String,

    },
    message: {
      type: String,
 
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export const Users =
  mongoose.models.Users ||
  mongoose.model("Users", contactSchema);


