import mongoose from "mongoose";
import promotionalGift from "../models/promotionalGift";

export const getAll = async (query) => {
    return await promotionalGift.find(query);
};

export const getOne = async (id) => {
    return await promotionalGift.findById(id);
};

export const insertMany = async (data) => {
    return await promotionalGift.insertMany(data);
};

export const addOne = async (gift) => {
    return await promotionalGift.create(gift);
};

export const updateOne = async (gift) => {
    return await promotionalGift.findByIdAndUpdate(gift._id, gift);
};

export const deleteOne = async (id) => {
    return await promotionalGift.findOneAndRemove({ _id: id });
};