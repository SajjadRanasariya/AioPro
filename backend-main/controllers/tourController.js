import mongoose from "mongoose";
import Tour from "../models/tour";

export const getTour = async (query) => {
  return await Tour.find(query);
};

export const getOne = async (id) => {
  return await Tour.findById(id);
};

export const addOne = async (data) => {
  return await Tour.create(data);
};

export const updateOne = async (data) => {
  return await Tour.findByIdAndUpdate(data._id, data);
};

export const deleteOne = async (id) => {
  return await Tour.findOneAndRemove({ _id: id });
};
