import mongoose from "mongoose";
import productSampleDetails from "../models/productSampleDetails";

export const getAll = async (query) => {
    return await productSampleDetails.find(query);
};

export const getOne = async (id) => {
    return await productSampleDetails.findById(id);
};

export const addOne = async (productSample) => {
    return await productSampleDetails.create(productSample);
};

export const insertMany = async (data) => {
    return await productSampleDetails.insertMany(data);
};

export const updateOne = async (productSample) => {
    return await productSampleDetails.findByIdAndUpdate(productSample._id, productSample);
};
export const changeStatus = async (productSample) => {
    return await productSampleDetails.findByIdAndUpdate(productSample._id, productSample);
};

export const deleteOne = async (id) => {
    return await productSampleDetails.findOneAndRemove({ _id: id });
};