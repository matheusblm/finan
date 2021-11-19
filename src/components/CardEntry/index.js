import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Checkbox } from "@chakra-ui/react";
import {
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaTimesCircle,
  FaReceipt,
} from "react-icons/fa";
import { ModalEntry } from "../ModalEntry";
import { formatValue } from "../../utils/formatValue";
import { useSpend } from "../../providers/ContextSpend";
import { useReceive } from "../../providers/ContextReceives";
import { Users } from "../../providers/Users";

export const CardEntry = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { token } = Users();
  const { editSpend, deleteSpend, loadSpends } = useSpend();
  const { editReceive, deleteReceive, loadReceives } = useReceive();

  const handleEdit = (type) => {
    if (type === true) {
      editReceive(item.id, token);
      // loadReceives(item.id, token)
    } else if (type === false) {
      editSpend(item.id, token);
      // loadSpends(item.id, token)
    }
  };

  const handleDelete = (type) => {
    if (type === true) {
      deleteReceive(item.id, token);
      loadReceives(item.id, token);
    } else if (type === false) {
      deleteSpend(item.id, token);
      loadSpends(item.id, token);
    }
    onClose();
  };

  return (
    <>
      <ModalEntry isOpen={isOpen} onClose={onClose} item={item} />
      {item.entry ? (
        <Box
          h="40px"
          w="100%"
          borderRadius="md"
          transition="0.8s"
          _hover={{ bg: "#DAFBDA", cursor: "pointer" }}
        >
          <Flex onClick={onOpen} justifyContent="space-between">
            <Flex>
              <Center
                w="40px"
                h="40px"
                fontSize="2xl"
                color="green.300"
                transition="0.5s"
              >
                <FaReceipt />
              </Center>
              <Center>
                <Text h="25px" fontSize="xl" color="gray.600" ml="2">
                  {item.account}
                </Text>
              </Center>
            </Flex>
            <Flex gridGap="5" color="gray.600">
              <Center fontWeight="bold">{formatValue(item.value)}</Center>
              <Center
                as="button"
                fontSize="xl"
                transition="0.5s"
                _hover={{ color: "gray.300", cursor: "pointer" }}
              >
                <Checkbox
                  isChecked={item.type}
                  onChange={() => handleEdit(item.entry)}
                />
              </Center>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box
          h="40px"
          w="100%"
          borderRadius="md"
          transition="0.8s"
          _hover={{ bg: "#F0E4E3", cursor: "pointer" }}
        >
          <Flex justifyContent="space-between">
            <Flex onClick={onOpen}>
              <Center
                w="40px"
                h="40px"
                fontSize="2xl"
                color="red.300"
                transition="0.5s"
              >
                <FaFileInvoiceDollar />
              </Center>

              <Center>
                <Text h="25px" fontSize="xl" color="gray.600" ml="2">
                  {item.account}
                </Text>
              </Center>
            </Flex>
            <Flex gridGap="5" color="gray.600">
              <Center fontWeight="bold">{formatValue(item.value)}</Center>
              <Center
                as="button"
                fontSize="xl"
                transition="0.5s"
                _hover={{ color: "gray.300" }}
              >
                <Checkbox
                  isChecked={item.type}
                  onChange={() => handleEdit(item.entry)}
                />
              </Center>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};
