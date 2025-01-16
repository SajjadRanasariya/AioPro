import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  gst: {
    type: Number,
    require: false,
  },
  pts: {
    type: Number,
    require: true,
  },
  ptd: {
    type: Number,
    require: true,
  },
  ptr: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
