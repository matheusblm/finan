import {
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaWallet,
  FaLandmark,
  FaExclamationCircle,
  FaPlusSquare,
} from "react-icons/fa";
import { useReceive } from "../../providers/ContextReceives";

import { ModalWallet } from "../ModalWallet";

export const WalletDashboard = () => {
  const { openModalWallet, handleModalWallet } = useReceive();

  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Carteira: </Text>
        <HStack spacing={8}>
          <Button onClick={handleModalWallet}>
            <Icon
              as={FaPlusSquare}
              my={2}
              fontSize={{ lg: "2xl", md: "xl", base: "lg" }}
              color="green"
            />
          </Button>
          <Icon as={FaWallet} fontSize={{ lg: "4xl", md: "2xl", base: "md" }} />
        </HStack>
      </Flex>
      {false ? (
        <Flex justify="space-between" color="gray.300">
          <HStack spacing={2}>
            <Icon as={FaLandmark} />
            <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
              Conta Caixa
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
            <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>3.000,00</Text>
          </HStack>
        </Flex>
      ) : (
        <Center h="100%">
          <Flex
            direction="column"
            align="center"
            alignContent="center"
            color="gray.300"
            w="100%"
          >
            <Text>Você não tem contas cadastradas ainda</Text>
            <Icon as={FaExclamationCircle} my={2} fontSize="xl" />
          </Flex>
        </Center>
      )}
      {openModalWallet && <ModalWallet />}
    </Stack>
  );
};
