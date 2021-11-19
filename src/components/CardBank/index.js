import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Flex, HStack, Text } from "@chakra-ui/layout";
import { FaLandmark } from "react-icons/fa";
import { ModalBank } from "../ModalBank";
import { formatValue } from "../../utils/formatValue";
export const CardBank = (acc, index) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalBank isOpen={isOpen} onClose={onClose} acc={acc} />
      <Flex
        justify="space-between"
        color="gray.300"
        key={index}
        transition="0.5s"
        _hover={{ cursor: "pointer", color: "gray.200" }}
        onClick={() => onOpen()}
      >
        <HStack spacing={2}>
          <Icon as={FaLandmark} />
          <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
            {acc.acc.bank}
          </Text>
        </HStack>
        <HStack spacing={2}>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>
            {formatValue(acc.acc.over)}
          </Text>
        </HStack>
      </Flex>
    </>
  );
};
