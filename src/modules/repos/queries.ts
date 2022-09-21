import { gql } from '@apollo/client';

export const REPO_LIST_QUERY = gql`
  query GetRepositoryListQuery(
    $searchQuery: String!
    $cursor: String
    $first: Int!
  ) {
    search(
      query: $searchQuery
      type: REPOSITORY
      first: $first
      after: $cursor
    ) {
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
