import { Input, InputGroup } from "@chakra-ui/react";
import { RiLockPasswordLine } from "react-icons/ri";

const InputPassword = ({ placeholder }) => {
  return (
    <InputGroup startElement={<RiLockPasswordLine />}>
      <Input
        color="black"
        placeholder={placeholder || ""}
        size="md"
        variant="outline"
      />
    </InputGroup>
  );
};
export default InputPassword;
