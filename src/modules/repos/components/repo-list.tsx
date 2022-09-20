import React from 'react';
import { useQuery } from '@apollo/client';
import { Alert, AlertIcon, VStack } from '@chakra-ui/react';
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
    },
  });

  if (error && !data)
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  if (loading) return <p>Loading...</p>;

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
        {repos?.map(({ node }: NodeProps) => {
          return <RepoCard key={node.id} repo={node} />;
        })}
        <Button
          colorScheme="facebook"
          disabled={!hasNextPage}
          onClick={fetchMoreRepos}
        >
          Load more
        </Button>
      </VStack>
    </>
  );
};

RepoList.propTypes = {};

export default RepoList;
