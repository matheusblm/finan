import { Flex,Button,FormControl,Input,FormLabel,FormErrorMessage,
    ChakraInputProps,InputLeftElement,InputGroup,Box,Image,Text } from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {BsPerson} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import {FaRegEyeSlash} from "react-icons/fa";
import {FaArrowLeft} from "react-icons/fa";
import { useEffect, useState } from "react";

export const SignUp = () => {

    const history = useHistory()
  
    const schema = yup.object().shape({
      username:yup.string().required("Item obrigatório"),
      email:yup.string().required("Item obrigatório"),
      password:yup.string().required("Item obrigatório"),
      passwordConfirm:yup.string().required("Item obrigatório").oneOf([yup.ref("password")],"senha incorreta")
    })
  
    const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)})
  
    const onSignin = (data)=>{
  
      axios.post()
    }

    const [text,setText] = useState("")
    const texts = [{frase:"Cuidado com as pequenas despesas;um pequeno vazamento afundará um grande navio",autor:"Benjamin Franklin"},
                    {frase:"Riqueza é o que você acumula, não o que você gasta.",autor:"Thomas J. Stanley"},
                    {frase:"Se você não pode controlar suas emoções, você não pode controlar seu dinheiro.",autor:"Warren Buffet"}]

    const carrossel = () =>{
        let cont =0 
        setInterval(function(){
            setText(texts[cont])
            cont++
            if(cont===texts.length){
                cont=0
            }
        },4000)
    }

    useEffect(()=> carrossel(),[])


  
    return (
      <Flex justifyContent="center" alignItems="center" w="100vw" h="100vh" bg="#E5E5E5">
         <Box onClick={()=>history.push("/")} w="60px" h="60px" cursor="pointer" position="absolute" fontSize="25px" top={["40px","50px","90px"]} left={["40px","50px","90px"]}>
            <FaArrowLeft/>
        </Box>
        <Flex w={["100vw","100vw","90vw"]} h={["100vh","100vh","90vh"]} justifyContent="center" alignItems="flex-end"
        color="whiteAlpha.900" borderRadius={["0px","0px","30px"]} overflow="hidden">
            <Flex bg="#9BADD0" w={["0%","0%","40%"]} h="100%" as="div" justifyContent="center" alignItems="center">
                <Box as="div" w="190px" h="300px" bg="#FEFEFE" borderRadius="147.5px 147.5px 5px 5px" 
                overflow="hidden" display="flex" justifyContent="center" alignItems="center">
                    {console.log(text.autor)}
                    <Flex color={"blue.900"} flexDirection="column" w="100%" h="100%" justifyContent="center" alignItems="center" paddingTop="30px">
                        <Text textAlign="justify" padding="6px">{text.frase}</Text>
                        <Text padding="3px">{text.autor}</Text>
                    </Flex>
                </Box>
            </Flex>
            <Box bg={["#FEFEFE","#FEFEFE","#FEFEFE"]} w={["100%","100%","60%"]} height="100%" display="flex" alignItems="center" justifyContent="center">
                <FormControl as="form" w={["90%","90%","75%","50%"]} padding="15px" 
                borderRadius="5px" display="flex" flexDirection="column" alignItems="center" 
                justifyContent="center" color="#80807E" isInvalid={false}>
                    <Image h="100px"
                    src="https://s3-alpha-sig.figma.com/img/44a9/8893/fad81878ee4881059dc97e15eb6c5bdf?Expires=1637539200&Signature=Yg26wPlf7-zg6SOzn8mvaqGMwBN-sSv-LiHRcKjVK~yk-RJOoh~3AYqUpws5S~sYMo4fvH95iTJyYS5maMpsXSd5aw4VOFF8gbzqGNqPzDEBOCA1Q0h4eV2zxEBGwjm0VhvnSoYzpo5Zb6~Ze-eo7iWA0naKRGqhx0XRdcnvxSi4Wqqr3zu7QsjQ0fxfDSnWewyT-Jb2Qm9HEZsaAlDiFzTOFKQkL8fVidgRQqyLv36Ai8dQYIQRjrKeJFHIeFyOAsfkRS7MRTJudBdLjt0CleMJ2q49f6pF4J4cNZJKEOtnjuwBUpEqpWj0XLCTYPKXOnWLHdyeUSEDfikH4CvhcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                    <FormLabel textAlign="left" w="100%" paddingLeft="2" fontSize="14px">Nome de usuário</FormLabel>
                    <InputGroup flexDirection="column">
                    <InputLeftElement><BsPerson/></InputLeftElement>
                    <Input {...register("username")} marginBottom="0.1" placeholder="username" _placeholder={"fontSize:18px"}/>
                    <Text as="p" h="10px" paddingLeft="2" marginBottom="5px" fontSize="xs"></Text>
                    </InputGroup>
                    <FormLabel textAlign="left" w="100%" paddingLeft="2" fontSize="14px">Email</FormLabel>
                    <InputGroup flexDirection="column">
                    <InputLeftElement><HiOutlineMail/></InputLeftElement>
                    <Input {...register("email")} marginBottom="0.1" type="email" placeholder="email" _placeholder={"fontSize:18px"}/>
                    <Text as="p" h="10px" paddingLeft="2" marginBottom="5px" fontSize="xs"></Text>
                    </InputGroup>
                    <FormLabel textAlign="left" w="100%" paddingLeft="2" fontSize="14px">Senha</FormLabel>
                    <InputGroup flexDirection="column">
                    <InputLeftElement><FaRegEyeSlash/></InputLeftElement>
                    <Input {...register("password")} marginBottom="0.1" type="password" placeholder="password" _placeholder={"fontSize:18px"}/>
                    <Text as="p" h="10px" paddingLeft="2" marginBottom="5px" fontSize="xs"></Text>
                    </InputGroup>
                    <FormLabel textAlign="left" w="100%" paddingLeft="2" fontSize="14px">Confirmar senha</FormLabel>
                    <InputGroup flexDirection="column">
                    <InputLeftElement><FaRegEyeSlash/></InputLeftElement>
                    <Input {...register("passwordConfirm")} marginBottom="0.1" type="password" placeholder="password confirm" _placeholder={"fontSize:18px"}/>
                    <Text as="p" h="10px" paddingLeft="2" marginBottom="5px" fontSize="xs"></Text>
                    </InputGroup>
                    
                    <Button bg={"blue.900"} color="white" w="80%" fontSize="20px" marginBottom="4" marginTop="4">Login</Button>
                    <Box h={["60px","60px","20px"]} w="100%" textAlign="center" fontSize="xs">
                        Já possui uma conta?<Text as="span" onClick={()=>history.push("/")} cursor="pointer" color={"blue.900"}> Clique aqui!</Text>
                    </Box>
                </FormControl>
            </Box>
        </Flex>
      </Flex>  
    );
}