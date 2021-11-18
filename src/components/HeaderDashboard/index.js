import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

import { useReceive } from "../../providers/ContextReceives";
import { useSpend } from "../../providers/ContextSpend";
import { Users } from "../../providers/Users";

import { formatValue } from "../../utils/formatValue";

export const HeaderDashboard = ({ onOpenCreateRecive, onOpenCreateSpend }) => {
  const { receivedTotal } = useReceive();
  const { spendedTotal } = useSpend();

  const { username } = Users();

  const Saldo = receivedTotal - spendedTotal;

  return (
    <Flex
      direction={{ md: "row", base: "column" }}
      justify="space-between"
      w="100%"
    >
      <Flex
        direction="column"
        flex="2"
        justify="space-around"
        px={4}
        align={{ lg: "flex-start", base: "center" }}
      >
        <Text color="gray.600" fontSize="lg">
          Bem Vindo, {username.toUpperCase()}
        </Text>
        <Flex direction={{ lg: "row", base: "column" }}>
          <Stack bg="white" borderRadius="lg" py={2} px={6} m={2}>
            <Text fontSize="sm" color="gray.600">
              Receita Mensal:
            </Text>
            <Text color="green" fontSize="sm">
              {formatValue(receivedTotal)}
            </Text>
          </Stack>
          <Stack bg="white" borderRadius="lg" py={2} px={6} m={2}>
            <Text fontSize="sm" color="gray.600">
              Despesa Mensal:
            </Text>
            <Text color="red.300" fontSize="sm">
              {formatValue(spendedTotal)}
            </Text>
          </Stack>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        flex="1"
        px={4}
        borderX={{ md: "2px solid #9e9ea7" }}
        my={{ base: "2" }}
      >
        <Flex
          direction="column"
          align="center"
          bg="white"
          borderRadius="lg"
          py={4}
          px={6}
        >
          <Text fontSize="sm" color="gray.600">
            Saldo Total:
          </Text>
          <Text fontSize="sm" color={Saldo > 0 ? "green" : "red"}>
            {formatValue(Saldo)}
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" flex="1" justify="center">
        <Stack py={4} px={8} spacing={12}>
          <Flex justify={{ base: "center", md: "flex-start" }}>
            <Text color="gray.600" fontSize="lg" fontWeight="bold">
              Acesso Rápido:
            </Text>
          </Flex>
          <Flex justify="space-around">
            <Button bg="white" w="94px" h="70" mx={1}>
              <Flex
                direction="column"
                align="center"
                justify="center"
                onClick={onOpenCreateRecive}
              >
                <Icon
                  bg="green"
                  color="white"
                  w="40px"
                  h="40px"
                  p={2}
                  borderRadius="lg"
                  as={FaPlus}
                  mb="4px"
                />
                <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  Receita
                </Text>
              </Flex>
            </Button>
            <Button
              bg="white"
              w="94px"
              h="70"
              mx={1}
              onClick={onOpenCreateSpend}
            >
              <Flex direction="column" align="center" justify="center">
                <Icon
                  bg="red.300"
                  color="white"
                  w="40px"
                  h="40px"
                  p={2}
                  borderRadius="lg"
                  as={FaMinus}
                  mb="4px"
                />
                <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  Despesa
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};
