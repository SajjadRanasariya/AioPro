import mongoose from "mongoose";
import FaqQuestion from "./../models/faqQuestion";

export const getFaqQuestion = async (query) => {
    return await FaqQuestion.find(query);
};

export const getOneFaqQuestion = async (id) => {
    return await FaqQuestion.findById(id);
};

export const addFaqQuestion = async (faqQuestion) => {
    return await FaqQuestion.create(faqQuestion);
};

export const updateFaqQuestion = async (question) => {
    return await FaqQuestion.findByIdAndUpdate(question._id, question);
};

export const deleteFaqQuestion = async (id) => {
    return await FaqQuestion.findOneAndRemove({ _id: id });
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
//         const result = await Opd.deleteMany(deletionCriteria);
//         return result;
//     } catch (err) {
//         console.error(err);
//         throw err; // Re-throw the error to be handled by the caller if needed
//     }
// };
