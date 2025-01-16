import mongoose from "mongoose";
import products from "../models/products";

export const getAll = async (query) => {
    return await products.find(query);
};

export const getOne = async (id) => {
    return await products.findById(id);
};

export const addOne = async (product) => {
    return await products.create(product);
};

export const insertMany = async (data) => {
    return await products.insertMany(data);
};

export const updateOne = async (product) => {
    return await products.findByIdAndUpdate(product._id, product);
};
export const changeStatus = async (product) => {
    return await products.findByIdAndUpdate(product._id, product);
};

export const deleteOne = async (id) => {
    return await products.findOneAndRemove({ _id: id });
};