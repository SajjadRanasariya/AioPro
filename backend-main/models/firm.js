import mongoose from "mongoose";
const Schema = mongoose.Schema;

const firmSchema = Schema({
  firmId: { type: String, require: true },
  firmName: { type: String, require: true },
  firmType: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  firmCode: {
    type: String,
    require: false,
  },
  contactPersonName: {
    type: String,
    require: false,
  },
  contactNumber: { type: Number, require: false },
  email: { type: String, require: false },

  category: {
    type: String,
    require: false,
  },
  assignedTo: { type: String, require: false },
  assignedFirmEmail: { type: String, require: true },
  employeeAssigned: {
    type: String,
    require: false,
  },
  firstLevelManager: {
    type: String,
    require: false,
  },
  secondLevelManager: {
    type: String,
    require: false,
  },
  thirdLevelManager: {
    type: String,
    require: false,
  },
  dateOfBirth: {
    type: Date,
    require: false,
  },
  city: {
    type: String,
    require: false,
  },
  division: {
    type: String,
    require: false,
  },
  zone: {
    type: String,
    require: false,
  },
  address: {
    type: String,
    require: false,
  },
  gstNumber: {
    type: String,
    require: false,
  },
  drugLicenseNumber: {
    type: String,
    require: false,
  },
  panNumber: {
    type: String,
    require: false,
  },
  foodLicenseNumber: {
    type: String,
    require: false,
  },
  pincode: {
    type: String,
    require: false,
  },
  bankName: {
    type: String,
    require: false,
  },
  branchName: {
    type: String,
    require: false,
  },
  accountNumber: {
    type: String,
    require: false,
  },
  status: {
    type: String,
    require: false,
  },
  msg:{
    type: String,
    require: false,
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

export default mongoose.model("firm", firmSchema);

// import mongoose from "mongoose";
// const Schema = mongoose.Schema;

// const firmSchema = Schema({
//   firmName: { type: String, require: true },
//   firmTypeId: {
//     type: String,
//     require: true,
//   },
//   date: {
//     type: Date,
//     require: true,
//   },
//   firmCode: {
//     type: String,
//     require: false,
//   },
//   ContactPersonName: {
//     type: String,
//     require: false,
//   },
//   ContactNumber: { type: Number, require: false },
//   email: { type: String, require: false },

//   category: {
//     type: String,
//     require: false,
//   },
//   assignedTo: { type: String, require: false },
//   assignedFirmEmail: { type: String, require: true },
//   employeeAssigned: {
//     type: mongoose.Schema.ObjectId,
//     ref: "employee",
//     require: true,
//   },
//   firstLevelManager: {
//     type: mongoose.Schema.ObjectId,
//     ref: "employee",
//     require: true,
//   },
//   secondLevelManager: {
//     type: mongoose.Schema.ObjectId,
//     ref: "employee",
//     require: true,
//   },
//   thirdLevelManager: {
//     type: mongoose.Schema.ObjectId,
//     ref: "employee",
//     require: true,
//   },
//   dateOfBirth: {
//     type: Date,
//     require: false,
//   },
//   city: {
//     type: String,
//     require: false,
//   },
//   division: {
//     type: mongoose.Schema.ObjectId,
//     ref: "division",
//     require: true,
//   },
//   zone: {
//     type: mongoose.Schema.ObjectId,
//     ref: "zone",
//     require: true,
//   },
//   address: {
//     type: String,
//     require: false,
//   },
//   GSTN: {
//     type: String,
//     require: false,
//   },
//   drugLicenseNumber: {
//     type: String,
//     require: false,
//   },
//   PanNumber: {
//     type: String,
//     require: false,
//   },
//   foodLicenseNumber: {
//     type: String,
//     require: false,
//   },
//   pincode: {
//     type: String,
//     require: false,
//   },
//   bankName: {
//     type: String,
//     require: false,
//   },
//   branchName: {
//     type: String,
//     require: false,
//   },
//   accountNumber: {
//     type: String,
//     require: false,
//   },

//   createdOn: {
//     type: Date,
//     default: Date.now,
//   },
//   modifiedOn: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.model("firm", firmSchema);
