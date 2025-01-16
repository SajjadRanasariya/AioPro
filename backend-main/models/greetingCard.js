import mongoose from "mongoose";
const Schema = mongoose.Schema;

const greetingCardSchema = Schema({
    name: { type: String },
    img: { type: String },
    wise: { type: String },
    dob: { type: String },
    theme: { type: String },
    userImg: { type: String },
    occupation:{type:String},
    createdBy: { type: mongoose.Schema.ObjectId,ref: "User"},
    createdOn: { type: Date, default: Date.now },
    modifiedOn: { type: Date, default: Date.now },
});

export default mongoose.model("greetingCard", greetingCardSchema);
