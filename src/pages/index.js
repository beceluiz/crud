import React, { useEffect, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import {
  Button,
  Flex,
  Box,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { InputForm } from "../components/input";
import api from "./api/api";

export default function Home() {
  const [ID, setID] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [errors, setErrors] = useState({ title: null, author: null });

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const isValidFormData = () => {
    if (!title) {
      setErrors({ title: "Please enter a title" });
      return false;
    }
    if (!author) {
      setErrors({ author: "Please enter a author" });
      return false;
    }

    setErrors({});
    return true;
  };

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSubtmitCreateBook = async (event) => {
    event.preventDefault();

    if (!isValidFormData()) return;

    try {
      const { data } = await api.post("/books", { title, author });

      setBooks(books.concat(data.data));

      setTitle("");
      setAuthor("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api.get("/books").then(({ data }) => setBooks(data.data));
  }, []);

  const handleSubtmitUpdateBook = (event) => {
    event.preventDefault();

    if (!isValidFormData()) return;

    setBooks(
      books.map((book) => (book._id === ID ? { title, author, _id: ID } : book))
    );

    setTitle("");
    setAuthor("");
    setID(null);
    setIsFormOpen(true);
  };

  const handleDeleteBook = (_id) => {
    setBooks(books.filter((book) => book._id !== _id));
  };

  const handleChangeTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleChangeAuthor = ({ target }) => {
    setAuthor(target.value);
  };

  const handleShowUpdateBookForm = (book) => {
    setID(book._id);
    setTitle(book.title);
    setAuthor(book.author);
  };

  const toggleFormState = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Box margin="4">
      {/* Header */}
      <Flex color="white" justifyContent="space-between">
        <Text color="black" fontSize="2xl">
          Crud
        </Text>
        <Button colorScheme="blue" onClick={toggleFormState}>
          {isFormOpen ? "-" : "+"}
        </Button>
      </Flex>
      {/* Input */}
      {isFormOpen && (
        <VStack
          marginY="1rem"
          as="form"
          onSubmit={ID ? handleSubtmitUpdateBook : handleSubtmitCreateBook}
        >
          <InputForm
            type="text"
            label="Title"
            name="title"
            value={title}
            onChange={handleChangeTitle}
            error={errors.title}
          />
          <InputForm
            type="text"
            label="Author"
            name="author"
            value={author}
            onChange={handleChangeAuthor}
            error={errors.author}
          />

          <Button
            colorScheme="blue"
            fontSize="sm"
            alignSelf="flex-end"
            type="submit"
          >
            {ID ? "Update" : "Submit"}
          </Button>
        </VStack>
      )}

      {/* Table */}
      <Table variant="simple" marginY="4">
        <Thead bgColor="blue.500">
          <Tr>
            <Th textColor="white">Book</Th>
            <Th textColor="white">Author</Th>
            <Th textColor="white">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {books.map((book) => (
            <Tr key={book._id}>
              <Td>{book.title}</Td>
              <Td>{book.author}</Td>
              <Td>
                <Flex justifyContent="space-between">
                  <Button
                    colorScheme="yellow"
                    size="sm"
                    font-size="smaller"
                    onClick={() => handleShowUpdateBookForm(book)}
                  >
                    Edit
                  </Button>
                  <Button
                    colorScheme="red"
                    size="sm"
                    font-size="smaller"
                    onClick={() => handleDeleteBook(book._id)}
                  >
                    Remove
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
