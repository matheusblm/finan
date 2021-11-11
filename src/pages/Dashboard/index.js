import { Center, Flex, HStack, Stack, Wrap, WrapItem } from "@chakra-ui/react"

export const Dashboard = () => {
    return (
        <>
            <Flex h="106px" bg="#16425B">Header</Flex>
            <Center>
                <Stack py={4} w={"1047px"}>
                    <Flex h="230px" bgGradient="linear(to-l, #B7C5DE 0%, rgba(255, 255, 255, 0.44) 99.65%)" p={2} borderRadius="lg" overflow="auto" boxShadow="lg" >
                        Teste
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