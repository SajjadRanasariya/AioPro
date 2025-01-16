import mongoose from "mongoose";
import administrator from "../models/administrator";

export const getAll = async (query) => {
    return await administrator.find(query);
};

export const getOne = async (id) => {
    return await administrator.findById(id);
};

export const addOne = async (administrators) => {
    return await administrator.create(administrators);
};

export const updateOne = async (administrators) => {
    return await administrator.findByIdAndUpdate(administrators._id, administrators);
};

export const deleteOne = async (id) => {
    return await administrator.findOneAndRemove({ _id: id });
};