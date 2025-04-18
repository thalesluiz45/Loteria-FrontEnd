import InputEmail from "@/components/Form/InputEmail";
import InputPassword from "@/components/Form/InputPassword";
import {
  Box,
  Heading,
  Separator,
  VStack,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Login(onSwitch) {
  return (
    <Box padding="3" bg="white" borderRadius="xl" boxShadow="sm" minW="55vh">
      <Heading
        size="5xl"
        fontFamily="Poppins"
        fontWeight="bold"
        padding="0.5vh 2vh"
        color="gray.600"
      >
        Login
      </Heading>
      <Separator />
      <VStack p="10px" gap="5">
        <InputEmail />

        <InputPassword placeholder="Insira a senha" />

        <Button
          variant="solid"
          bgColor="#07803c"
          color="white"
          size="xl"
          w="full"
        >
          Entrar
        </Button>
        <Text color="gray.600">
          Não possui conta?{" "}
          <Link as={RouterLink} to="/register" color="teal.500">
            Clique aqui
          </Link>{" "}
          para se registrar.
        </Text>
      </VStack>
    </Box>
  );
}
