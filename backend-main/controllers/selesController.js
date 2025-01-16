import mongoose from "mongoose";
import Sales from '../models/sales'

export const allSales = async (query) => {
    return await Sales.find(query).populate("productId",['name','price']);
};

export const OneSales = async (id) => {
    return await Sales.findById(id);
};

export const addSales = async (sales) => {
    return await Sales.create(sales);
};

export const updateSales = async (sales) => {
    return await Sales.findByIdAndUpdate(sales._id, sales);
};

export const deleteOneSales = async (id) => {
    return await Sales.findOneAndRemove({ _id: id });
};

export const deleteManySales = async (SalesIds) => {

    if (!Array.isArray(SalesIds) || SalesIds.length === 0) {
        return;
    }

    const deletionCriteria = {
        _id: { $in: SalesIds.map((id) => mongoose.Types.ObjectId(id)) },
    };

    try {
        const result = await Sales.deleteMany(deletionCriteria);
        return result;
    } catch (err) {
        console.error(err);
        throw err; 
    }
};
