import mongoose from "mongoose";
import callObjective from "../models/callObjective";

export const getAll = async (query) => {
    return await callObjective.find(query);
};

export const getOne = async (id) => {
    return await callObjective.findById(id);
};

export const addOne = async (objective) => {
    return await callObjective.create(objective);
};

export const updateOne = async (objective) => {
    return await callObjective.findByIdAndUpdate(objective._id, objective);
};

export const deleteOne = async (id) => {
    return await callObjective.findOneAndRemove({ _id: id });
};