import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import {
  FaCheckCircle,
  FaFunnelDollar,
  FaTimes,
  FaTrash,
} from "react-icons/fa";

export const ModalEntry = ({ isOpen, onClose, item }) => {
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
            {item.account}
          </Heading>
          <Text color="gray.400">
            Descricao:
            {item.description}
          </Text>
          <Text color="gray.400"> R$ {item.value} </Text>
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
