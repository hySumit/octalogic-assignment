const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {type: String, required: true, unique: true,
  },
  phone: {type: String,},
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{versionKey:false});


const userModel = model("user",userSchema)

module.exports = userModel