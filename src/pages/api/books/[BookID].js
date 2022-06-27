import Book from "../../../models/Book";
import dbConnect from "../../services/db";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  const { BookID } = req.query;

  switch (method) {
    case "PUT":
      try {
        const { title, author } = req.body;

        if (!title && !author) throw "invalid data";

        await Book.updateOne({ _id: BookID }, { title, author });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }

      break;

    case "DELETE":
      try {
        await Book.deleteOne({ _id: BookID });

        res.status(201).json({ sucess: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
  }
}
