const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.index({ name: "text" });

const user = mongoose.model("users", userSchema);
module.exports = user;


// when we do aggregate query 
const searchQuery = { $match: { $text: { $search: 'it search on the indexing field' } } };