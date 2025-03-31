import SwitchAuth from "@/components/SwitchButton/SwitchButton";
import { Box, Heading, VStack, Text, Image, Flex } from "@chakra-ui/react";

export default function IndexRegister() {
  return (
    <VStack gap="15px">
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
        minH="70vh"
        minW="55vh"
        borderRadius="10px"
        bg="whiteAlpha.900"
      ></Box>
      <Box>
        <Text>Made with 🤍.</Text>
      </Box>
    </VStack>
  );
}
