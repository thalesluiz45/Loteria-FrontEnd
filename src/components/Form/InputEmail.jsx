import { Input, InputGroup } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";

const InputEmail = () => {
  return (
    <InputGroup startElement={<HiOutlineMail />}>
      <Input
        color="black"
        placeholder="Email"
        css={{ "--focus-color": "#8345d4" }}
      />
    </InputGroup>
  );
};
export default InputEmail;
