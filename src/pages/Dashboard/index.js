import { Center, Flex, Stack, useDisclosure } from "@chakra-ui/react";

import { ModalCreateRecive } from "../../components/ModalCreateRecive";
import { ModalCreateSpend } from "../../components/ModalCreateSpend";
import Header from "../../components/Header";

import { BillsToReceive } from "../../components/BillsToReceive";
import { WalletDashboard } from "../../components/WalletDashboard";
import { SpendingOfTheMonth } from "../../components/SpendingOftheMonth";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ProgressBar } from "../../components/ProgressBar";
import { BillsToPay } from "../../components/BillstoPay";

export const Dashboard = () => {
  const {
    isOpen: isOpenCreateRecive,
    onOpen: onOpenCreateRecive,
    onClose: onCloseCreateRecive,
  } = useDisclosure();
  const {
    isOpen: isOpenCreateSpend,
    onOpen: onOpenCreateSpend,
    onClose: onCloseCreateSpend,
  } = useDisclosure();

  return (
    <>
      <Header />
      <Center>
        <Stack py={4} w={"80%"}>
          <Flex
            h={{ xs: "500px", sm: "500px", base: "230px" }}
            bgGradient="linear(to-l, blue.500 0%, gray.50 99.65%)"
            p={2}
            borderRadius="lg"
            overflow="auto"
            boxShadow="lg"
          >
            <HeaderDashboard
              onOpenCreateRecive={onOpenCreateRecive}
              onOpenCreateSpend={onOpenCreateSpend}
            />
          </Flex>
          <Flex direction={{ md: "row", base: "column" }}>
            <Stack w={{ md: "45%", base: "100%" }} h="548px" mx={[0, 0, 2]}>
              <Flex
                w="100%"
                h={{ sm: "270px", base: "75px" }}
                flex={1}
                p={2}
                borderRadius="lg"
                overflow="auto"
                boxShadow="lg"
              >
                <WalletDashboard />
              </Flex>
              <Flex
                w="100%"
                h={{ sm: "270px", base: "75px" }}
                flex={1}
                p={2}
                borderRadius="lg"
                overflow="auto"
                boxShadow="lg"
              >
                <ProgressBar />
              </Flex>
            </Stack>
            <Flex
              w="100%"
              h="548px"
              flex={1}
              p={2}
              borderRadius="lg"
              overflow="auto"
              boxShadow="lg"
              mx={[0, 0, 2]}
            >
              <SpendingOfTheMonth />
            </Flex>
          </Flex>
          <Flex direction={{ md: "row", base: "column" }}>
            <Flex
              w="100%"
              h="548px"
              flex={1}
              p={2}
              borderRadius="lg"
              overflow="auto"
              boxShadow="lg"
              mx={[0, 0, 2]}
            >
              <BillsToPay />
            </Flex>

            <Flex
              w="100%"
              h="548px"
              flex={1}
              p={2}
              borderRadius="lg"
              overflow="auto"
              boxShadow="lg"
              mx={[0, 0, 2]}
            >
              <BillsToReceive />
            </Flex>
          </Flex>
        </Stack>
      </Center>
      <ModalCreateRecive
        isOpen={isOpenCreateRecive}
        onClose={onCloseCreateRecive}
      />
      <ModalCreateSpend
        isOpen={isOpenCreateSpend}
        onClose={onCloseCreateSpend}
      />
    </>
  );
};
