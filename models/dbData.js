const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    status: String,
    rssiString: String,
    last_seen: String,
    koordinat: String,
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
