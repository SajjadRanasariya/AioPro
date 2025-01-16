import mongoose from "mongoose";
const Schema = mongoose.Schema;

const salesSchema = Schema({
  productId: {
    type: String,
    ref: "Product",
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  totalAmount: {
    type: Number,
    require: true,
  },
  paymentMethod: {
    type: String,
    require: true,
  },
  pts: {
    type: String,
    require: true,
  },
  ptd: {
    type: String,
    require: true,
  },
  ptr: {
    type: String,
    require: true,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export default mongoose.model("Sales", salesSchema);
