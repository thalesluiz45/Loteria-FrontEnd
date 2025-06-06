import {
  Box,
  Button,
  Heading,
  Stack,
  Link,
  Text,
  Separator,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import InputEmail from "@/components/Form/InputEmail";

export default function ForgotPassword() {
  return (
    <Box padding="3" bg="white" borderRadius="xl" boxShadow="sm" minW="55vh">
      <Heading
        size="4xl"
        fontFamily="Poppins"
        fontWeight="bold"
        padding="0.5vh 1vh"
        color="gray.600"
      >
        Recuperar Senha
      </Heading>
      <Separator />
      <Stack p="10px" gap="4" color="gray.600" w="full">
        <Text>Digite seu e-mail para recuperar sua senha:</Text>
        <InputEmail />
        <Button
          variant="solid"
          bgColor="#07803c"
          color="white"
          size="xl"
          w="full"
        >
          Enviar
        </Button>
        <Text>
          <Link as={RouterLink} to="/" color="teal.500">
            Voltar para login.
          </Link>
        </Text>
      </Stack>
    </Box>
  );
}
