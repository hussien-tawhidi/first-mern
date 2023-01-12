import mongoose from "mongoose";

const freindsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lname: { type: String, required: true },
  age: { type: Number},
});

const FreindsModels = mongoose.model("freinds", freindsSchema);

export default FreindsModels;
