import { Input, InputGroup } from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";

const InputName = () => {
  return (
    <InputGroup startElement={<LuUser />}>
      <Input color="black" placeholder="Nome do usuário" />
    </InputGroup>
  );
};
export default InputName;
