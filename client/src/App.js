import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  Heading,
  Text,
  Flex,
  VStack,
  Icon,
  Link,
  Spacer,
} from "@chakra-ui/react";
// import { FaStar } from "react-icons/fa";

function App() {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleValidation = async () => {
    try {
      const response = await axios.post("http://localhost:3001/validate", {
        creditCardNumber,
      });
      setIsValid(response.data.isValid);
    } catch (error) {
      console.error(error);
    }
  };

  const scrollToValidation = () => {
    // Scroll to the validation section when the "Get Started" button is clicked
    document
      .getElementById("validation-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const getStartedStyle = {
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('https://cdn.dribbble.com/users/3971299/screenshots/15298473/media/2373a8c3535195c95f11b8c1dc6c8782.png?resize=1000x750&vertical=center')`, // Path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Set a minimum height to fill the viewport
    display: "flex",
    flexDirection: "column",
    alignItems: "self-start",
    justifyContent: "center",
    padding: "37px",
  };

  const backgroundColor = "#462ee2";

  return (
    <ChakraProvider>
      {/* Landing Section with "Get Started" Button */}
      <Box id="get-started" style={getStartedStyle}>
        <Heading as="h1" fontSize="50px">
          Welcome to Our App
        </Heading>
        <Text mt={2} marginBottom={8} fontSize="20px" color="#b1b1b1">
          Your trusted credit card validation service
        </Text>
        <Button
          background={backgroundColor}
          color={"white"}
          onClick={scrollToValidation}
          borderRadius={"45px"}
        >
          Get Started
        </Button>
      </Box>

      {/* Credit Card Validation Section */}
      <Box id="validation-section" height={"100vh"} paddingTop={"55%"} p={4}>
        <Heading as="h2" size="lg">
          Credit Card Validation
        </Heading>
        <Flex direction="column" mt={4}>
          <Input
            type="number"
            placeholder="Enter credit card number"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
          />
          <Button
            mt={2}
            colorScheme="teal"
            onClick={
              creditCardNumber ? handleValidation : () => setIsValid(false)
            }
          >
            Validate
          </Button>
          {isValid !== null && (
            <Text mt={2} color={isValid ? "green.500" : "red.500"}>
              {isValid
                ? "Valid credit card number"
                : "Invalid credit card number"}
            </Text>
          )}
        </Flex>
      </Box>

      <Box
        position="fixed"
        bottom="0"
        right="0"
        // width="100%"
        // bg="teal.500"
        color="white"
        padding="10px"
        display="grid"
        // gridTemplateColumns="1fr 1fr"
        alignItems="center"
        justifyContent="center"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "5px",
            backgroundColor: "#462ee2",
            borderRadius: "7px",
            padding: "10px",
          }}
        >
          <Text textAlign="center">GitHub</Text>
        </a>
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text textAlign="center">Personal Website</Text>
        </a>
      </Box>
    </ChakraProvider>
  );
}

export default App;
