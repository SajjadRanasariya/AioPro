import mongoose from "mongoose";
import backDateVisit from "../models/backDateVisit";

export const getAll = async (query) => {
    return await backDateVisit.find(query);
};

export const getOne = async (id) => {
    return await backDateVisit.findById(id);
};

export const addOne = async (backDate) => {
    return await backDateVisit.create(backDate);
};

export const insertMany = async (backDate) => {
    return await backDateVisit.insertMany(backDate);
};

export const updateOne = async (backDate) => {
    return await backDateVisit.findByIdAndUpdate(backDate._id, backDate);
};

export const deleteOne = async (id) => {
    return await backDateVisit.findOneAndRemove({ _id: id });
};