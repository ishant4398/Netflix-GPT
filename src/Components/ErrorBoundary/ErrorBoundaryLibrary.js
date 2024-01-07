import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="p-8 bg-black h-screen text-white">
      <h1 className="text-2xl font-bold">Error</h1>
      <h1 className="my-1 py-1">Something went wrong.</h1>
      {/* <p className="my-1 py-1">{error.message}</p> */}
      <pre className="my-2 py-1 italic whitespace-pre-wrap">
        - "Don't be sad, Take a break and have a cup of coffee ☕! We will fix
        it soon 😉"
      </pre>
      <button
        className="px-3 my-4 w-32 h-10 bg-white text-black rounded-md hover:bg-opacity-80 font-semibold"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
};

// Error logging function
const logErrorToService = (error, info) => {
  console.error("Caught an error:", error, info);
};

const ErrorBoundaryLibrary = ({ children }) => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        navigate("/browse");
      }}
      onError={logErrorToService}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryLibrary;
