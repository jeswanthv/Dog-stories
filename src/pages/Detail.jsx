"use client";

import { AddIcon, ChatIcon } from "@chakra-ui/icons";
import {
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Comment from "../components/Comment";
import CreateModal from "../components/CreateModal";

const Detail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={"3xl"} p="4">
      <Heading as="h2" marginTop="5">
        Latest article
      </Heading>

      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">What we write about</Heading>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Heading mt={"20"} as="h2">
          What we write about
        </Heading>

        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Heading mt={"20"} as="h2">
          What we write about
        </Heading>

        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack>
      <Divider marginTop="40px" />
      <Flex marginY={5} justifyContent={"space-between"} alignItems={"center"}>
        <Heading as="h6" size={"xl"}>
          Comments <ChatIcon h={"20px"} />
        </Heading>
        <AddIcon onClick={onOpen} />
        <CreateModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>
      <Comment />
    </Container>
  );
};

export default Detail;
