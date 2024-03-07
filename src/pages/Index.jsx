import React from "react";
import { Box, Button, Heading, Input, Stack, Textarea, useToast, VStack, Text } from "@chakra-ui/react";
import { FaQuestionCircle, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic here
    toast({
      title: "質問が投稿されました。",
      description: "回答をお待ちください。",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="xl">
        Q&A 掲示板
      </Heading>
      <Text>質問を投稿して、コミュニティから回答を得ましょう。</Text>
      <Box as="form" onSubmit={handleSubmit} w="100%">
        <Stack spacing={3}>
          <Input placeholder="件名" />
          <Textarea placeholder="質問の詳細" />
          <Button leftIcon={<FaPaperPlane />} colorScheme="blue" type="submit">
            投稿する
          </Button>
        </Stack>
      </Box>
      <Box w="100%">
        <Heading as="h2" size="md">
          最新の質問
        </Heading>
        {/* Map through questions and display them here */}
      </Box>
    </VStack>
  );
};

export default Index;
