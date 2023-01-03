const express = require("express");
const mongoose = require("mongoose");
const student = require("../MODELS/studentDetailsModel");

const bicrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createStudent = async (req, res, next) => {
  const name = req.body.name;
  const email = require.body.email;
  const phone = require.body.phone;
  const city = require.body.city;
  const password = require.body.password;
  let hashPassword;
  let student;

  try {
    hashPassword = await bicrypt.hash(password, 12);
  } catch (error) {
    throw new error("failed to enncript password");
  }

  try {
    student = new student({
      name: name,
      phone: phone,
      email: email,
      city: city,
      password: hashPassword,
    });

    await student.save();
    res.status(200).json({
      message: "student saved successifully",
    });
  } catch (error) {
    throw new error("");
    console.log(error);
  }
};

exports.updateStudent = async (req, res, next) => {
  const studentID = req.params.studentID;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedCity = req.body.city;
  const updatedPhone = req.body.phone;
  let foundStudent;
  try {
    foundStudent = await student.findOne({ _id: studentID });
    foundStudent.name = updatedName;
    foundStudent.email = updatedEmail;
    foundStudent.city = updatedCity;
    foundStudent.phone = updatedPhone;
    await foundStudent.save();

    res.status(200).json({
      message: "sucessifully updated ",
    });
  } catch (error) {
    throw new error("failde to update");
  }
};

exports.getAllStudents = async (req, res, next) => {
  let students;
  try {
    students = await student.find();
    return res.status.json(students);
  } catch (error) {
    throw new error("failed to fetch all the student");
  }
};

exports.deleteStudent = async (req, res, next) => {
  let studentId = req.params.studentId;
  try {
    await student.deleteOne({ _id: studentId });
    res.status(200).json({
      message: "deleted succesfully",
    });
  } catch (error) {
    throw new error("couldnt delete the member");
  }
};
