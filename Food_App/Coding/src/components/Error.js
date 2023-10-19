import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/err_i.png";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex items-center justify-center m-10">
      
    <div className="text-center p-10">
    <img src={errorImg}></img>
      <p className="text-indigo-400 font-bold text-2xl">Page not found</p>
      <div className="m-5 border-2 border-solid inline-block rounded p-4 font-medium bg-indigo-200" >
        <Link to="home">Go Back</Link>
      </div>
    </div>
    </div>
  );
};

export default Error;
