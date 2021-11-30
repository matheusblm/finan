import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { Users } from "../../providers/Users";
export const LogoutDrawer = ({ isOpen, onClose }) => {
  const { Logout, username } = Users();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent ml="auto" mt="70px" mr="60px" w={["450px", "350px"]}>
        <DrawerHeader
          borderBottomWidth="1px"
          borderColor="gray.50"
          color="gray.600"
        >
          {username}
        </DrawerHeader>
        <DrawerBody onClick={() => Logout()}>
          <Flex align="center" _hover={{ cursor: "pointer" }}>
            <Center
              w="60px"
              h="60px"
              color="white"
              bg="red.600"
              fontSize="2xl"
              borderRadius="md"
            >
              <FiLogOut />
            </Center>
            <Box ml="4">
              <Heading as="h2" fontSize="lg">
                Sair
              </Heading>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
