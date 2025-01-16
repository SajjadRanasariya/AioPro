import mongoose from "mongoose";
import productGroup from "../models/productGroup";

export const getAll = async (query) => {
    return await productGroup.find(query);
};

export const getOne = async (id) => {
    return await productGroup.findById(id);
};

export const addOne = async (group) => {
    return await productGroup.create(group);
};

export const updateOne = async (group) => {
    return await productGroup.findByIdAndUpdate(group._id, group);
};

export const deleteOne = async (id) => {
    return await productGroup.findOneAndRemove({ _id: id });
};