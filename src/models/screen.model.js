const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    theatre: {
      type: mongoose.Schema.Types.ObjectId,
      referances: "theatre",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("screen", screenSchema);
