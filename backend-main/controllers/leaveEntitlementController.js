import mongoose from "mongoose";
import leaveEntitlement from "../models/leaveEntitlement";

export const getAll = async (query) => {
    return await leaveEntitlement.find(query);
};

export const getOne = async (id) => {
    return await leaveEntitlement.findById(id);
};

export const addOne = async (leave) => {
    return await leaveEntitlement.create(leave);
};

export const updateOne = async (leave) => {
    return await leaveEntitlement.findByIdAndUpdate(leave._id, leave);
};


export const deleteOne = async (id) => {
    return await leaveEntitlement.findOneAndRemove({ _id: id });
};