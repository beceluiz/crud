import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const InputForm = ({ label, name, ...props }) => {
  return (
    <FormControl marginY="1rem">
      <FormLabel>{label}</FormLabel>
      <Input name={name} id={name} {...props} />
    </FormControl>
  );
};
