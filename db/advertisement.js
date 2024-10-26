// models/University.js



import mongoose from "mongoose";

const advertisementSchema = new mongoose.Schema({
    contentPara: {
      type: String,

    },
    priority: {
      type: Number,
    },
    advertisementImg: {
      type: String,
 
    },

  },  { timestamps: true });

export const AdvertisementsData =
  mongoose.models.AdvertisementsData ||
  mongoose.model("AdvertisementsData", advertisementSchema);


