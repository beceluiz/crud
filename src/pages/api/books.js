import Book from "../../models/Book";
import dbConnect from "../services/db";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const books = await Book.find({});
        res.status(200).json(books);
      } catch (err) {
        console.log(err);
      }

      break;
  }
}
