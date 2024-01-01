import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>Something went wrong.</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const ErrorBoundaryLibrary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state or perform additional actions
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryLibrary;
