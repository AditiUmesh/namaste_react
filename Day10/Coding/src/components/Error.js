import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>The restaurant you are looking for doesn't exist</h1>
      <h2>{error.status}</h2>
      <h2>{error.statusText}</h2>
    </div>
  );
};

export default Error;
