import {
  Box,
  Flex,
  Image,
  Heading,
  Avatar,
  AvatarGroup,
  HStack,
  Text,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";
import ConnectingDots from "./components/Dots/ConnectingDots";

function App() {
  return (
    <Router>
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
            boxShadow="xl"
          >
            <Flex gap="2">
              <Image
                src="src/assets/LotoIcon.png"
                boxSize="80px"
                borderRadius="full"
                fit="cover"
              />
              <Heading size="7xl" fontFamily="League Spartan" fontWeight="bold">
                LotoCheck
              </Heading>

              <HStack
                position="fixed"
                bottom="0"
                width="100%"
                maxW="400px"
                color="gray.100"
                textAlign="center"
                py="5"
                px="20"
                fontWeight="extralight"
              >
                <Text>Made with 💜 by</Text>
                <AvatarGroup gap="0" spaceX="-2" size="2xs">
                  <Avatar.Root>
                    <Avatar.Fallback name="Thales" />
                    <Avatar.Image src="src/assets/Thales.jpg" />
                  </Avatar.Root>

                  <Avatar.Root>
                    <Avatar.Fallback name="Filipe" />
                    <Avatar.Image src="src/assets/Filipe.png" />
                  </Avatar.Root>

                  <Avatar.Root>
                    <Avatar.Fallback name="Thomaz" />
                    <Avatar.Image src="src/assets/Thomaz.png" />
                  </Avatar.Root>
                </AvatarGroup>
              </HStack>
            </Flex>
          </Box>

          <Box
            w="66.66%"
            bg="gray.300"
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
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Router>
  );
}

export default App;
