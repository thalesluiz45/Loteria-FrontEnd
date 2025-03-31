import {
  Box,
  Heading,
  Separator,
  Input,
  InputGroup,
  HStack,
  FieldLabel,
  Field,
  VStack,
  Button,
} from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";

export default function Register() {
  return (
    <Box>
      <Heading
        paddingTop="3"
        size="6xl"
        fontFamily="League Spartan"
        fontWeight="bold"
        padding="0.5vh 2vh"
        color="gray.500"
      >
        Cadastro
      </Heading>
      <Separator />
      <VStack p="10px">
        <Field.Root>
          <Field.Label color="gray.500">Nome Completo</Field.Label>
          <Input bgColor="gray.200" border="1px solid gray" placeholder="" />
        </Field.Root>
        <Field.Root>
          <Field.Label color="gray.500">Email</Field.Label>
          <Input bgColor="gray.200" border="1px solid gray" placeholder="" />
        </Field.Root>
        <Field.Root>
          <Field.Label color="gray.500">Senha</Field.Label>
          <Input bgColor="gray.200" border="1px solid gray" placeholder="" />
        </Field.Root>
        <Field.Root>
          <Field.Label color="gray.500">Confirme a senha</Field.Label>
          <Input bgColor="gray.200" border="1px solid gray" placeholder="" />
        </Field.Root>
        <Button
          variant="solid"
          bgColor="teal.600"
          color="whiteAlpha.900"
          size="xl"
          w="full"
        >
          Cadastrar
        </Button>
      </VStack>
    </Box>
  );
}
