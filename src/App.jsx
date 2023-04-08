import { useState } from "react";

import "./App.css";
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Text,
  Input,
  HStack,
  Box,
  Wrap,
  Divider,
  Stack,
  Button,
  Image,
  AspectRatio,
  NumberInput,
  NumberInputField,
  VStack,
} from "@chakra-ui/react";
import arrow from "./assets/icon-arrow.svg";
import { useEffect } from "react";
import { Formik, useFormik } from "formik";
import { ageSchema } from "./Validations/Validation";

function App() {
  // console.log(date.getHours()*60*60*1000);
  // console.log(birthDate);
  const [age, setAge] = useState({ year: null, month: null, day: null });
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  //| Formik
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      day: "",
      month: "",
      year: "",
    },
    validationSchema: ageSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(errors && errors);
  // console.log(formik);

  //| Get Age
  const getAge = async () => {
    try {
      const DOB = new Date("1998-06-12");
      const now = new Date();
      let year = now.getFullYear() - DOB.getFullYear();
      let month = now.getMonth() - DOB.getMonth();
      let day = now.getDate() - DOB.getDate();

      if (day < 0) {
        month--;
        day += new Date(DOB.getFullYear(), DOB.getMonth() + 1, 0).getDate();
      }
      if (month < 0) {
        year--;
        month += 12;
      }
      setAge({ year, month, day });
      // console.log(year, month, day);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAge();
  }, []);

  // const handleSubmit = (e) => {
  //   console.log(e);
  // };

  // console.log(now);
  // const ageInMil = now - birthDate;
  // console.log(birthDate.getFullYear());
  // const year = ageInMil / (1000 * 60 * 60 * 24 * 365.25);

  // const months = year * 12;
  // const year = ageInMil / (1000 * 60 * 60 * 24 * 365);
  // console.log(parseInt(year));
  // console.log(parseInt(month));
  // console.log(parseInt(date));
  // console.log(months);
  // console.log(((now - birthDate.getTime()) /1000)/3600*24);

  return (
    <Grid placeContent="center" maxW="1300px" minH="100vh" bg="hsl(0, 0%, 94%)">
      {/* <Text>App</Text> */}
      <Stack
        w="40rem"
        h="30rem"
        bg="white"
        borderRadius="20px 20px 200px"
        p="8"
      >
        {/* Form  */}
        <Flex as="form" onSubmit={handleSubmit}>
          <FormControl>
            <HStack spacing="1rem">
              <Box>
                <FormLabel fontSize=".6rem" mb="1" textStyle="label">
                  DAY
                </FormLabel>
                <Input
                  type="number"
                  name="day"
                  // pattern="[0-9]+"
                  // min='1'
                  // max='31'
                  value={values.day}
                  onChange={handleChange}
                  layerStyle="input"
                  maxW="7rem"
                  h="2.7rem"
                  placeholder="DD"
                  _placeholder={{
                    color: "hsl(0, 1%, 44%)",
                    letterSpacing: "1px",
                  }}
                  focusBorderColor="hsl(259, 100%, 65%)"
                  errorBorderColor="red"
                  isRequired
                />
              </Box>
              <Box>
                <FormLabel fontSize=".6rem" mb="1" textStyle="label">
                  MONTH
                </FormLabel>
                <Input
                  type="number"
                  name="month"
                  value={values.month}
                  onChange={handleChange}
                  layerStyle="input"
                  maxW="7rem"
                  h="2.7rem"
                  min={1}
                  max="12"
                  placeholder="MM"
                  _placeholder={{
                    color: "hsl(0, 1%, 44%)",
                    letterSpacing: "1px",
                  }}
                  focusBorderColor="hsl(259, 100%, 65%)"
                  isRequired
                />
              </Box>
              <Box>
                <FormLabel fontSize=".6rem" mb="1" textStyle="label">
                  YEAR
                </FormLabel>
                <Input
                  type="text"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                  layerStyle="input"
                  maxW="7rem"
                  h="2.7rem"
                  placeholder="YYYY"
                  _placeholder={{
                    color: "hsl(0, 1%, 44%)",
                    letterSpacing: "1px",
                  }}
                  focusBorderColor="hsl(259, 100%, 65%)"
                  isRequired
                />
              </Box>
            </HStack>
            <HStack spacing="0">
              <Divider />
              <Button
                p="5"
                h="auto"
                type="submit"
                bg="hsl(259, 100%, 65%)"
                borderRadius="full"
                sx={{ aspectRatio: "1" }}
                _hover={{
                  bg: "hsl(0, 0%, 8%)",
                }}
              >
                <Image src={arrow} alt="img" maxH="3rem" />
              </Button>
            </HStack>
          </FormControl>
        </Flex>
        {/* <HStack spacing="0">
          <Divider />
          <Image
            src={arrow}
            alt="img"
            h="4rem"
            bg="hsl(259, 100%, 65%)"
            p="4"
            borderRadius="full"
            cursor="pointer"
            sx={{ aspectRatio: "1" }}
            _hover={{
              bg: "hsl(0, 0%, 8%)",
            }}
          />
        </HStack> */}
        {/* Results  */}
        <Flex direction="column" justifyContent="start" gap="1" fontSize="6xl">
          <Flex gap="1">
            <Text textStyle="result">38</Text>
            <Text textStyle="res_text">years</Text>
          </Flex>
          <Flex gap="1">
            <Text textStyle="result">3</Text>
            <Text textStyle="res_text">months</Text>
          </Flex>
          <Flex gap="1">
            <Text textStyle="result">--</Text>
            <Text textStyle="res_text">date</Text>
          </Flex>
        </Flex>
      </Stack>
    </Grid>
  );
}

export default App;
