import mongoose from "mongoose";
import presentation from "../models/presentation";

export const getAll = async (query) => {
    return await presentation.find(query);
};

export const getOne = async (id) => {
    return await presentation.findById(id);
};

export const addOne = async (data) => {
    return await presentation.create(data);
};
export const addSlide = async (data) => {
    return await presentation.findByIdAndUpdate(data._id, data);
};

export const updateOne = async (data) => {
    return await presentation.findByIdAndUpdate(data._id, data);
};

export const deleteOne = async (id) => {
    return await presentation.findOneAndRemove({ _id: id });
};

