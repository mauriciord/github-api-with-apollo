import React from 'react';
import { Box, Stack, Link } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { RepositoryProps } from '../types';

interface Props {
  repo: RepositoryProps;
}

const RepoCard = ({
  repo: { name, description, stargazerCount, forkCount, url },
}: Props) => {
  return (
    <Box
      boxShadow="base"
      w={'100%'}
      maxW="2xl"
      borderWidth="1px"
      borderRadius="lg"
      p="6"
    >
      <Stack spacing={2}>
        <Text fontSize="lg">
          <Text as="b">{name}</Text> - 🌟 {stargazerCount} - 🍴 {forkCount}
        </Text>
        <Text fontSize="md" color="gray">
          {description}
        </Text>
        <Link href={url} isExternal>
          {url} <ExternalLinkIcon mx="2px" />
        </Link>
      </Stack>
    </Box>
  );
};

export default RepoCard;
