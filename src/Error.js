import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <div>
        <h1>Oops!</h1>
        <div className="errisfound">
          {err.status} - PAGE IS {err.statusText}
        </div>
        <Link to={"/"}>
          {" "}
          <button className="err-btn">GO TO HOME PAGE</button>
        </Link>
      </div>
    </div>
  );
};
export default Error;
