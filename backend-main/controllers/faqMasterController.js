import mongoose from "mongoose";
import FaqMaster from "./../models/faqMaster";

export const getFaqMaster = async (query) => {
    return await FaqMaster.find(query);
};

export const getOneFaqMaster = async (id) => {
    return await FaqMaster.findById(id);
};

export const addFaqMaster = async (opd) => {
    return await FaqMaster.create(opd);
};

export const updateFaqMaster = async (opd) => {
    return await FaqMaster.findByIdAndUpdate(opd._id, opd);
};

export const deleteFaqMaster = async (id) => {
    return await FaqMaster.findOneAndRemove({ _id: id });
};

// export const deleteMany = async (opdIds) => {
//     // Check if opdIds is an array
//     if (!Array.isArray(opdIds) || opdIds.length === 0) {
//         console.error("opdIds is not a valid array of ObjectIds");
//         return; // Exit the function gracefully
//     }

//     const deletionCriteria = {
//         _id: { $in: opdIds.map((id) => mongoose.Types.ObjectId(id)) },
//     };

//     try {
//         const result = await FaqMaster.deleteMany(deletionCriteria);
//         return result;
//     } catch (err) {
//         console.error(err);
//         throw err; // Re-throw the error to be handled by the caller if needed
//     }
// };
