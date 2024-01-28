import { DeleteIcon } from "@chakra-ui/icons";
import {
  Badge,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Comment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card m={"20px"}>
      <CardBody>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading as={"h8"} size={"lg"}>
            Jeswanth
          </Heading>
          <Tooltip
            hasArrow
            bg="red.300"
            label="This comment is offensive"
            fontSize="md"
            placement="right"
          >
            <DeleteIcon color={"red.300"} />
          </Tooltip>
        </Flex>
        <Badge ml="1" colorScheme="red">
          Offensive
        </Badge>
        <Text mt={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat
          architecto suscipit nam rerum eos doloremque, ipsum ducimus commodi
          necessitatibus magni. Aliquid illum voluptate consectetur impedit
          maiores nulla tempore accusantium quod voluptatem velit sapiente
          deleniti nihil dolorem fugiat hic dolore, qui necessitatibus veniam
          sequi aperiam aliquam. Dicta cum ab hic.
        </Text>
      </CardBody>
    </Card>
  );
};

export default Comment;
