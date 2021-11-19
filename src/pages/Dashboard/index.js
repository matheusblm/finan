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


const WalletDashboard = () => {

  const { openModalWallet, handleModalWallet } = useListDashboard()

  const {id,token} = Users()

  const {account,getAccount} = Account()

  useEffect(() => {
    const userId = id || localStorage.getItem("idfinan");
    getAccount(userId, token);
  }, []);

  console.log(account)
  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Carteira: </Text>
        <HStack spacing={8}>
          <Button onClick={handleModalWallet}>
            <Icon as={FaPlusSquare} my={2} fontSize={{ lg: "2xl", md: "xl", base: "lg" }} color="green" />
          </Button>
          <Icon as={FaWallet} fontSize={{ lg: "4xl", md: "2xl", base: "md" }} />
        </HStack>
      </Flex>
      { account ? 
       account.map((acc,index)=>
              <Flex justify="space-between" color="gray.300" key={index} >
                <HStack spacing={2}>
                  <Icon as={FaLandmark} />
                  <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
                    {acc.bank}
                  </Text>
                </HStack>
                <HStack spacing={2}>
                  <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
                  <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>
                    {acc.over}
                  </Text>
                </HStack>
              </Flex>)
        :
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
      
        // false ? (
        //   <Flex justify="space-between" color="gray.300">
        //     <HStack spacing={2}>
        //       <Icon as={FaLandmark} />
        //       <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
        //         Conta Caixa
        //       </Text>
        //     </HStack>
        //     <HStack spacing={2}>
        //       <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
        //       <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>
        //         3.000,00
        //       </Text>
        //     </HStack>
        //   </Flex>
        // ) : (
        //   <Center h="100%">
        //     <Flex
        //       direction="column"
        //       align="center"
        //       alignContent="center"
        //       color="gray.300"
        //       w="100%"
        //     >
        //       <Text>Você não tem contas cadastradas ainda</Text>
        //       <Icon as={FaExclamationCircle} my={2} fontSize="xl" />
        //     </Flex>
        //   </Center>
        // )
      }
      {
        openModalWallet &&
        <ModalWallet />
      }
    </Stack>
  );
};





  const handleWallet = ({bank,value}) => {
      const over = Number(value)
      const userId = id || localStorage.getItem("idfinan");
      const newData = {bank,over,userId}
      letAccount(newData,token)
      getAccount(token)
  }

  return (
    <Modal isOpen={openModalWallet}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleWallet)}
        padding="2"
        bg="white"
        color="gray.800"
      >
        <ModalHeader display="flex">
          <Text fontWeight="bold" ml="2">
            Nova Carteira
          </Text>
          <Center
            onClick={handleModalWallet}
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
        </ModalHeader>

        <ModalBody textAlign="center">
          <Stack spacing="5">
            <Input {...register("bank")} placeholder="Digite o banco" />
            <Input {...register("value")} placeholder="Valor da Receita" />
          </Stack>
        </ModalBody>

        <ModalFooter flexDirection="column">
          <Button
            as="button"
            type="submit"
            bg="blue.900"
            color="white"
            w="100%"
            h="40px"
            _hover={{ bg: "blue.800" }}
          >
            Criar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const SpendingOfTheMonth = () => {

  const {
    arraySpend,
    arrayNameSpend
  } = useListDashboard();

  const dataGrafico = {
    labels: arrayNameSpend,
    options: {
      plugins: {
        labels: {
          responsive: true,
          position: "right",
        },
      },
    },
    datasets: [
      {
        data: arraySpend,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Gastos do mês: </Text>
        <Icon
          as={FaCalendarAlt}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      <Center>
        <Flex h="290px" w={{ base: "250px", md: "300px", lg: "400px" }}>
          {arraySpend.length !== 0 ? (
            <Doughnut data={dataGrafico} />
          ) : (
            <Center h="100%" w="100%">
              <Flex
                direction="column"
                align="center"
                alignContent="center"
                color="gray.300"
                w="100%"
              >
                <Text>Você não tem gastos cadastrados</Text>
                <Icon as={FaExclamationCircle} my={2} fontSize="xl" />
              </Flex>
            </Center>
          )}
        </Flex>
      </Center>
    </Stack>
  );
};




