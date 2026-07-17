const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// ⚠️ If MongoDB not installed → use Atlas later
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("User", UserSchema);

// CREATE
app.post("/register", async (req, res) => {
  console.log("DATA RECEIVED:", req.body);

  const user = new User(req.body);
  await user.save();

  console.log("DATA SAVED");

  res.send("User Registered");
});
// READ
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// LOGIN
app.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if(user) res.send("Login Success");
  else res.send("Invalid Credentials");
});

// UPDATE
app.put("/update/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated");
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));