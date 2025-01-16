import mongoose from "mongoose";
import Type from "../models/type";

export const getType = async (query) => {
  return await Type.find(query);
};

export const getOne = async (id) => {
  return await Type.findById(id);
};

export const addOne = async (type) => {
  return await Type.create(type);
};

export const updateOne = async (type) => {
  return await Type.findByIdAndUpdate(type._id, type);
};

export const deleteOne = async (id) => {
  return await Type.findOneAndRemove({ _id: id });
};
