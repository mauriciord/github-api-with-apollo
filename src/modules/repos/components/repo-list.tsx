import React from 'react';
import { useQuery } from '@apollo/client';
import { Alert, AlertIcon, VStack, Heading, Skeleton } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import { RepositoryProps } from '../types';
import { REPO_LIST_QUERY } from '../queries';
import RepoCard from './repo-card';
import { useSearch } from '../../search';

interface NodeProps {
  node: RepositoryProps;
}

interface Props {
  list?: RepositoryProps[];
}

const RepoList = ({ list }: Props) => {
  const { query } = useSearch();
  const searchQuery = `${query} NOT freeCodeCamp NOT free-programming-books-zh_CN sort:stars-desc`;
  const { data, loading, error, fetchMore } = useQuery(REPO_LIST_QUERY, {
    errorPolicy: 'all',
    variables: {
      searchQuery,
      first: 5,
    },
  });

  if (error && !data)
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  if (loading)
    return (
      <VStack align="center" justify="center" justifyContent="center">
        <Skeleton height="60px" />
        <Skeleton height="60px" />
        <Skeleton height="60px" />
      </VStack>
    );

  const { search } = data ?? [];
  const {
    edges,
    pageInfo: { endCursor, hasNextPage },
  } = search;

  const repos =
    list && list.length > 0
      ? list
      : edges.filter(({ node }: NodeProps) => !!node);
  const fetchMoreRepos = () => {
    return fetchMore({
      query: REPO_LIST_QUERY,
      variables: {
        searchQuery,
        cursor: endCursor,
        first: 5,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        if (fetchMoreResult?.search?.edges)
          fetchMoreResult.search.edges = [
            ...(previousResult.search?.edges || []),
            ...(fetchMoreResult.search?.edges || []),
          ];

        return fetchMoreResult;
      },
    });
  };

  return (
    <>
      <VStack align="center" justify="center" justifyContent="center">
        {query.length > 1 &&
          repos?.map(({ node }: NodeProps) => {
            return <RepoCard key={node.id} repo={node} />;
          })}
        {query.length > 1 && (
          <Button
            colorScheme="facebook"
            disabled={!hasNextPage}
            onClick={fetchMoreRepos}
          >
            Load more
          </Button>
        )}
        {query.length <= 1 && (
          <Heading as="h2" size="xl">
            Type something to start searching...
          </Heading>
        )}
      </VStack>
    </>
  );
};

RepoList.propTypes = {};

export default RepoList;
