import React from 'react';
import { Flex } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Flex direction="column" justify="center" gap={2} p={6}>
      {children}
    </Flex>
  );
};

export default Layout;
