import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { RetryLink } from '@apollo/client/link/retry';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const retryLink = new RetryLink({
  delay: {
    initial: 2000,
    max: 2000,
    jitter: false,
  },
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL || 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_API_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

export const client = new ApolloClient({
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    },
  },
  link: from([retryLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

export default persistCache({
  cache: client.cache,
  storage: new LocalStorageWrapper(window.localStorage),
});
