import {
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

import { useReceive } from "../../providers/ContextReceives";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const createTaskSchema = yup.object().shape({
  bank: yup.string().required("Campo obrigatório"),
  value: yup.string().required("Campo obrigatório"),
});

export const ModalWallet = () => {
  const { openModalWallet, handleModalWallet } = useReceive();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(createTaskSchema),
  });

  const handleWallet = (data) => console.log(data);

  return (
    <Modal isOpen={openModalWallet}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleWallet)}
        padding="2"
        bg="white"
        color="gray.800"
      >
        <ModalHeader display="flex">
          <Text fontWeight="bold" ml="2">
            Nova Carteira
          </Text>
          <Center
            onClick={handleModalWallet}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            bg="red.600"
            fontSize="lg"
            borderRadius="md"
          >
            <FaTimes color="white" />
          </Center>
        </ModalHeader>

        <ModalBody textAlign="center">
          <Stack spacing="5">
            <Input {...register("bank")} placeholder="Digite o banco" />
            <Input {...register("value")} placeholder="Valor da Receita" />
          </Stack>
        </ModalBody>

        <ModalFooter flexDirection="column">
          <Button
            as="button"
            type="submit"
            bg="blue.900"
            color="white"
            w="100%"
            h="40px"
            _hover={{ bg: "blue.800" }}
          >
            Criar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
