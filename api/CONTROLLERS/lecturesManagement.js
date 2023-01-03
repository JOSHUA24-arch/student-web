const express = require("express");
const mongoose = require("mongoose");
const student = require("../MODELS/studentDetailsModel");

const bicrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
