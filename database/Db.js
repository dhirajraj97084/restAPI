import mongoose from "mongoose";

const DBConnection=async()=>{
  try {
    await mongoose.connect('mongodb+srv://dhirajtiwari97084:api4545@cluster0.pnqq0.mongodb.net/');
    console.log("***database connection successfully***");
  } catch (error) {
    console.log('database connection failed');
  }
}

export default DBConnection;