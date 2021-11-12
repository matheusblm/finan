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

export const ModalEntry = ({ isOpen, onClose, task }) => {
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
              Lancamento
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
              <FaCheckCircle />
            </Center>
            <Center
              as="button"
              w="30px"
              h="30px"
              bg="transparent"
              color="gray.600"
            >
              <FaTrash />
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
            Titulo
          </Heading>
          <Text color="gray.400">Descricao</Text>
          <Text color="gray.400">Valor</Text>
          <Text color="gray.400">Categoria</Text>
        </ModalBody>

        <Box padding="6">
          <Text color="gray.300" mt="3">
            11 Outubro 2021
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  );
};
