// models/University.js

import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema(
  {
    // University Name
    name: {
      type: String,
      required: true,
      index: true, // Index for faster searches on university name
    },

    // Location (Province & City)
    location: {
      province: {
        type: String,
        required: true,
        index: true, // Query universities based on the province
      },
      city: {
        type: String,
        index: true, // Query universities based on the city
      },
    },

    // Affiliation
    affiliation: {
      isOpen: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String, // List of BS programs
        default: null,
      },
    },

    // Sector (Government, Semi Government, Private)
    sector: {
      type: String,
      enum: ["Government", "Semi Government", "Private"],
      required: true,
      index: true, // Frequent searches by sector
    },

    // Priority
    priority: {
      type: Number,
      default: 0, // Lower number means higher priority
      index: true, // Priority indexing for sorting
    },

    // Programs with Admission Open Status
    programs: {
      bsPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
          index: true, // Search by BS program availability
        },
        list: {
          type: [String], // List of BS programs
          default: [],
        },
      },
      mphilPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
          index: true, // Search by MPhil program availability
        },
        list: {
          type: [String], // List of MPhil programs
          default: [],
        },
      },
      phdPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
          index: true, // Search by PhD program availability
        },
        list: {
          type: [String], // List of PhD programs
          default: [],
        },
      },
      adpPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
          index: true, // Search by ADP program availability
        },
        list: {
          type: [String], // List of ADP programs
          default: [],
        },
      },
      bs5thPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
          index: true, // Search by BS 5th Semester program availability
        },
        list: {
          type: [String], // List of BS 5th Semester programs
          default: [],
        },
      },
      diplomaPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
          index: true, // Search by Diploma program availability
        },
        list: {
          type: [String], // List of Diploma programs
          default: [],
        },
      },
      fcpsmcpsPrograms: {
        isOpen: {
          type: Boolean,
          default: false,
          index: true, // Search by FCPS program availability
        },
        list: {
          type: [String], // List of Diploma programs
          default: [],
        },
      },

    },

    // Admission Information
    importantAdmission: {
      type: Boolean,
      default: false, // Mark important admission periods
      index: true, // Query for important admissions
    },
    admissionDates: {
      deadlineDate: {
        type: Date,
        default: null,
      },

      testDate: {
        type: String,
        default: null,
      },
    },

    // University Website
    universityWebsite: {
      type: String,
      default: null,
    },

    // University Description
    universityDescription: {
      type: String,
      default: null,
    },

    universityAdmissionExpired: {
      type: Boolean,
      default: false,
    },

    // HR Admission Notice Link
    hrAdmissionNotice: {
      type: String, // Optional field for admission notice link
      default: null,
    },
  },
  { timestamps: true }
);

// Create compound indexes for querying by multiple fields
UniversitySchema.index({
  "location.province": 1,
  "location.city": 1,
  "programs.bsPrograms.isOpen": 1,
});
UniversitySchema.index({
  "location.city": 1,
  "programs.bsPrograms.isOpen": 1,
  "programs.mphilPrograms.isOpen": 1,
  "programs.phdPrograms.isOpen": 1,
  "programs.diplomaPrograms.isOpen": 1,
  "programs.bs5thPrograms.isOpen": 1,
  "programs.adpPrograms.isOpen": 1,
  "programs.fcpsmcpsPrograms.isOpen": 1,
});
UniversitySchema.index({ sector: 1, "programs.phdPrograms.isOpen": 1 });
UniversitySchema.index({ priority: 1, importantAdmission: 1 });
UniversitySchema.index(
  { "admissionDates.deadlineDate": -1, createdAt: 1 },
  { background: true }
);

const University =
  mongoose.models.Universities ||
  mongoose.model("Universities", UniversitySchema);

export default University;
