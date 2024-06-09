import mongoose from "mongoose";

const DB_URL = `mongodb+srv://admin:admin@cluster0.wtmdchg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const dbConnection = async () => {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("Database Connected successfully");
  } catch (error) {
    console.error("database connection fail", error.message);
  }
};

export default dbConnection;
