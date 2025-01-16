import mongoose from "mongoose";
import doctorCategory from "../models/doctorCategory";

export const getAllCategory = async (query) => {
    return await doctorCategory.find(query);
};


export const addOne = async (category) => {
    return await doctorCategory.create(category);
};


export const deleteOne = async (id) => {
    return await doctorCategory.findOneAndRemove({ _id: id });
};