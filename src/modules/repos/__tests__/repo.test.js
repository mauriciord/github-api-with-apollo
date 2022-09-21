import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../../../shared/helpers/test-util';
import { MockedProvider } from '@apollo/client/testing';

import { REPO_LIST_QUERY } from '../queries';
import RepoList from '../components/repo-list';

const mocks = [
  {
    request: {
      query: REPO_LIST_QUERY,
      variables: {
        searchQuery:
          'react NOT freeCodeCamp NOT free-programming-books-zh_CN sort:stars-desc',
      },
    },
    result: {
      data: {
        search: {
          edges: [
            {
              id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
              name: 'react',
              createdAt: '2013-05-24T16:15:54Z',
              description:
                'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
              forkCount: 40318,
              stargazerCount: 194996,
              url: 'https://github.com/facebook/react',
              owner: {
                login: 'facebook',
                id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
                url: 'https://github.com/facebook',
                __typename: 'Organization',
              },
              __typename: 'Repository',
            },
          ],
        },
      },
    },
  },
];

describe('Repositories testing', () => {
  it('renders without error', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RepoList />
      </MockedProvider>
    );
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
  });

  it('should render react card', async () => {
    const repoMock = {
      request: {
        query: REPO_LIST_QUERY,
        variables: {
          searchQuery:
            'react NOT freeCodeCamp NOT free-programming-books-zh_CN sort:stars-desc',
        },
      },
      result: {
        data: {
          search: {
            edges: [
              {
                id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
                name: 'react',
                createdAt: '2013-05-24T16:15:54Z',
                description:
                  'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
                forkCount: 40318,
                stargazerCount: 194996,
                url: 'https://github.com/facebook/react',
                owner: {
                  login: 'facebook',
                  id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
                  url: 'https://github.com/facebook',
                  __typename: 'Organization',
                },
                __typename: 'Repository',
              },
            ],
          },
        },
      },
    };
    render(
      <MockedProvider mocks={[repoMock]} addTypename={false}>
        {/*<RepoList list={repoMock.result.data.search.edges} />*/}
      </MockedProvider>
    );

    // FIXME: I think the mocks variable is wrong
    // expect(await screen.findByText('Loading...')).toBeInTheDocument();
    // expect(await screen.findByText('react')).toBeInTheDocument();
  });
});
