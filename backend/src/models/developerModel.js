const mongoose = require("mongoose");

const developerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    stack: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    skills: [
      {
        name: {
          type: String,
          trim: true,
          lowercase: true,
        },
        level: {
          type: String,
          enum: ['beginner','intermediate','advance'],
          trim: true,
          lowercase: true,
          default: null,
        },
      },
    ],
    projectStatus: {
      type: String,
      enum: ["assigned", "partiallyAssigned", "free"],
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Developer = mongoose.model("Developer", developerSchema);


module.exports = Developer;