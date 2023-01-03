const student = require("../MODELS/studentDetailsModel");
const express = require("express");
const mongoose = require("mongoose");
const bicrypt = require("bcryptjs");

exports.studentLogin = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let student;

  try {
    student = await student.findOne({ email: email });
    if (!student) {
      let error = new Error("no student found");
      error.statusCode = 404;
      throw error;
    }

    let status = await bicrypt.compare(password, student.password);
    if (!status) {
      let error = new Error("incorrect password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: student.email,
        userId: student._id.toString(),
      },
      "marengajuliusmtumbadisanakwakweli",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token: token,
    });
  } catch (error) {
    throw new error("failed to login");
  }
};
