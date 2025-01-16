import mongoose from "mongoose";
import cityMaster from "../models/cityMaster";

export const allCity = async (query) => {
    return await cityMaster.find(query);
};

export const addCity = async (city) => {
    return await cityMaster.create(city);
};

export const updateManyData = async (data) => {
    const update = {
        $set: {}
    };

    data.forEach(({ _id, zoneName }) => {
        const id = mongoose.Types.ObjectId(_id);
        update.$set[`data.${id}.zoneName`] = zoneName;
    });

    const conditions = { _id: { $in: data.map(({ _id }) => mongoose.Types.ObjectId(_id)) } };

    return await cityMaster.updateMany(conditions, update);
};

export const updateOne = async (city) => {
    return await cityMaster.findByIdAndUpdate(city._id, city);
};

export const deleteOne = async (id) => {
    return await cityMaster.findOneAndRemove({ _id: id });
};