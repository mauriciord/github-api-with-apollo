import React, { createContext, useContext, useState } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface ContextProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchContext = createContext<ContextProps | undefined>(undefined);

const SearchProvider: React.FC<ProviderProps> = ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
}

export { useSearch, SearchProvider };
