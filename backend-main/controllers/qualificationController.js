import mongoose from "mongoose";
import Qualification from "../models/qualification";

export const getAll = async (query) => {
    return await Qualification.find(query);
};

export const getOne = async (id) => {
    return await Qualification.findById(id);
};

export const addOne = async (qualification) => {
    return await Qualification.create(qualification);
};

export const updateOne = async (qualification) => {
    return await Qualification.findByIdAndUpdate(qualification._id, qualification);
};

export const deleteOne = async (id) => {
    return await Qualification.findOneAndRemove({ _id: id });
};