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

const PORT = process.env.PORT||5000;
mongoose.connection.once("open",()=>{
    app.listen(PORT,()=>console.log(`🚀 Server running on port ${PORT}`));
});