import { useState } from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

export default function SwitchAuth() {
  const [active, setActive] = useState("cadastro");

  return (
    <Box>
      <ButtonGroup
        isAttached
        bg="#8345d4"
        borderRadius="full"
        p="0.6vh"
        w="55vh"
        h="9.3vh"
      >
        <Button
          flex="1"
          bg={active === "cadastro" ? "whiteAlpha.900" : "purple.300"}
          color={active === "cadastro" ? "black" : "white"}
          borderRadius="full"
          onClick={() => setActive("cadastro")}
          h="8vh"
          fontSize="lg"
        >
          Cadastro
        </Button>
        <Button
          flex="1"
          bg={active === "login" ? "whiteAlpha.900" : "purple.300"}
          color={active === "login" ? "black" : "white"}
          borderRadius="full"
          onClick={() => setActive("login")}
          h="8vh"
          fontSize="lg"
        >
          Login
        </Button>
      </ButtonGroup>
    </Box>
  );
}
