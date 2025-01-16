import mongoose from "mongoose";
import leaveReason from "../models/leaveReason";

export const getLeaveReason = async (query) => {
    return await leaveReason.find(query);
};

export const getOne = async (id) => {
    return await leaveReason.findById(id);
};


export const addOne = async (reason) => {
    return await leaveReason.create(reason);
};

export const updateOne = async (reason) => {
    return await leaveReason.findByIdAndUpdate(reason._id, reason);
};

export const deleteOne = async (id) => {
    return await leaveReason.findOneAndRemove({ _id: id });
};