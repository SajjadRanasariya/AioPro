import mongoose from "mongoose";
import Division from "../models/division";

export const getAllDivision = async (query) => {
    return await Division.find(query);
};

export const getOne = async (id) => {
    return await Division.findById(id);
};

export const addOne = async (division) => {
    return await Division.create(division);
};

export const updateOne = async (division) => {
    return await Division.findByIdAndUpdate(division._id, division);
};

export const deleteOne = async (id) => {
    return await Division.findOneAndRemove({ _id: id });
};