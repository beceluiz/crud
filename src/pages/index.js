import React from "react";
import {
  Button,
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box margin="4">
      <Flex color="white" justifyContent="space-between">
        <Text color="black" fontSize="2xl">
          Lista de Clientes
        </Text>
        <Button colorScheme="blue">+</Button>
      </Flex>
      <VStack>
        <FormControl id="email" marginY="1rem">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl marginY="1rem">
          <FormLabel>Name</FormLabel>
          <Input type="Text" />
        </FormControl>
        <Button fontSize="sm" alignSelf="flex-end">
          Cadastro
        </Button>
      </VStack>
    </Box>
  );
}
