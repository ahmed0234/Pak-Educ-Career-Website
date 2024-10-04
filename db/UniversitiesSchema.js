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
      required: true,
      index: true,
    },
    sector: {
      type: String,
      enum: ["Government", "Semi Government", "Private"],
      required: true,
    },
    priority: {
      type: Number,
      default: 0, // Lower numbers have higher priority
      index: true,
    },
    importantAdmission: {
      type: Boolean,
      default: false, // Yes for important admission
    },
    admissionOpenDate: {
      type: Date,
      required: true,
    },
    testDate: {
      type: Date,
      required: true,
    },
    deadlineDate: {
      type: Date,
      required: true,
    },
    universityWebsite: {
      type: String,
      required: true,
    },
    hrAdmissionNotice: {
      type: String,
    },
    programs: {
      bsPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
        },
        list: {
          type: [String], // Array of strings to store BS program names
          default: [],
        },
      },
      mphilPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
        },
        list: {
          type: [String], // Array of strings to store MPhil program names
          default: [],
        },
      },
      phdPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
        },
        list: {
          type: [String], // Array of strings to store PhD program names
          default: [],
        },
      },
      adpPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
        },
        list: {
          type: [String], // Array of strings to store ADP program names
          default: [],
        },
      },
      bs5thPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
        },
        list: {
          type: [String], // Array of strings to store BS 5th Semester program names
          default: [],
        },
      },
      diplomaPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
        },
        list: {
          type: [String], // Array of strings to store Diploma program names
          default: [],
        },
      },
    },
  },
  { timestamps: true }
);

const University =
  mongoose.models.Universities ||
  mongoose.model("Universities", UniversitySchema);

export default University;
