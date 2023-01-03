const mongoose = require("mongoose");
const express = require("express");
const schema = mongoose.Schema();
const { ObjectId } = require("mongodb");

const lecture = new schema({
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

  courses: [
    {
      type: schema.Types.ObjectId,
      ref: "courses",
      required: false,
    },
  ],

  password: {
    type: String,
    required: true,
    default: "lecture2022",
  },
});

module.exports = mongoose.model("lecture", lecture);
