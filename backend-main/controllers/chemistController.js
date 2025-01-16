import mongoose from "mongoose";
import Chemist from "../models/chemist";

export const allChemist = async (query) => {
  return await Chemist.find(query);
};


export const oneChemist = async (id) => {
  return await Chemist.findById(id);
};

export const addChemist = async (chemist) => {
  return await Chemist.create(chemist);
};

export const editChemist = async (chemist) => {
  return await Chemist.findByIdAndUpdate(chemist._id, chemist);
};

export const changeStatus = async (chemist) => {
  return await Chemist.findByIdAndUpdate(chemist._id, chemist);
};

export const deleteChemist = async (id) => {
  return await Chemist.findOneAndRemove({ _id: id });
};

export const deleteManyChemist = async (chemistIds) => {
  // Check if opdIds is an array
  if (!Array.isArray(chemistIds) || chemistIds.length === 0) {
    console.error("chemistIds is not a valid array of ObjectIds");
    return; // Exit the function gracefully
  }

  const deletionCriteria = {
    _id: { $in: chemistIds.map((id) => mongoose.Types.ObjectId(id)) },
  };

  try {
    const result = await Chemist.deleteMany(deletionCriteria);
    return result;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be handled by the caller if needed
  }
};
