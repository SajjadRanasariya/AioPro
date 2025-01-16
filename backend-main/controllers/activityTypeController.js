import mongoose from "mongoose";
import ActivityType from "../models/activityType";
// import ActivityType from "../models/"

export const allActivityType = async (query) => {
  return await ActivityType.find(query);
};

export const oneActivityType = async (id) => {
  return await ActivityType.findById(id);
};

export const addActivityType = async (chemist) => {
  return await ActivityType.create(chemist);
};

export const editActivityType = async (chemist) => {
  return await ActivityType.findByIdAndUpdate(chemist._id, chemist);
};

export const changeStatus = async (chemist) => {
  return await ActivityType.findByIdAndUpdate(chemist._id, chemist);
};

export const deleteActivityType = async (id) => {
  return await ActivityType.findOneAndRemove({ _id: id });
};

// export const deleteManyChemist = async (chemistIds) => {
//   // Check if opdIds is an array
//   if (!Array.isArray(chemistIds) || chemistIds.length === 0) {
//     console.error("chemistIds is not a valid array of ObjectIds");
//     return; // Exit the function gracefully
//   }

//   const deletionCriteria = {
//     _id: { $in: chemistIds.map((id) => mongoose.Types.ObjectId(id)) },
//   };

//   try {
//     const result = await Chemist.deleteMany(deletionCriteria);
//     return result;
//   } catch (err) {
//     console.error(err);
//     throw err; // Re-throw the error to be handled by the caller if needed
//   }
// };
