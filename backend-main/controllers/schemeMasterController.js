import mongoose from "mongoose";
import schemeMaster from "../models/schemeMaster";

export const getAll = async (query) => {
    return await schemeMaster.find(query);
};

export const getOne = async (id) => {
    return await schemeMaster.findById(id);
};

export const addOne = async (scheme) => {
    return await schemeMaster.create(scheme);
};

export const updateOne = async (scheme) => {
    return await schemeMaster.findByIdAndUpdate(scheme._id, scheme);
};

export const deleteOne = async (id) => {
    return await schemeMaster.findOneAndRemove({ _id: id });
};