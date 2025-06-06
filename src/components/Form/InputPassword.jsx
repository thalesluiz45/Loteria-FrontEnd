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
        css={{ "--focus-color": "#8345d4" }}
      />
    </InputGroup>
  );
};
export default InputPassword;
