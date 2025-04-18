import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import IndexRegister from "./pages/Register/IndexRegister";
import ConnectingDots from "./components/Dots/ConnectingDots";

function App() {
  return (
    <Box
      bgGradient="to-tl"
      gradientFrom="#3c0a7b"
      gradientVia="#3c0780, #4c0d9f"
      gradientTo="#8345d4"
      minH="100vh"
      position="relative"
    >
      <Flex w="100%" h="100vh">
        <Box
          w="33.33%"
          p="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={1}
        >
          <Flex gap={"2"}>
            <Image
              src="src/assets/LotoIcon.png"
              boxSize="80px"
              borderRadius="full"
              fit="cover"
            />
            <Heading size="7xl" fontFamily="League Spartan" fontWeight="bold">
              LotoCheck
            </Heading>
          </Flex>
        </Box>

        <Box
          w="66.66%"
          bg="gray.200"
          p="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={0}
          >
            <ConnectingDots />
          </Box>

          <Box zIndex={1}>
            <IndexRegister />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
