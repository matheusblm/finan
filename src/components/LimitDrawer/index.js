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

import { useForm } from "react-hook-form";
import { useLimits } from "../../providers/Limits";
import { Users } from "../../providers/Users";

export const Menu = ({ isOpen, onClose, categoryName }) => {

    const { changeLimit } = useLimits();

    const { limits } = Users()

    const { register, handleSubmit } = useForm();


    const handleMyValue = (data) => {
        const newLimits = [limits];
        for (let key in newLimits[0]) {
            if (key === Object.keys(data)[0]) {
                newLimits[0][key] = Object.values(data)[0]
            }
        }
        console.log(newLimits);
        changeLimit(newLimits)
        onClose()

    }

    return (
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay mt={["13vh", "8vh"]} />
            <DrawerContent ml="auto" mt="80px" w={["450px", "350px"]}>
                <DrawerHeader

                    borderBottomWidth="1px"
                    borderColor="gray.50"
                    color="gray.600"
                >

                </DrawerHeader>
                <DrawerBody
                    as="form"
                    onSubmit={handleSubmit(handleMyValue)}
                >
                    <Input as="input" placeholder='Novo valor' fontWeight='bold' color='black' type="number" {...register(categoryName, {
                        valueAsNumber: true,
                    })} margin="20px" />
                    <Flex align="center" justifyContent='flex-end' _hover={{ cursor: "pointer" }}>
                        <Button backgroundColor='blue' color='white' type="submit"  >Ok</Button>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
