import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  Textarea,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";

import * as yup from "yup";
import { useReceive } from "../../providers/ContextReceives";
import {Users} from "../../providers/Users"

const createTaskSchema = yup.object().shape({
  account: yup.string().required("Campo obrigatório"),
  description: yup
    .string()
    .required("Campo obrigatório")
    .max(100, "Máximo de 100 caracteres"),
  value: yup.string().required("Campo obrigatório"),
  data: yup.string().required("Campo obrigatório"),
  category: yup.string().required("Campo obrigatório"),
});

export const ModalCreateRecive = ({isOpen, onClose }) => {

  const { lancReceive } = useReceive();

  const {id:userId,token} = Users()
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(createTaskSchema),
  });

  const handleCreateEntry = ({account,description,value:v,data,category}) => {
    const value = Number(v)
    const type = false
    const req = {account,description,value,data,category,type,userId}
    // console.log(req)
    lancReceive(req,token);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleCreateEntry)}
        padding="2"
        bg="white"
        color="gray.800"
      >
        <ModalHeader display="flex">
          <Text fontWeight="bold" ml="2">
            Nova Receita
          </Text>
          <Center
            onClick={onClose}
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
          <VStack spacing="5">
            <Input {...register("account")} placeholder="Digite o título" />
            <Textarea
              {...register("description")}
              placeholder="Digite o Descrição"
            />
            <Input {...register("value")} placeholder="Valor da Receita" />
            <Input {...register("data")} placeholder="00/00/0000" />

            {console.log("userid",userId)}
            {console.log("token",token)}
            <Select
              placeholder="Categorias"
              color="gray.300"
              {...register("category")}
            >
              <option value="salario">Salario</option>
              <option value="dividendos">Dividendos</option>
              <option value="extras">Extras</option>
            </Select>
          </VStack>
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
