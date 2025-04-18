import InputEmail from "@/components/Form/InputEmail";
import InputName from "@/components/Form/InputName";
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
export default function Register(onSwitch) {
  return (
    <Box padding="3" bg="white" borderRadius="xl" boxShadow="sm" minW="55vh">
      <Heading
        size="5xl"
        fontFamily="Poppins"
        fontWeight="bold"
        padding="0.5vh 2vh"
        color="gray.600"
      >
        Registrar
      </Heading>
      <Separator />
      <VStack p="10px" gap="5">
        <InputName />

        <InputEmail />

        <InputPassword placeholder="Insira uma senha" />

        <InputPassword placeholder="Confirme a senha" />

        <Button
          variant="solid"
          bgColor="#07803c"
          color="white"
          size="xl"
          w="full"
        >
          Cadastrar
        </Button>

        <Text color="gray.600">
          Já possui conta?{" "}
          <Link as={RouterLink} to="/" color="teal.500">
            Faça login.
          </Link>
        </Text>
      </VStack>
    </Box>
  );
}
