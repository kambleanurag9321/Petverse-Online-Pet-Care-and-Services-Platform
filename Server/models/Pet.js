import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    species: {
      type: String,
      required: true,
      enum: ["Dog", "Cat", "Bird", "Rabbit", "Other"],
    },

    breed: {
      type: String,
      default: "",
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Unknown"],
      default: "Unknown",
    },

    dateOfBirth: {
      type: Date,
    },

    weight: {
      type: Number,
      min: 0,
    },

    profileImage: {
      type: String,
      default: "",
    },

    medicalInfo: {
      type: String,
      default: "",
    },

    vaccinations: [
      {
        name: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
        },
        nextDueDate: {
          type: Date,
        },
      },
    ],

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model("Pet", petSchema);

export default Pet;