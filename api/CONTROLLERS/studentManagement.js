const express = require("express");
const mongoose = require("mongoose");
const Student = require("../MODELS/studentDetailsModel");

const bicrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createStudent = async (req, res, next) => {
  const first_name = req.body.firstname;
  const last_name = req.body.lastname;
  const first_parent_name = req.body.firstParentName;
  const last_parent_name = req.body.lastParentName;
  const parent_contacts = req.body.parentContacts;
  const email = req.body.email;
  const homeAddress = req.body.homeAddress;
  const password = req.body.password;
  let hashPassword;
  let student;
  try {
    hashPassword = await bicrypt.hash(password, 12);
  } catch (error) {
    console.log(error);
    throw new Error("failed to enncript password");
  }

  try {
    student = new Student({
      lastname: last_name,
      firstname: first_name,
      parentContacts: parent_contacts,
      email: email,
      homeAddress: homeAddress,
      password: hashPassword,
      parentFName: first_parent_name,
      parentLName: last_parent_name,
    });

    await student.save();
    await res.status(200).json({
      message: "student saved successifully",
    });
  } catch (error) {
    throw new Error("student wasnt saved");
  }
};

exports.updateStudent = async (req, res, next) => {
  const studentID = req.params.studentID;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedCity = req.body.city;
  const updatedPhone = req.body.mobile;
  let foundStudent;
  try {
    foundStudent = await Student.findOne({ _id: studentID });
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
    students = await Student.find();
    console.log(students);
    return res.status(200).json(students);
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch all the student");
  }
};

exports.deleteStudent = async (req, res, next) => {
  let studentId = "63d381bf333322f89dc68dbf";
  try {
    await Student.deleteOne({ _id: studentId });
    res.status(200).json({
      message: "deleted succesfully",
    });
  } catch (error) {
    throw new error("couldnt delete the member");
  }
};
