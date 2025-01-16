import mongoose from "mongoose";
import WorkAgenda from "../models/workAgenda";

export const getWorkAgenda = async (query) => {
    return await WorkAgenda.find(query);
};

export const getOne = async (id) => {
    return await WorkAgenda.findById(id);
};

export const addOne = async (agenda) => {
    return await WorkAgenda.create(agenda);
};

export const updateOne = async (agenda) => {
    return await WorkAgenda.findByIdAndUpdate(agenda._id, agenda);
};

export const deleteOne = async (id) => {
    return await WorkAgenda.findOneAndRemove({ _id: id });
};