import React, { useState, useEffect } from "react";

const ErrorBoundaryCustom = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      console.error("Error caught by Error Boundary:", error, errorInfo);
      setError(error);
      setErrorInfo(errorInfo);
      setHasError(true);
      // You can also log the error to an error reporting service
    };

    window.addEventListener("error", handleError);
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        {/* Display error details if needed */}
        {error && <p>Error: {error.toString()}</p>}
        {errorInfo && <p>{errorInfo.componentStack}</p>}
      </div>
    );
  }

  return children;
};

export default ErrorBoundaryCustom;
