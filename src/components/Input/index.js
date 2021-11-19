import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";

import { useState, useEffect, useCallback } from "react";
import {
  Input as ChakraInput,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/input";
import { forwardRef } from "react";

const inputVariantion = {
  error: "red.300",
  default: "gray.200",
  focus: "#3A7CA5",
  filled: "green.300",
};

const InputBase = ({ name, error = null, icon: Icon, label, ...rest }, ref) => {
  const [variation, setVariation] = useState("default");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [value, error]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="gray.400"> {label} </FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement color={inputVariantion[variation]}>
            <Icon />
          </InputLeftElement>
        )}
        <ChakraInput
          name={name}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          color={inputVariantion[variation]}
          borderColor={inputVariantion[variation]}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          variant="outline"
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          h="40px"
          ref={ref}
          {...rest}
          _focus={{
            bg: "gray.100",
          }}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const InputTeste = forwardRef(InputBase);
