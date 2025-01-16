import mongoose from "mongoose";
import hospitalCategory from "../models/hospitalCategory";

export const getAll = async (query) => {
    return await hospitalCategory.find(query);
};

export const getOne = async (id) => {
    return await hospitalCategory.findById(id);
};

export const addOne = async (category) => {
    return await hospitalCategory.create(category);
};

export const updateOne = async (category) => {
    return await hospitalCategory.findByIdAndUpdate(category._id, category);
};

export const deleteOne = async (id) => {
    return await hospitalCategory.findOneAndRemove({ _id: id });
};