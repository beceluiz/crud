import React, { useState } from "react";
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

export default function Home() {
  const [books, setBooks] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubtmitCreateBook = (event) => {
    event.preventDefault();

    if (!title && !author) return;

    setBooks(books.concat({ title, author }));

    setTitle("");
    setAuthor("");
  };

  const handleChangeTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleChangeAuthor = ({ target }) => {
    setAuthor(target.value);
  };
  return (
    <Box margin="4">
      {/* Header */}
      <Flex color="white" justifyContent="space-between">
        <Text color="black" fontSize="2xl">
          Crud
        </Text>
        <Button colorScheme="blue">+</Button>
      </Flex>
      {/* Input */}
      <VStack marginY="1rem" as="form" onSubmit={handleSubtmitCreateBook}>
        <InputForm
          type="text"
          label="Title"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
        <InputForm
          type="text"
          label="Author"
          name="book"
          value={author}
          onChange={handleChangeAuthor}
        />

        <Button
          colorScheme="blue"
          fontSize="sm"
          alignSelf="flex-end"
          type="submit"
        >
          Submit
        </Button>
      </VStack>
      {/* Table */}
      <Table variant="simple">
        <Thead bgColor="blue.500">
          <Tr>
            <Th textColor="white">Book</Th>
            <Th textColor="white">Author</Th>
            <Th textColor="white">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {books.map((book) => (
            <Tr key={book.title}>
              <Td>{book.title}</Td>
              <Td>{book.author}</Td>
              <Td>
                <Flex justifyContent="space-between">
                  <Button colorScheme="yellow" size="sm" font-size="smaller">
                    Edit
                  </Button>
                  <Button colorScheme="red" size="sm" font-size="smaller">
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
