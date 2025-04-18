import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import ConnectingDots from "./components/Dots/ConnectingDots";
import AnimatedRoutes from "./routes/Routes";
import SidePanel from "./components/Layout/SidePanel";

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
          <SidePanel />

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
            <Box position="absolute" inset={0} zIndex={0}>
              <ConnectingDots />
            </Box>

            <Box zIndex={1}>
              <AnimatedRoutes />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Router>
  );
}

export default App;
