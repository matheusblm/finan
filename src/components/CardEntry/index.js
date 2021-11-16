import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import {
  FaFileInvoiceDollar,
  FaFileArchive,
  FaCheckCircle,
  FaTimesCircle,
  FaReceipt,
} from "react-icons/fa";
import { ModalEntry } from "../ModalEntry";

export const CardEntry = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          onClick={onOpen}
        >
          <Flex justifyContent="space-between">
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
              <Center fontWeight="bold">R$ {item.value}</Center>
              <Center
                as="button"
                fontSize="xl"
                transition="0.5s"
                _hover={{ color: "gray.300", cursor: "pointer" }}
              >
                {item.type ? <FaCheckCircle /> : <FaTimesCircle />}
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
          onClick={onOpen}
        >
          <Flex justifyContent="space-between">
            <Flex>
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
              <Center fontWeight="bold">R$ {item.value}</Center>
              <Center
                as="button"
                fontSize="xl"
                transition="0.5s"
                _hover={{ color: "gray.300" }}
              >
                {item.type ? <FaCheckCircle /> : <FaTimesCircle />}
              </Center>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};
