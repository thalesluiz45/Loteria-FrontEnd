import { useState } from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

export default function SwitchAuth() {
  const [active, setActive] = useState("cadastro");

  return (
    <Box>
      <ButtonGroup
        isAttached
        bg="purple.500"
        borderRadius="full"
        p="4px"
        w="410px"
        h="60px"
      >
        <Button
          flex="1"
          bg={active === "cadastro" ? "white" : "purple.300"}
          color={active === "cadastro" ? "black" : "white"}
          borderRadius="full"
          onClick={() => setActive("cadastro")}
          h="50px"
        >
          Cadastro
        </Button>
        <Button
          flex="1"
          bg={active === "login" ? "white" : "purple.300"}
          color={active === "login" ? "black" : "white"}
          borderRadius="full"
          onClick={() => setActive("login")}
          h="50px"
        >
          Login
        </Button>
      </ButtonGroup>
    </Box>
  );
}
