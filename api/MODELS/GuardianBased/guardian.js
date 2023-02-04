const mongoose = require("mongoose");
const express = require("express");
const schema = mongoose.Schema;

const guardian = new schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  mobile: {
    type: Number,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    default: "student2022",
  },
});

module.exports = mongoose.model("guardian", guardian);
