import mongoose from "mongoose";
import files from "../models/files";

export const getAll = async (query) => {
    return await files.find(query);
};

export const getOne = async (id) => {
    return await files.findById(id);
};

export const addOne = async (file) => {
    return await files.create(file);
};

export const deleteOne = async (id) => {
    return await files.findOneAndRemove({ _id: id });
};

export const updateOne = async (file) => {
    return await files.findByIdAndUpdate(file._id, file);
};

