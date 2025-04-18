import {
  Box,
  VStack,
  HStack,
  Text,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import Register from "./Register";
import ConnectingDots from "@/components/Dots/ConnectingDots";

export default function IndexRegister() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <VStack gap="1.5vh" p="2vh">
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
