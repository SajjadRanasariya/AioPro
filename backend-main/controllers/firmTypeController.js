import mongoose from "mongoose";
import firmType from "../models/firmType";

export const getAll = async (query) => {
    return await firmType.find(query);
};

export const getOne = async (id) => {
    return await firmType.findById(id);
};

export const addOne = async (type) => {
    return await firmType.create(type);
};

export const updateOne = async (type) => {
    return await firmType.findByIdAndUpdate(type._id, type);
};

export const deleteOne = async (id) => {
    return await firmType.findOneAndRemove({ _id: id });
};