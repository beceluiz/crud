import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
