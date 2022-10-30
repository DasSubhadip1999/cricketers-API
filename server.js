const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.DB_URL;
const db = process.env.DB;
const app = express();

mongoose
  .connect(`${url}/${db}`)
  .then(() => console.log("server connected to DB"))
  .catch((err) => console.log(err));

const cricketerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required e.g. Virat Kohli"],
  },
  date_of_birth: {
    type: Number,
    required: [true, "date of birth is required"],
  },
  height: {
    type: Number,
    required: [true, "height is required"],
  },
  nickname: String,
  statictics: {
    test: {
      matches: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
      runs: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
      century: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
      half_century: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
    },
    odi: {
      matches: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
      runs: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
      century: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
      half_century: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
    },
    t20i: {
      matches: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
      runs: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
      century: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
      half_century: {
        type: Number,
        required: [true, "matches field cant be empty"],
      },
    },
  },
});

const Cricketer = new mongoose.model("cricketer", cricketerSchema);

app.get("/indian-cricketers", (req, res) => {
  Cricketer.find({}, (err, cricketers) => {
    if (err) {
      res.send(err);
    } else {
      res.send(cricketers);
    }
  });
});
