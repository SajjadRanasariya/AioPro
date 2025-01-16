import mongoose from "mongoose";
import relationMaster from "../models/relationMaster";

export const getAll = async (query) => {
    return await relationMaster.find(query);
};

export const getOne = async (id) => {
    return await relationMaster.findById(id);
};

export const addOne = async (relation) => {
    return await relationMaster.create(relation);
};

export const updateOne = async (relation) => {
    return await relationMaster.findByIdAndUpdate(relation._id, relation);
};

export const deleteOne = async (id) => {
    return await relationMaster.findOneAndRemove({ _id: id });
};