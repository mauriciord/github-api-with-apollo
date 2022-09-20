import React from 'react';
import { Heading } from '@chakra-ui/react';

import RepoList from './repo-list';
import { SearchField } from '../../search';
import { Layout } from '../../../shared/components';

const RepoPage = () => {
  return (
    <Layout>
      <Heading as="h2" size="2xl">
        Repository Search
      </Heading>
      <SearchField />
      <RepoList />
    </Layout>
  );
};

export default RepoPage;
