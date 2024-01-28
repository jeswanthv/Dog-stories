import {
  Box,
  Container,
  HStack,
  Heading,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BlogTags = (props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const Card = () => {
  return (
    <Link to={"/3"}>
      <Container maxW={"3xl"} p="12">
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">
              <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
                Blog article title
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </Text>

            <Text
              style={{ display: "flex", alignItems: "center" }}
              color="gray.500"
            >
              Dec 9, 2023{" "}
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  margin: "0 10px",
                  backgroundColor: "#FFF",
                  borderRadius: "50%",
                }}
              ></div>
              Jeswanth
            </Text>
          </Box>
        </Box>
      </Container>
    </Link>
  );
};

export default Card;
