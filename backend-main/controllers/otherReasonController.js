import mongoose from "mongoose";
import otherReason from "../models/otherReason";

export const getAll = async (query) => {
    return await otherReason.find(query);
};

export const getOne = async (id) => {
    return await otherReason.findById(id);
};

export const addOne = async (reason) => {
    return await otherReason.create(reason);
};

export const updateOne = async (reason) => {
    return await otherReason.findByIdAndUpdate(reason._id, reason);
};

export const deleteOne = async (id) => {
    return await otherReason.findOneAndRemove({ _id: id });
};