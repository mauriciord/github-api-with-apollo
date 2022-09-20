import React from 'react';
import { Container } from '@chakra-ui/react';

/**
 * A reusable component for handling errors in a React (sub)tree.
 */
type Props = {
  children: React.ReactNode;
};
type State = {
  error: Error | null;
};

class ErrorBoundary extends React.Component<Props, State> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }

  render() {
    const { error } = this.state;

    if (error !== null) {
      const { message, source }: any = error;

      return (
        <Container centerContent>
          <p>Error: {message}</p>
          <pre>{JSON.stringify(source, null, 2)}</pre>
          <button onClick={() => this.setState({ error: null })}>retry</button>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
