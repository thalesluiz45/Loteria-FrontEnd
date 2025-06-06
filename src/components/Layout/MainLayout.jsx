import {
  Box,
  Image,
  Flex,
  Heading,
  HStack,
  Separator,
  IconButton,
} from "@chakra-ui/react";
import UserDrawer from "../Drawer/UserDrawer";
import { Link, Outlet } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
export default function MainLayout() {
  return (
    <Box h="100vh" w="100vw" bgColor="gray.200">
      <Box
        p="4"
        h="12vh"
        gap="5"
        bgGradient="to-tl"
        gradientFrom="#3c0a7b"
        gradientVia="#3c0780, #4c0d9f"
        gradientTo="#8345d4"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack>
          <UserDrawer />
          <Separator
            orientation={"vertical"}
            h={"12"}
            borderColor={"whiteAlpha.400"}
            size={"md"}
          />
          <Link as={RouterLink} to={"/dashboard"}>
            <Flex align="center" gap="2">
              <Image
                src="src/assets/LotoIcon.png"
                boxSize="50px"
                borderRadius="full"
                fit="cover"
              />
              <Heading
                paddingTop="2"
                size="4xl"
                fontFamily="League Spartan"
                fontWeight="bold"
              >
                LotoCheck
              </Heading>
            </Flex>
          </Link>
        </HStack>

        <HStack>
          <Link>
            <IconButton variant={"ghost"} colorPalette={"purple"} size={"2xl"}>
              <IoIosNotifications />
            </IconButton>
          </Link>
          <Link>
            <IconButton variant={"ghost"} colorPalette={"purple"} size={"2xl"}>
              <FaUserFriends />
            </IconButton>
          </Link>
        </HStack>
      </Box>
      <Outlet />
    </Box>
  );
}
