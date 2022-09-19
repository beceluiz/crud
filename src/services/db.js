import mongoose from "mongoose";
const dbConnect = () => {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);
  const db = mongoose.connection;
  db.once("open", () => console.log("Connected ✅"));
  db.on("error", (error) => {
    console.log("Your Error:", error);
  });
};

export default dbConnect;
