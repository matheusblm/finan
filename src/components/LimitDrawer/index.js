import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useLimits } from "../../providers/Limits";
import { Users } from "../../providers/Users";

export const Menu = ({ isOpen, onClose, categoryName, setDrawer }) => {
  const { changeLimit, getTotalValueLimit } = useLimits();

  const { limits } = Users();

  const { register, handleSubmit } = useForm();

  const handleMyValue = (data) => {
    const newLimits = [limits];
    for (let key in newLimits[0]) {
      if (key === Object.keys(data)[0]) {
        newLimits[0][key] = Object.values(data)[0];
      }
    }
    changeLimit(newLimits);
    getTotalValueLimit();
    setDrawer(false);
    onClose();
  };

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent m="10% auto" w={["280px", "350px"]}>
        <DrawerHeader
          borderBottomWidth="1px"
          borderColor="gray.50"
          color="gray.600"
        ></DrawerHeader>
        <DrawerBody as="form" onSubmit={handleSubmit(handleMyValue)}>
          <Input
            as="input"
            placeholder="Novo valor"
            fontWeight="bold"
            color="black"
            type="number"
            {...register(categoryName, {
              valueAsNumber: true,
            })}
            mb="20px"
          />
          <Flex
            align="center"
            justifyContent="flex-end"
            _hover={{ cursor: "pointer" }}
          >
            <Button backgroundColor="blue" color="white" type="submit">
              Ok
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
