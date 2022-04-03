const mongoose = require("mongoose");

const developerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    stack: {
      type: String,
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
          enum: ["beginner", "intermediate", "advance"],
          trim: true,
          lowercase: true,
          default: null,
        },
      },
    ],
    projectStatus: {
      type: String,
      enum: ["assigned", "partiallyAssigned", "free"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: [8, "password must be at least 8 characters"],
      require: true,
    },
    assignedProjects: [
      {
        type: String,
      },
    ],
    experience: {
      type: Number,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

developerSchema.methods.toJSON = function () {
  const developerObject = this.toObject();
  delete developerObject.password;
  delete developerObject.isDeleted;
  return developerObject;
};

const Developer = mongoose.model("Developer", developerSchema);

module.exports = Developer;
