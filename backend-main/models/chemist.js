import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ChemistSchema = Schema({
  doctorName: {
    type: String,
    require: true,
  },
  doctorMslNumber: {
    type: Number,
    require: true,
  },
  shopName: {
    type: String,
    require: true,
  },
  chemistContactNumber: {
    type: Number,
    require: false,
  },
  pincode: {
    type: Number,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  chemistArea: {
    type: String,
    require: true,
  },
  chemistAddress: {
    type: String,
    require: true,
  },
  chemistLandMark: {
    type: String,
    require: true,
  },
  contactPersonName: {
    type: String,
    require: false,
  },
  contactPersonNumber: {
    type: Number,
    require: false,
  },
  lat: {
    type: Number,
    require: false,
  },
  lng: {
    type: Number,
    require: false,
  },
  status: {
    type: String,
    default: "active",
  },
  //   createBy: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "user",
  //     require: true,
  //   },
  modifiedAt: {
    type: Date,
    default: Date.now,
    require,
  },
  updateAt: {
    type: Date,
    default: Date.now,
    require: true,
  },
});

export default mongoose.model("Chemist", ChemistSchema);
