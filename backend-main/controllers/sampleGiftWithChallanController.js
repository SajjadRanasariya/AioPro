import mongoose from "mongoose";
import sampleGiftWithChallan from "../models/sampleGiftWithChallan";

export const getAll = async (query) => {
    return await sampleGiftWithChallan.find(query);
};

export const getOne = async (id) => {
    return await sampleGiftWithChallan.findById(id);
};

export const addOne = async (data) => {
    return await sampleGiftWithChallan.create(data);
};

export const updateOne = async (data) => {
    return await sampleGiftWithChallan.findByIdAndUpdate(data._id, data);
};

export const insertMany = async (data) => {
    return await sampleGiftWithChallan.insertMany(data);
};

export const deleteOne = async (id) => {
    return await sampleGiftWithChallan.findOneAndRemove({ _id: id });
};