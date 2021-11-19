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
  Checkbox,
} from "@chakra-ui/react";
import {
  FaCheckCircle,
  FaFunnelDollar,
  FaLandmark,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { Account } from "../../providers/Account";
import { Users } from "../../providers/Users";
import { formatValue } from "../../utils/formatValue";

export const ModalBank = ({ isOpen, onClose, acc }) => {
  const { deleteAccount } = Account();
  const { token } = Users();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
              <FaLandmark />
            </Center>
            <Text fontWeight="bold" ml="2"></Text>
          </Flex>

          <HStack spacing="2">
            <Center
              as="button"
              w="30px"
              h="30px"
              bg="transparent"
              color="gray.600"
            >
              <FaTrash
                onClick={() => {
                  deleteAccount(acc.acc.id, token);
                  onClose();
                }}
              />
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
          <Heading fontSize="xl" mb="5">
            {acc.acc.bank}
          </Heading>
          <Text color="gray.600"> {formatValue(acc.acc.over)} </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
