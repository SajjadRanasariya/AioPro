import mongoose from "mongoose";
import doctorMonthMaintenance from "../models/doctorMonthMaintenance";

export const getAll = async (query) => {
    return await doctorMonthMaintenance.find(query);
};

export const getOne = async (id) => {
    return await doctorMonthMaintenance.findById(id);
};

export const addOne = async (data) => {
    return await doctorMonthMaintenance.create(data);
};

export const updateOne = async (data) => {
    return await doctorMonthMaintenance.findByIdAndUpdate(data._id, data);
};

export const deleteOne = async (id) => {
    return await doctorMonthMaintenance.findOneAndRemove({ _id: id });
};