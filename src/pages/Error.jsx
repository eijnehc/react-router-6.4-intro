import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main id="error-conent">
        <h1>{error.message}</h1>
      </main>
    </>
  );
}

export default ErrorPage;
