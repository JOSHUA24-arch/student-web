const express = require("express");
const mongoose = require("mongoose");
const Lecture = require("../../MODELS/lecturesModel");

const bicrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createLecture = async (req, res, next) => {
  const first_name = req.body.firstname;
  const last_name = req.body.lastname;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const password = req.body.password;
  let hashPassword;
  let lecture;
  try {
    hashPassword = await bicrypt.hash(password, 12);
  } catch (error) {
    console.log(error);
    throw new Error("failed to enncript password");
  }

  try {
    lecture = new Lecture({
      lastname: last_name,
      firstname: first_name,
      nobile: mobile,
      email: email,
      password: hashPassword,
    });

    await lecture.save();
    await res.status(200).json({
      message: "lecture saved Registered",
    });
  } catch (error) {
    throw new Error("lecture wasn't saved");
  }
};