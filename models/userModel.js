const mongoose = require("mongoose");
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema  = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  gender: { type: String, enum: ["male", "female"] },
  contactNo: { type: String },
  address: { type: String },
  isActive: { type: Boolean },
})
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    config.get("JWT")
  );
  return token;
};


const users = mongoose.model(
  "users",
   userSchema
);

module.exports = { users };
