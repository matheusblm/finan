import { Flex, HStack, Icon, Progress, Stack, Text } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

import { useReceive } from "../../providers/ContextReceives";
import { useSpend } from "../../providers/ContextSpend";

export const ProgressBar = () => {
  const { receiveTotal } = useReceive();
  const { spendTotal } = useSpend();

  const total = receiveTotal + spendTotal;

  const spendProgress = spendTotal !== 0 ? (spendTotal / total) * 100 : 0;
  const receiveProgress = receiveTotal !== 0 ? (receiveTotal / total) * 100 : 0;

  return (
    <Stack w="100%" p={4} spacing={12}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Balanço do mês: </Text>
        <Icon
          as={FaCalendarAlt}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      <Stack spacing={2}>
        <HStack>
          <Progress
            value={spendProgress.toFixed(2)}
            size="lg"
            colorScheme="red"
            w="80%"
          />
          <Text
            as="span"
            fontSize={{ lg: "md", md: "sm", base: "xs" }}
            color="gray.300"
          >
            {!!spendProgress && spendProgress.toFixed(2) + " %"}
          </Text>
        </HStack>
        <HStack>
          <Progress
            value={receiveProgress.toFixed(2)}
            size="lg"
            colorScheme="green"
            w="80%"
          />
          <Text
            as="span"
            fontSize={{ lg: "md", md: "sm", base: "xs" }}
            color="gray.300"
          >
            {!!receiveProgress && receiveProgress.toFixed(2) + " %"}
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};
