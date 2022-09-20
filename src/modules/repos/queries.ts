import { gql } from '@apollo/client';

export const REPO_LIST_QUERY = gql`
  query GetRepositoryListQuery($searchQuery: String!, $cursor: String) {
    search(query: $searchQuery, type: REPOSITORY, first: 15, after: $cursor) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Repository {
            id
            name
            createdAt
            description
            forkCount
            stargazerCount
            url
            owner {
              login
              id
              url
            }
          }
        }
      }
    }
  }
`;
