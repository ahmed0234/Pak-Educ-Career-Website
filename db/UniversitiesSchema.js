// models/University.js

import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true, // The city or area where the university is located
      index: true,
    },
    importantAdmission: {
      type: Boolean,
      default: false, // true for open, false for closed
    },
    admissionStatus: {
      type: Boolean,
      required: true,
      default: false, // true for open, false for closed
      index: true,
    },
    programs: {
      bsPrograms: {
        isOpen: {
          type: Boolean,
          default: false, // True if admissions are open
          index: true,
        },
        list: {
          type: [String], // Array of strings to store BS program names (e.g., "Computer Science", "Agriculture")
          default: [],
        },
      },
      mphilPrograms: {
        isOpen: {
          type: Boolean,
          default: false, // True if admissions are open
          index: true,
        },
        list: {
          type: [String], // Array of strings to store MPhil program names
          default: [],
        },
      },
      phdPrograms: {
        isOpen: {
          type: Boolean,
          default: false, // True if admissions are open
          index: true,
        },
        list: {
          type: [String], // Array of strings to store PhD program names
          default: [],
        },
      },
    },
    establishedYear: {
      type: Number,
      index: true,
    },
    code: {
      type: String,
      unique: true,
      sparse: true,
    },
    priority: {
      type: Number,
      default: 0, // Lower numbers have higher priority
      index: true,
    },
  },
  { timestamps: true }
);

const University =
  mongoose.models.Universities ||
  mongoose.model("Universities", UniversitySchema);

export default University;
