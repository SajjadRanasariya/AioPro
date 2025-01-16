import mongoose from "mongoose";
import firmMonthMaintenance from "../models/firmMonthMaintenance";

export const getAll = async (query) => {
    return await firmMonthMaintenance.find(query);
};

export const getOne = async (id) => {
    return await firmMonthMaintenance.findById(id);
};

export const addOne = async (data) => {
    return await firmMonthMaintenance.create(data);
};

export const updateOne = async (data) => {
    return await firmMonthMaintenance.findByIdAndUpdate(data._id, data);
};

export const deleteOne = async (id) => {
    return await firmMonthMaintenance.findOneAndRemove({ _id: id });
};