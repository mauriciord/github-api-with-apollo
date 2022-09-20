import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import { client as apolloClient } from './services/apollo';
import { SearchProvider } from './modules/search';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <SearchProvider>{children}</SearchProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default Providers;
