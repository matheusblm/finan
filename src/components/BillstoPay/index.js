import {
  Center,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaMoneyBillAlt,
  FaFileInvoiceDollar,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";

import { useSpend } from "../../providers/ContextSpend";
import { Users } from "../../providers/Users";

import { formatValue } from "../../utils/formatValue";
import { useEffect, useState } from "react";

export const BillsToPay = () => {
  const { token, id } = Users();
  const { loadSpends, newSpend } = useSpend();
  const [loading, setLoading] = useState(true);
  const { editSpend } = useSpend();

  useEffect(() => {
    const userId = id | localStorage.getItem("idfinan");
    loadSpends(userId, token).then((res) => {
      setLoading(false);
    });
  }, []);

  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Contas a Pagar: </Text>
        <Icon
          as={FaMoneyBillAlt}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      {!!newSpend.length ? (
        newSpend.map((item, idx) => (
          <Flex key={idx} justify="space-between" color="gray.300">
            <HStack spacing={2}>
              <Icon as={FaFileInvoiceDollar} color="red.300" w="30px" />
              <Stack spacing={0}>
                <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
                  {item.account}
                </Text>
                <Text
                  display={["none", "none", "block", "block"]}
                  fontSize={{ md: "sm", lg: "md" }}
                >
                  {item.data}
                </Text>
              </Stack>
            </HStack>
            <HStack spacing={2}>
              <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>
                {formatValue(item.value)}
              </Text>
              <Checkbox
                onChange={() => {
                  editSpend(item.id, token);
                  const userId = id | localStorage.getItem("idfinan");
                  loadSpends(userId, token);
                }}
              />
              <Icon
                as={FaTimes}
                my={2}
                fontSize={{ lg: "md", md: "sm", base: "xs" }}
                color="red"
              />
            </HStack>
          </Flex>
        ))
      ) : (
        <Center h="100%">
          <Flex direction="column" align="center" color="gray.300">
            <Text>Você não tem contas a pagar</Text>
            <Icon as={FaExclamationCircle} my={2} fontSize="xl" />
          </Flex>
        </Center>
      )}
    </Stack>
  );
};
