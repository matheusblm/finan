import { Button, Center, Flex, HStack, Icon, Progress, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { FaPlus, FaMinus, FaCalendarAlt, FaWallet } from "react-icons/fa";

export const Dashboard = () => {
    return (
        <>
            <Flex h="106px" bg="#16425B">Header</Flex>
            <Center>
                <Stack py={4} w={"1047px"}>
                    <Flex h="230px" bgGradient="linear(to-l, blue.500 0%, gray.50 99.65%)" p={2} borderRadius="lg" overflow="auto" boxShadow="lg" >
                        <HeaderDashboard />
                    </Flex>
                    <HStack>
                        <Stack w="45%" h="548px">
                            <Flex w="100%" h="270px" flex={1} p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                                <WalletDashboard />
                            </Flex>
                            <Flex w="100%" h="270px" flex={1} p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                                <CreditCardDashboard />
                            </Flex>
                        </Stack>
                        <Flex w="100%" h="548px" flex={1} p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                            Teste
                        </Flex>
                    </HStack>
                    <HStack>
                        <Flex w="100%" h="548px" flex={1} p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                            Teste
                        </Flex>
                        <Stack w="45%" h="548px">
                            <Flex w="100%" h="270px" flex={1} p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                                <ProgressBar />
                            </Flex>
                            <Flex w="100%" h="270px" flex={1} p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                                Teste
                            </Flex>
                        </Stack>
                    </HStack>
                </Stack>
                {/* <Stack py={4}>
                    <Flex h="230px" bgGradient="linear(to-l, #B7C5DE 0%, rgba(255, 255, 255, 0.44) 99.65%)" p={2} borderRadius="lg" overflow="auto" boxShadow="lg" >
                        Teste
                    </Flex>
                    <Wrap justify={"center"}>
                        <Stack>
                            <Flex w="540px" h="270px" p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                                Teste
                            </Flex>
                            <Flex w="540px" h="270px" p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                                Teste
                            </Flex>
                        </Stack>
                        <WrapItem w="540px" h="548px" p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                            Teste
                        </WrapItem>
                    </Wrap>
                    <Wrap justify={"center"} >
                        <WrapItem w="540px" h="548px" p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                            Teste
                        </WrapItem>
                        <Stack>
                            <WrapItem maxW="540px" h="270px" p={2} borderRadius="lg" overflow="auto" boxShadow="lg" bg="green">
                                Teste
                            </WrapItem>
                            <WrapItem w="540px" h="270px" p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                                Teste
                            </WrapItem>
                        </Stack>
                    </Wrap>
                </Stack> */}
            </Center>
        </>
    )
}

const HeaderDashboard = () => {
    return (
        <Flex justify="space-between" w="100%">
            <Flex direction="column" flex="2" justify="space-around" px={4}>
                <Text color="gray.600" fontSize="lg">Bem Vindo,<br /> Usuário</Text>
                <HStack spacing={4}>
                    <Stack bg="white" borderRadius="lg" py={2} px={6}>
                        <Text fontSize="sm" color="gray.600">Receita Mensal:</Text>
                        <Text color="green.300" fontSize="sm">R$ 1.000.000,00</Text>
                    </Stack>
                    <Stack bg="white" borderRadius="lg" py={2} px={6}>
                        <Text fontSize="sm" color="gray.600">Despesa Mensal:</Text>
                        <Text color="red.300" fontSize="sm">R$ 1.000,00</Text>
                    </Stack>
                </HStack>
            </Flex>
            <Flex direction="column" align="center" flex="1" px={4} borderX="2px solid #9e9ea7">
                <Flex direction="column" align="center" bg="white" borderRadius="lg" py={4} px={6} >
                    <Text fontSize="sm" color="gray.600">Saldo Total:</Text>
                    <Text fontSize="sm">R$ 1.000.000,00</Text>
                </Flex>
            </Flex>
            <Flex direction="column" flex="1" justify="center">
                <Stack py={4} px={8} spacing={12} >
                    <Text color="gray.600" fontSize="lg" fontWeight="bold">Acesso Rápido:</Text>
                    <HStack>
                        <Button bg="white" w="94px" h="70">
                            <Flex direction="column" align="center" justify="center">
                                <Icon bg="green.300" color="white" w="40px" h="40px" p={2} borderRadius="lg" as={FaPlus} mb="4px" />
                                <Text fontWeight="medium" fontSize="sm" color="gray.600">Receita</Text>
                            </Flex>
                        </Button>
                        <Button bg="white" w="94px" h="70">
                            <Flex direction="column" align="center" justify="center">
                                <Icon bg="red.300" color="white" w="40px" h="40px" p={2} borderRadius="lg" as={FaMinus} mb="4px" />
                                <Text fontWeight="medium" fontSize="sm" color="gray.600">Despesa</Text>
                            </Flex>
                        </Button>
                    </HStack>
                </Stack>
            </Flex>
        </Flex >
    )
}

const ProgressBar = () => {
    return (
        <Stack w="100%" p={4} spacing={12}>
            <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
                <Text fontSize={"2xl"}>Balanço do mês: </Text>
                <Icon as={FaCalendarAlt} />
            </Flex>
            <Stack>
                <Progress value={20} colorScheme=" red.300" size="lg" /> 20,00
                <Progress value={80} colorScheme="green.300" size="lg" /> 80,00
            </Stack>
        </Stack >
    )
}

const WalletDashboard = () => {
    return (
        <Stack w="100%" p={4} spacing={12}>
            <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
                <Text fontSize={"2xl"}>Carteira: </Text>
                <Icon as={FaWallet} fontSize={"4xl"} />
            </Flex>
            <Stack>

            </Stack>
        </Stack >
    )
}

const CreditCardDashboard = () => {
    return (
        <Stack w="100%" p={4} spacing={12}>
            <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
                <Text fontSize={"2xl"}>Carteira: </Text>
                <Icon as={FaWallet} fontSize={"4xl"} />
            </Flex>
            <Stack>

            </Stack>
        </Stack >
    )
}
