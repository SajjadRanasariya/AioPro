import mongoose from "mongoose";
import firmCategory from "../models/firmCategory";

export const getAll = async (query) => {
    return await firmCategory.find(query);
};

export const getOne = async (id) => {
    return await firmCategory.findById(id);
};

export const addOne = async (category) => {
    return await firmCategory.create(category);
};

export const updateOne = async (category) => {
    return await firmCategory.findByIdAndUpdate(category._id, category);
};

export const deleteOne = async (id) => {
    return await firmCategory.findOneAndRemove({ _id: id });
};