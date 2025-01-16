import mongoose from "mongoose";
import mediaGallery from "../models/mediaGallery";

export const getAll = async (query) => {
    return await mediaGallery.find(query);
};

export const addOne = async (media) => {
    return await mediaGallery.create(media);
};

export const deleteOne = async (id) => {
    return await mediaGallery.findOneAndRemove({ _id: id });
};