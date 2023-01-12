import express from "express";
import mongoose from "mongoose";
import FreindsModels from "./models/friends.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// connect to database
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_SERVER, { dbName: "testDB" })
  .then(() => {
    console.log("database has connected");
  })
  .catch(() => {
    console.log("faild to connected");
  });

// routes for react
// insert data
app.post("/addfriend", async (req, res) => {
  const name = req.body.name;
  const lname = req.body.lname;
  const age = req.body.age;
  const freinds = new FreindsModels({
    name: name,
    lname: lname,
    age: age,
  });
  await freinds.save();
  res.send("user created");
});

// read data
app.get("/read", async (req, res) => {
  FreindsModels.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// update
app.put("/update", async (req, res) => {
  const newAge = req.body.newAge;
  const id = req.body.id;

  try {
    await FreindsModels.findById(id, (error, friendUpdate) => {
      friendUpdate.age = Number(newAge);
      friendUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }

  res.send("update");
});

// delete
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await FreindsModels.findByIdAndRemove(id).exec();
  res.send("friend removed");
});


// server and port connection
app.listen(process.env.PORT, (req, res) => {
  console.log("server has running");
});
