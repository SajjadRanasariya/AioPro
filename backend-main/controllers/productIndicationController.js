import mongoose from "mongoose";
import productIndication from "../models/productIndication";

export const getAll = async (query) => {
    return await productIndication.find(query);
};

export const getOne = async (id) => {
    return await productIndication.findById(id);
};

export const addOne = async (indication) => {
    return await productIndication.create(indication);
};

export const updateOne = async (indication) => {
    return await productIndication.findByIdAndUpdate(indication._id, indication);
};

export const deleteOne = async (id) => {
    return await productIndication.findOneAndRemove({ _id: id });
};