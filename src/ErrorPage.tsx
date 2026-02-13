import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as Error;
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>⚠️ Oops! Something went wrong</h1>
        <p style={{ color: "red", fontSize: "1.2rem" }}>
          {error.message || "An unexpected error occurred"}
        </p>
        <Link to="/">← Go back to Home</Link>
      </div>
    </>
  );
}

export default ErrorPage;
