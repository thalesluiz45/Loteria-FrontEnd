import {
  Box,
  Heading,
  Separator,
  VStack,
  Button,
  Link,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import InputEmail from "@/components/Form/InputEmail";
import InputPassword from "@/components/Form/InputPassword";
export default function Login(onSwitch) {
  return (
    <Box padding="3" bg="white" borderRadius="xl" boxShadow="sm" minW="50vh">
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

        <Stack w="full">
          <Button
            as={RouterLink}
            to="/dashboard"
            variant="solid"
            bgColor="#07803c"
            color="white"
            size="xl"
            w="full"
          >
            Entrar
          </Button>

          <Text fontSize="sm">
            <Link as={RouterLink} to="/forgot" color={"teal.500"}>
              Esqueci minha senha.
            </Link>
          </Text>
        </Stack>
        <Box>
          <Text color="gray.600">
            Não possui conta?{" "}
            <Link as={RouterLink} to="/register" color={"teal.500"}>
              Clique aqui
            </Link>{" "}
            para se registrar.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
