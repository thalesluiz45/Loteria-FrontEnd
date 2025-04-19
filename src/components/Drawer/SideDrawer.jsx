import {
  Button,
  IconButton,
  CloseButton,
  Drawer,
  Portal,
  Avatar,
  Separator,
  Box,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";

const SideDrawer = () => {
  return (
    <Drawer.Root placement="start" divideY="2px">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" size="2xl" colorPalette="purple">
          <FaBars />
        </IconButton>
      </Drawer.Trigger>
      <Box width="2px" height="12" bg="whiteAlpha.400" />
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            bgGradient="to-tl"
            gradientFrom="#3c0a7b"
            gradientVia="#3c0780, #4c0d9f"
            gradientTo="#8345d4"
          >
            <Drawer.Header alignItems={"center"} justifyContent={"center"}>
              <Avatar.Root size="4xl">
                <Avatar.Fallback name="Edilson" />
                <Avatar.Image src="https://www.lance.com.br/galerias/wp-content/uploads/2021/09/000_9MA8QW-11-150x150.jpg" />
              </Avatar.Root>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <IconButton
                as={RouterLink}
                to="/"
                size="lg"
                variant="subtle"
                colorPalette="red"
              >
                <IoExitOutline />
              </IconButton>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" colorPalette="purple" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
export default SideDrawer;
