import React, { ChangeEventHandler } from 'react';
import { Input } from '@chakra-ui/react';
import { useSearch } from '../hooks/use-search';

const SearchField = () => {
  const { query, setQuery } = useSearch();
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Input
      placeholder="Enter your term here..."
      size="md"
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchField;
