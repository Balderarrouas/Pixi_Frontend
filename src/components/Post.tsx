import { Box, Img } from "@chakra-ui/react";


interface PostProps {
    title: string;
    content: string;
    author: string;
  }



function Post({ title, content, author }: PostProps) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" mb="4" backgroundColor='black'>
      <Box as="h2" fontSize="xl" fontWeight="semibold" mb="2">{title}</Box>
      <Box>
        <Img src={content} />
      </Box>
      <Box mt="2" fontStyle="italic">By {author}</Box>
    </Box>
  );
}

export default Post;