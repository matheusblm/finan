import {
    Box,
    Center,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
export const LogoutDrawer = ({ isOpen, onClose }) => {
    return (
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay mt={["13vh", "0vh"]} />
            <DrawerContent ml="auto" mt="70px" mr='60px' w={["450px", "350px"]}>
                <DrawerHeader
                    borderBottomWidth="1px"
                    borderColor="gray.50"
                    color="gray.600"
                >
                    NomeDoUsuario
                </DrawerHeader>
                <DrawerBody>
                    <Flex align="center" _hover={{ cursor: "pointer" }}>
                        <Center
                            w="60px"
                            h="60px"
                            bg="red.600"
                            fontSize="2xl"
                            borderRadius="md"
                        >
                            <FiLogOut />
                        </Center>
                        <Box ml="4">
                            <Heading as="h2" fontSize="lg">
                                Sair da minha conta
                            </Heading>
                        </Box>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
