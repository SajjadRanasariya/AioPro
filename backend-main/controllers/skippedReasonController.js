import mongoose from "mongoose";
import SkippedReason from "../models/skippedReason";

export const getReason = async (query) => {
    return await SkippedReason.find(query);
};

export const getOne = async (id) => {
    return await SkippedReason.findById(id);
};


export const addOne = async (reason) => {
    return await SkippedReason.create(reason);
};

export const updateOne = async (reason) => {
    return await SkippedReason.findByIdAndUpdate(reason._id, reason);
};

export const deleteOne = async (id) => {
    return await SkippedReason.findOneAndRemove({ _id: id });
};