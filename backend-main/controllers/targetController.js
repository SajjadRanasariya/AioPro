import mongoose from "mongoose";
import target from "../models/target";

export const getAll = async (query) => {
    return await target.find(query);
};

export const getOne = async (id) => {
    return await target.findById(id);
};

export const addOne = async (data) => {
    return await target.create(data);
};

export const updateOne = async (data) => {
    return await target.findByIdAndUpdate(data._id, data);
};

export const deleteOne = async (id) => {
    return await target.findOneAndRemove({ _id: id });
};