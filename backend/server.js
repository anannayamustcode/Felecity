const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require('path');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

// USER SCHEMA
const UserSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true,unique:true}
},{timestamps:true});
const User = mongoose.model("User",UserSchema);
module.exports = User;

app.post("/signup",async(req,res)=>{
  try{
    const{name,email,password} = req.body;
    if(!name||!email||!password){
      return res.status(400).json({message:"All fileds are required"});
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password,10);
    res.status(201),json({message:"signup successful"});
  }catch(error){
    console.error("Signup Error:",error);
    res.status(500).json({message:"Error registering"});
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: user.email}, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "Error logging in" });
  }
});

const PORT = process.env.PORT||5000;
mongoose.connection.once("open",()=>{
    app.listen(PORT,()=>console.log(`🚀 Server running on port ${PORT}`));
});