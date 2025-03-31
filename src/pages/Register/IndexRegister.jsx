import SwitchAuth from "@/components/SwitchButton/SwitchButton";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Image,
  Flex,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import Register from "./Register";

export default function IndexRegister() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column" alignItems="center">
      <VStack gap="1.5vh" p="2vh">
        <Flex align="center" gap={3}>
          <Image
            src="src\assets\LotoIcon.png"
            boxSize="65px"
            borderRadius="full"
            fit="cover"
          />
          <Heading
            paddingTop="3"
            size="6xl"
            fontFamily="League Spartan"
            fontWeight="bold"
          >
            LotoCheck
          </Heading>
        </Flex>

        <SwitchAuth />
        <Box
          color="black"
          minH="30vw"
          w="100vw"
          maxW="55vh"
          borderRadius="10px"
          bg="whiteAlpha.900"
        >
          <Register />
        </Box>
      </VStack>
      <HStack
        position="fixed"
        bottom="0"
        left="4"
        width="100%"
        maxW="400px"
        color="gray.100"
        textAlign="center"
        py={3}
        fontWeight="extralight"
      >
        <Text>Made with 💜 by</Text>
        <AvatarGroup gap="0" spaceX="-2" size="2xs">
          <Avatar.Root>
            <Avatar.Fallback name="Thales" />
            <Avatar.Image src="src\assets\Thales.jpg" />
          </Avatar.Root>

          <Avatar.Root>
            <Avatar.Fallback name="Filipe" />
            <Avatar.Image src="src\assets\Filipe.png" />
          </Avatar.Root>

          <Avatar.Root>
            <Avatar.Fallback name="Thomaz" />
            <Avatar.Image src="src\assets\Thomaz.png" />
          </Avatar.Root>
        </AvatarGroup>
      </HStack>
    </Box>
  );
}
