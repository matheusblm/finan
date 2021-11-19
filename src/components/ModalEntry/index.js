import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
  Checkbox
} from "@chakra-ui/react";
import {
  FaCheck,
  FaCheckCircle,
  FaCube,
  FaExclamation,
  FaFunnelDollar,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { formatValue } from "../../utils/formatValue";
import { useSpend } from "../../providers/ContextSpend";
import { useReceive } from "../../providers/ContextReceives";
import { Users } from "../../providers/Users";

export const ModalEntry = ({ isOpen, onClose, item }) => {
  console.log(item);
  const { token } = Users();
  const { editSpend, deleteSpend, loadSpends } = useSpend();
  const { editReceive, deleteReceive, loadReceives } = useReceive();

  const handleEdit = (type) => {
    if (type === true) {
      editReceive(item.id, token)
      loadReceives(item.id, token)
    } else if (type === false) {
      editSpend(item.id, token)
      loadSpends(item.id, token)
    }
  }

  const handleDelete = (type) => {
    if (type === true) {
      deleteReceive(item.id, token)
      loadReceives(item.id, token)
    } else if (type === false) {
      deleteSpend(item.id, token)
      loadSpends(item.id, token)
    }
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding="2" bg="white" color="gray.800">
        <ModalHeader display="flex" justifyContent="space-between">
          <Flex>
            <Center
              border="1px"
              borderColor="gray.200"
              w="30px"
              h="30px"
              borderRadius="5px"
              color="blue.800"
              fontSize="2xl"
            >
              <FaFunnelDollar />
            </Center>
            <Text fontWeight="bold" ml="2">
              {item.category}
            </Text>
          </Flex>

          <HStack spacing="2">
            <Center
              as="button"
              w="30px"
              h="30px"
              bg="transparent"
              color="gray.600"
            >
              <Checkbox isChecked={item.type} onChange={() => handleEdit(item.entry)} />
            </Center>
            <Center
              as="button"
              w="30px"
              h="30px"
              bg="transparent"
              color="gray.600"
            >
              <FaTrash onClick={() => handleDelete(item.entry)} />
            </Center>
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
          </HStack>
        </ModalHeader>

        <ModalBody>
          <Heading as="h1" fontSize="2xl">
            {item.account}
          </Heading>
          <Text color="gray.400">
            Descricao:
            {item.description}
          </Text>
          <Text color="gray.400"> {formatValue(item.value)} </Text>
        </ModalBody>

        <Box padding="6">
          <Text color="gray.300" mt="3">
            {item.date}
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  );
};
