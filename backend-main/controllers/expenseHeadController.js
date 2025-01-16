import mongoose from "mongoose";
import expenseHead from "../models/expenseHead";

export const getAll = async (query) => {
    return await expenseHead.find(query);
};

export const getOne = async (id) => {
    return await expenseHead.findById(id);
};

export const addOne = async (head) => {
    return await expenseHead.create(head);
};

export const updateOne = async (head) => {
    return await expenseHead.findByIdAndUpdate(head._id, head);
};
export const changeStatus = async (head) => {
    return await expenseHead.findByIdAndUpdate(head._id, head);
};

export const deleteOne = async (id) => {
    return await expenseHead.findOneAndRemove({ _id: id });
};