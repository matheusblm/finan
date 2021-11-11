import { Button, Center, Flex, HStack, Icon, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { FaPlus, FaMinus } from "react-icons/fa";

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
                                Teste
                            </Flex>
                            <Flex w="100%" h="270px" flex={1} p={2} borderRadius="lg" overflow="auto" boxShadow="lg">
                                Teste
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
                                Teste
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
        <Flex>
            <Flex direction="column" justify="space-around" px={4}>
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
            <Flex direction="column" px={4} borderX="2px solid #9e9ea7">
                <Stack bg="white" borderRadius="lg" py={4} px={8} >
                    <Text fontSize="sm" color="gray.600">Saldo Total:</Text>
                    <Text fontSize="sm">R$ 1.000.000,00</Text>
                </Stack>
            </Flex>
            <Flex direction="column" justify="center">
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