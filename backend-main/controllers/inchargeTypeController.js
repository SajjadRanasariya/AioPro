import mongoose from "mongoose";
import inchargeType from "../models/inchargeType";

export const getAll = async (query) => {
    return await inchargeType.find(query);
};

export const getOne = async (id) => {
    return await inchargeType.findById(id);
};

export const addOne = async (type) => {
    return await inchargeType.create(type);
};

export const updateOne = async (type) => {
    return await inchargeType.findByIdAndUpdate(type._id, type);
};


export const deleteOne = async (id) => {
    return await inchargeType.findOneAndRemove({ _id: id });
};