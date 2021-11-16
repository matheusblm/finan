import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Input,
    Button
} from "@chakra-ui/react";
export const Menu = ({ isOpen, onClose }) => {
    return (
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay mt={["13vh", "8vh"]} />
            <DrawerContent ml="auto" mt="80px" w={["450px", "350px"]}>
                <DrawerHeader
                    borderBottomWidth="1px"
                    borderColor="gray.50"
                    color="gray.600"
                >
                    <Input placeholder='Novo valor' fontWeight='bold' color='black' />
                </DrawerHeader>
                <DrawerBody>
                    <Flex align="center" justifyContent='flex-end' _hover={{ cursor: "pointer" }}>
                        <Button backgroundColor='blue' color='white' onClick={onClose} >Ok</Button>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
