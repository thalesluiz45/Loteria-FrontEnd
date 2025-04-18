import { useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import Register from "./Register";
import Login from "./Login";

export default function IndexRegister() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Box>
      <VStack>
        <Box>
          {isRegister ? (
            <Register onSwitch={() => setIsRegister(false)} />
          ) : (
            <Login onSwitch={() => setIsRegister(true)} />
          )}
        </Box>
      </VStack>
    </Box>
  );
}
