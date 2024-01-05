import React from "react";

class ErrorBoundaryCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="p-8 bg-black h-screen text-white">
          <h1 className="text-2xl font-bold">Error</h1>
          (ErrorBoundaryCustom)
          <h1 className="my-1 py-1">Something went wrong.</h1>
          <pre className="my-2 py-1 italic whitespace-pre-wrap">
            - "Don't be sad, Take a break and have a cup of coffee ☕! We will
            fix it soon 😉"
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryCustom;
