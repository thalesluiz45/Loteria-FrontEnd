import { InputGroup } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { RiLockPasswordLine } from "react-icons/ri";

const InputPassword = ({ placeholder }) => {
  return (
    <InputGroup startElement={<RiLockPasswordLine />}>
      <PasswordInput
        color="black"
        placeholder={placeholder || ""}
        size="md"
        variant="outline"
      />
    </InputGroup>
  );
};
export default InputPassword;
