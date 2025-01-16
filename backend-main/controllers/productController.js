import mongoose from "mongoose";
import Product from "../models/product";

export const allProduct = async (query) => {
  return await Product.find(query);
};

export const getOneProduct = async (id) => {
  return await Product.findById(id);
};

export const addProduct = async (product) => {
  const gstRate = 0.12; // 12% GST rate as a decimal
  const gst = product.price * gstRate * product.quantity; // Calculate GST

  const ptr = "";

  const data = {
    name: product.name,
    category: product.category,
    price: product.price,
    gst: gst,
    ptr: "",
    pts: "",
    nrv: "",
    quantity: product.quantity,
    description: product.description,
    createdBy: product.createdBy,
  };

  return await Product.create(data);
};

export const updateProduct = async (product) => {
  return await Product.findByIdAndUpdate(product._id, product);
};

export const deleteOneProduct = async (id) => {
  return await Product.findOneAndRemove({ _id: id });
};

export const deleteMany = async (productIds) => {
  // Check if productIds is an array
  if (!Array.isArray(productIds) || productIds.length === 0) {
    console.error("productIds is not a valid array of ObjectIds");
    return; // Exit the function gracefully
  }

  const deletionCriteria = {
    _id: { $in: productIds.map((id) => mongoose.Types.ObjectId(id)) },
  };

  try {
    const result = await Product.deleteMany(deletionCriteria);
    return result;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be handled by the caller if needed
  }
};

export const deleteManyProduct = async (productIds) => {
  if (!Array.isArray(productIds) || productIds.length === 0) {
    return;
  }

  const deletionCriteria = {
    _id: { $in: productIds.map((id) => mongoose.Types.ObjectId(id)) },
  };

  try {
    const result = await Product.deleteMany(deletionCriteria);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
