import React from "react";
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
  TableCaption,
} from "@chakra-ui/react";
import { InputForm } from "../components/input";

export default function Home() {
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
      <VStack marginBottom="4">
        <InputForm type="text" label="Name" name="Name" />
        <InputForm type="email" label="Email" name="Email" />

        <Button colorScheme="blue" fontSize="sm" alignSelf="flex-end">
          Submit
        </Button>
      </VStack>
      {/* Table */}
      <Table variant="simple">
        <Thead bgColor="blue.500">
          <Tr>
            <Th textColor="white">Name</Th>
            <Th textColor="white">Email</Th>
            <Th textColor="white">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Luiz Fernando</Td>
            <Td>bckainight@nba.com</Td>
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
