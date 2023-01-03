const mongoose = require("mongoose");
const express = require("express");
const { ObjectId } = require("mongodb");

const schema = mongoose.Schema();

const course = new schema({
  courseName: {
    type: String,
    required: true,
  },
  courseId: {
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
});
