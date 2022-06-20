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
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubtmitCreateClient = (event) => {
    event.preventDefault();
    console.log(book, author);
  };

  const handleChangeBook = ({ target }) => {
    setBook(target.value);
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
      <VStack marginY="1rem" as="form" onSubmit={handleSubtmitCreateClient}>
        <InputForm
          type="text"
          label="Book"
          name="book"
          onChange={handleChangeBook}
        />
        <InputForm
          type="text"
          label="Author"
          name="book"
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
          <Tr>
            <Td>Harry Potter</Td>
            <Td>J.K Rowling</Td>
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
        </Tbody>
      </Table>
    </Box>
  );
}
