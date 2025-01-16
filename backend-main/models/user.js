import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const userSchema = Schema({
  avatar: {
    type: String,
    require: false,
  },
  url: {
    type: String,
    require: false,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: false,
  },
  phoneNumber: {
    type: Number,
    require: false,
  },
  address: {
    type: String,
    require: false,
  },
  country: {
    type: String,
    require: false,
  },
  state: {
    type: String,
    require: false,
  },
  city: {
    type: String,
    require: false,
  },
  zipCode: {
    type: Number,
    require: false,
  },
  special: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    require: false,
  },
  parentId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  about: {
    type: String,
    require: false,
  },
  employeId: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: false,
  },
  status: {
    type: String, //in-active, active
    default: "active",
    require: true,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

// encrypt the password before storing
userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5));
};

userSchema.methods.validPassword = function (candidatePassword) {
  if (this.password != null) {
    return bcrypt.compareSync(candidatePassword, this.password);
  } else {
    return false;
  }
};

export default mongoose.model("User", userSchema);
