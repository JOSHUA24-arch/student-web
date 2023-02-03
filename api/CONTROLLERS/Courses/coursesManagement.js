const express = require("express");
const mongoose = require("mongoose");
const course = require("../../MODELS/courses");

exports.registerCourse = async (req, res, next) => {
  const course_name = req.body.courseName;
  const course_code = req.body.courseCode;
  const course_credit = req.body.corsecredits;

  let course;
  try {
    course = new course({
      courseName: course_name,
      courseCode: course_code,
      courseCredit: course_credit,
    });

    await course.save();
    await res.status(200).json({
      message: "course registered successfull",
    });
  } catch (error) {
    console.log(err);
    throw new Error("unable to register the course");
  }
};
