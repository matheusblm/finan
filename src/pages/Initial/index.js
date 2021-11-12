import logo from "../../assets/logo.png"
import pizza from "../../assets/grafico-de-pizza 1.png"
import phone from "../../assets/mockupIphone.png"
import mobile from "../../assets/Mobile-Dash-page.jpg"
import { Flex, Center, Box, Image, Heading  } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Initial = () => {

    return (
    <>    
    <Flex bgGradient="linear(to-l, blue.500, gray.50)" h={['22vh', '40.5vh']}>
        <Box w={['100%', '50%']} display={['flex', 'flex', 'flex']} alignItems='center' justifyContent={['center']}> 
            <Image src={logo} alt='finan' height={['180px', '275px']} />
        </Box>
        <Box w='248px' display={['none', 'block']}>
                    <Center 
                    position='relative' 
                    zIndex='3' 
                    marginTop='8px' 
                    bg="gray.50" 
                    w="143px" 
                    h="105px" 
                    borderRadius='20px' 
                    boxShadow='0px 2px 4px #80807E'
                    >
                        <Heading color='gray.600' textAlign='center' fontSize='xs' fontWeight='bold'>
                            Caso voce ja faz parte da nossa comunidade apenas faça <Link to='/inicial' style={{color:'#1A3747', fontWeight: 'bold'}}>o Login</Link>
                        </Heading >
                    </Center>
                    <Center  
                    position='relative' 
                    bottom='22px' 
                    zIndex='2' 
                    left='100px' 
                    bg="gray.50" 
                    w="143px" 
                    h="105px" 
                    borderRadius='20px' 
                    boxShadow='0px 2px 4px #80807E'
                    >
                        <Heading color='gray.600' fontSize='3xl' textAlign='center' fontSize='xs' fontWeight='bold'> 
                            <Link to='/inicial' style={{color:'#1A3747', fontWeight: 'bold'}}>Cadastre-se</Link> para começar a ter controle da sua vida financeira 
                        </Heading >
                    </Center>
                    <Center 
                    position='relative' 
                    bottom='45px' 
                    zIndex='1' 
                    bg="gray.50" 
                    w="143px" 
                    h="105px" 
                    borderRadius='20px' 
                    boxShadow='0px 2px 4px #80807E'
                    >
                        <Heading  color='gray.600' textAlign='center'fontSize='xs' fontSize='9px' fontWeight='bold'>
                            Graficos simples e intuitvos Com tabelas de facil entendimento
                        </Heading >
                        <Image src={pizza} alt='finan' w='57%'/>
                    </Center>
        </Box>
    </Flex>
    <Flex bg="gray.50" h="57vh" w='100vw' justifyContent='center' >
        <Flex w='65%'  marginTop='10px' maxW={['210px', '300px']} justifyContent='center' flexDirection={['column']} alignItems={['center']}>
            <Heading fontSize={['2xl','5xl']} marginLeft='8px' color='gray.600' w={[]}>
            Suas finanças na palma da mao
            </Heading>
                <Box w='248px' display={['block', 'none']}>
                    <Center 
                    position='relative' 
                    zIndex='3' 
                    marginTop='15px' 
                    bg="gray.50" 
                    w="143px" 
                    h="105px" 
                    borderRadius='20px' 
                    boxShadow='0px 2px 4px #80807E'
                    >
                        <Heading color='gray.600' textAlign='center' fontSize='xs' fontWeight='bold'>
                            Caso voce ja faz parte da nossa comunidade apenas faça <Link to='/inicial' style={{color:'#1A3747', fontWeight: 'bold'}}>o Login</Link>
                        </Heading >
                    </Center>
                    <Center  
                    position='relative' 
                    bottom='12px' 
                    zIndex='2' 
                    left='100px' 
                    bg="gray.50" 
                    w="143px" 
                    h="105px" 
                    borderRadius='20px' 
                    boxShadow='0px 2px 4px #80807E'
                    >
                        <Heading color='gray.600' fontSize='3xl' textAlign='center' fontSize='xs' fontWeight='bold'> 
                            <Link to='/inicial' style={{color:'#1A3747', fontWeight: 'bold'}}>Cadastre-se</Link> para começar a ter controle da sua vida financeira 
                        </Heading >
                    </Center>
                    <Center 
                    position='relative' 
                    bottom='24px' 
                    zIndex='1' 
                    bg="gray.50" 
                    w="143px" 
                    h="105px" 
                    borderRadius='20px' 
                    boxShadow='0px 2px 4px #80807E'
                    >
                        <Heading  color='gray.600' textAlign='center'fontSize='xs' fontSize='9px' fontWeight='bold'>
                            Graficos simples e intuitvos Com tabelas de facil entendimento
                        </Heading >
                        <Image src={pizza} alt='finan' w='57%'/>
                    </Center>
                </Box>
        </Flex>
        <Flex  w='50%' alignItems='center' display={['none', 'flex']} justifyContent='center'>
            <Image src={mobile} zIndex='0' alt='finan' w={['165px']} h='365px' position='absolute' bottom='200px' borderRadius='12px 12px 20px 20px'/>
            <Image src={phone} zIndex='1'alt='finan' w={['200px', '215px']} h='390px'/>
        </Flex>
    </Flex >
    <Flex bgGradient="linear(to-l, blue.500, gray.50)" h="25vh" alignItems='center' flexDirection='column'>
        <Heading  color='gray.600' marginTop='10px' marginBottom={['5px', '15px']}  fontSize='xs' height={['10%']}>
            Time de desenvolvimento
        </Heading >
        <Flex flexWrap='wrap' justifyContent='center' w={['90%']}>
            <Flex     alignItems= 'center' flexDirection='column'>
                <Image w={['35px', '60px']}  h={['35px', '60px']}  borderRadius='100%'   boxShadow='#80807e 1px 1px 4px 0px'/>
                <Heading fontSize={['xs']} marginTop={['0px', '3px']}>Joao Nonato</Heading>
                <Heading fontSize={['xs']}>linkedin</Heading>
            </Flex>
            <Flex     alignItems= 'center' flexDirection='column' margin='0 8px 0 8px'>
                <Image w={['35px', '60px']}  h={['35px', '60px']} borderRadius='100%'   boxShadow='#80807e 1px 1px 4px 0px' />
                <Heading fontSize={['xs']} marginTop={['0px', '3px']}>Matheus Bueno</Heading>
                <Heading fontSize={['xs']}>linkedin</Heading> 
            </Flex>
            <Flex     alignItems= 'center' flexDirection='column' margin='0 8px 0 8px'>
                <Image w={['35px', '60px']}  h={['35px', '60px']} borderRadius='100%'   boxShadow='#80807e 1px 1px 4px 0px' />
                <Heading fontSize={['xs']} marginTop={['0px', '3px']}>Rafael Souza</Heading>
                <Heading fontSize={['xs']}>linkedin</Heading>
            </Flex>
            <Flex     alignItems= 'center' flexDirection='column' margin='0 8px 0 8px'>
                <Image w={['35px', '60px']}  h={['35px', '60px']} borderRadius='100%'   boxShadow='#80807e 1px 1px 4px 0px' />
                <Heading fontSize={['xs']} marginTop={['0px', '3px']}>Victor sherer</Heading>
                <Heading fontSize={['xs']}>linkedin</Heading>
            </Flex>
            <Flex alignItems= 'center' flexDirection='column' margin='0 8px 0 8px'>
                <Image w={['35px', '60px']}  h={['35px', '60px']}  borderRadius='100%'   boxShadow='#80807e 1px 1px 4px 0px'/>
                <Heading fontSize={['xs']} marginTop={['0px', '3px']}>Felipe Silveira</Heading>
                <Heading fontSize={['xs']}>linkedin</Heading>
            </Flex>
        </Flex>
    </Flex>
    </>
    )
}

export default Initial