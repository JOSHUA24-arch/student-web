const mongoose = require("mongoose");
const express = require("express");
const { stringify } = require("querystring");
const schema = mongoose.Schema;

const student = new schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  parentFName: {
    type: String,
    required: true,
  },
  parentLName: {
    type: String,
    required: true,
  },
  parentContacts: {
    type: schema.Types.Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  homeAddress: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    default: "student2022",
  },
  studentStatus: {
    type: String,
    default: "registered",
  },

  enrolledCourses: [
    {
      type: schema.Types.ObjectId,
      ref: "",
      required: false,
    },
  ],
});

module.exports = mongoose.model("student", student);
