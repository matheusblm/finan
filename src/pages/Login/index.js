import {
  Flex,
  Button,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  ChakraInputProps,
  InputLeftElement,
  InputGroup,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Users } from "../../providers/Users";

export const Login = () => {
  const history = useHistory();

  const { token, errorLogin, Login } = Users();

  const schema = yup.object().shape({
    email: yup.string().required("Item obrigatório"),
    password: yup.string().required("Item obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onLogin = (data) => {
    Login(data);
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      bg="#E5E5E5"
    >
      <Box
        onClick={() => history.push("/")}
        w="60px"
        h="60px"
        cursor="pointer"
        position="absolute"
        fontSize="25px"
        top={["40px", "50px", "90px"]}
        left={["40px", "50px", "90px"]}
      >
        <FaArrowLeft />
      </Box>
      <Flex
        w={["100vw", "100vw", "90vw"]}
        bg={["#B7C5DE", "#FEFEFE", "#FEFEFE"]}
        h={["100vh", "100vh", "90vh"]}
        justifyContent="center"
        alignItems="flex-end"
        color="whiteAlpha.900"
        borderRadius={["0px", "0px", "30px"]}
        overflow="hidden"
      >
        <Box
          bg={["#FEFEFE", "#FEFEFE", "#FEFEFE"]}
          w={["100%", "50%", "50%"]}
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FormControl
            as="form"
            w={["90%", "90%", "75%", "50%"]}
            height="100%"
            padding="15px"
            borderRadius="5px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="#80807E"
            onSubmit={handleSubmit(onLogin)}
          >
            <Image
              h={["150px", "150px", "120px", "100px"]}
              src="https://s3-alpha-sig.figma.com/img/44a9/8893/fad81878ee4881059dc97e15eb6c5bdf?Expires=1637539200&Signature=Yg26wPlf7-zg6SOzn8mvaqGMwBN-sSv-LiHRcKjVK~yk-RJOoh~3AYqUpws5S~sYMo4fvH95iTJyYS5maMpsXSd5aw4VOFF8gbzqGNqPzDEBOCA1Q0h4eV2zxEBGwjm0VhvnSoYzpo5Zb6~Ze-eo7iWA0naKRGqhx0XRdcnvxSi4Wqqr3zu7QsjQ0fxfDSnWewyT-Jb2Qm9HEZsaAlDiFzTOFKQkL8fVidgRQqyLv36Ai8dQYIQRjrKeJFHIeFyOAsfkRS7MRTJudBdLjt0CleMJ2q49f6pF4J4cNZJKEOtnjuwBUpEqpWj0XLCTYPKXOnWLHdyeUSEDfikH4CvhcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            />
            <FormLabel
              textAlign="left"
              w="100%"
              paddingLeft="2"
              fontSize="14px"
            >
              Email
            </FormLabel>
            <InputGroup flexDirection="column">
              <InputLeftElement>
                <HiOutlineMail />
              </InputLeftElement>
              <Input
                {...register("email")}
                marginBottom="0.5"
                type="email"
                placeholder="email"
                _placeholder={"fontSize:18px"}
              />
              <Text
                as="p"
                h="10px"
                paddingLeft="2"
                marginBottom="5px"
                fontSize="xs"
              >
                {errors.email?.message}
              </Text>
            </InputGroup>
            <FormLabel
              textAlign="left"
              w="100%"
              paddingLeft="2"
              fontSize="14px"
            >
              Senha
            </FormLabel>
            <InputGroup flexDirection="column">
              <InputLeftElement>
                <FaRegEyeSlash />
              </InputLeftElement>
              <Input
                {...register("password")}
                marginBottom="0.5"
                type="password"
                placeholder="password"
                _placeholder={"fontSize:18px"}
              />
              <Text
                as="p"
                h="10px"
                paddingLeft="2"
                marginBottom="5px"
                fontSize="xs"
              >
                {errors.password?.message}
              </Text>
            </InputGroup>

            <Button
              bg="#16425B"
              color="white"
              w="80%"
              fontSize="20px"
              marginBottom="4"
              marginTop="4"
              type="submit"
            >
              Login
            </Button>
            <Box
              h={["60px", "60px", "20px"]}
              w="100%"
              textAlign="center"
              fontSize="xs"
            >
              Ainda não possui uma conta?
              <Text
                as="span"
                onClick={() => history.push("/register")}
                cursor="pointer"
                color={"blue.900"}
              >
                {" "}
                Clique aqui!
              </Text>
            </Box>
          </FormControl>
        </Box>
        <Flex
          bg="#9BADD0"
          w={["0%", "50%", "50%"]}
          h="100%"
          as="div"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w="75%"
            h="75%"
            borderRadius="50%"
            bg="#FEFEFE"
            overflow="hidden"
          >
            <Image
              src="https://s3-alpha-sig.figma.com/img/6bd4/c077/3073998c6d775893db11cffa4edbdc31?Expires=1637539200&Signature=A-zmXARI16HBl5eQt0M0xxvXTi2xhr9~DP6NaPvXWBtusfd6MdTjIcP1R0PSDjVJFRSOHxlpP~WpLR34Pe4xLqNuwfbd~5FM2M5rjAesz7hHyvrInAQu3B~4rUzl3XlOSciVj4C6kTx-DP5Pp8O3z5W4BHvwH~~fiiGleZu2DyYqL3SYJgtPgaN0yNW1zrp3e5SgSHEncnxrEgKc7u8~F0nnG~PxdqTRuW280czqiDIO~plECw01PnbFFRKFDMA7FveTKUPYEZGvnLi9rhBamlaoWONMyyyutuan60OFp9TL2o5rKVNH-FikwnUAwrI1Y24HjqyIii66JwMBIVUsFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              borderRadius="50%"
              paddingTop={["30%", "30%", "30%", "10%"]}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
