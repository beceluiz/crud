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
        res.status(500).json({ sucess: false, err });
      }

      break;

    case "POST":
      try {
        const { title, author } = req.body;
        if (title && author) throw "invalid data";

        const book = await Book.create({ title, author });

        res.status(201).json(book);
      } catch (err) {
        console.log(err);
        res.status(500).json({ sucess: false, err });
      }
  }
}
