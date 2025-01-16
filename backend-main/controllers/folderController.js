import mongoose from "mongoose";
import folder from "../models/folder";
import files from "../models/files";

export const getAll = async (query) => {
    try {
        let folderDetails = await folder.aggregate([
            {
                $lookup: {
                    from: "files",
                    localField: "_id",
                    foreignField: "folderId",
                    as: "filesName",
                },
            },

        ]);

        return folderDetails;
    } catch (error) {
        throw error;
    }
}


export const getOne = async (id) => {
    try {
        let folderDetails = await folder.aggregate([
            {
                $match: {
                    _id: mongoose.Types.ObjectId(id),
                },
            },
            {
                $lookup: {
                    from: "files",
                    localField: "_id",
                    foreignField: "folderId",
                    as: "filesName",
                },
            },

        ]);

        return folderDetails;
    } catch (error) {
        throw error;
    }
};

export const addOne = async (file) => {
    return await folder.create(file);
};

export const deleteOne = async (id) => {
    try {
        const [deletedFolder, deletedFiles] = await Promise.all([
            folder.findOneAndRemove({ _id: id }),
            files.deleteMany({ folderId: id })
        ]);

        return { deletedFolder, deletedFiles };
    } catch (error) {
        console.error('Error deleting folder and files:', error);
        throw error; 
    }

};

export const updateOne = async (file) => {
    return await folder.findByIdAndUpdate(file._id, file);
};

export const uploadFile = async (file) => {
    return await folder.create(file);
};