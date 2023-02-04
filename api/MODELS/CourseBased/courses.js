const mongoose = require("mongoose");
const express = require("express");
// const { ObjectId } = require("mongodb");

const schema = mongoose.Schema;

const course = new schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },

  tutors: [
    {
      type: schema.Types.ObjectId,
      ref: "lecturesModel",
      required: false,
    },
  ],

  enrolledStudent: [
    {
      type: schema.Types.ObjectId,
      ref: "",
      required: false,
    },
  ],
});

module.exports = mongoose.model("course", course);
