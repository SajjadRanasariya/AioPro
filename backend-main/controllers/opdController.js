import mongoose from "mongoose";
import Opd from "./../models/opd";

export const getOpd = async (query) => {
    return await Opd.find(query);
};

export const getOneOpd = async (id) => {
    return await Opd.findById(id);
};

export const addOpd = async (opd) => {
    return await Opd.create(opd);
};

export const updateOne = async (opd) => {
    return await Opd.findByIdAndUpdate(opd._id, opd);
};

export const deleteOne = async (id) => {
    return await Opd.findOneAndRemove({ _id: id });
};

export const deleteMany = async (opdIds) => {
    // Check if opdIds is an array
    if (!Array.isArray(opdIds) || opdIds.length === 0) {
        console.error("opdIds is not a valid array of ObjectIds");
        return; // Exit the function gracefully
    }

    const deletionCriteria = {
        _id: { $in: opdIds.map((id) => mongoose.Types.ObjectId(id)) },
    };

    try {
        const result = await Opd.deleteMany(deletionCriteria);
        return result;
    } catch (err) {
        console.error(err);
        throw err; // Re-throw the error to be handled by the caller if needed
    }
};
