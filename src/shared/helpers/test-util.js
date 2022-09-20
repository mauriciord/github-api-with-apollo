/* eslint-disable import/export */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';

import { ChakraProvider } from '@chakra-ui/react';
import { SearchProvider } from '../../modules/search';

function render(ui, options) {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => (
    <ChakraProvider>
      <SearchProvider>{children}</SearchProvider>
    </ChakraProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
export { render };
