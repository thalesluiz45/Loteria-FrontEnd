import { Box } from "@chakra-ui/react";
import IndexRegister from "./pages/Register/IndexRegister";
import Login from "./pages/Register/Login";

function App() {
  return (
    <Box
      bgGradient="to-tl"
      gradientFrom="#3c0a7b"
      gradientVia="#3c0780, #4c0d9f"
      gradientTo="#8345d4"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <IndexRegister />
      <Login />
    </Box>
  );
}

export default App;
