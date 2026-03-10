import { Link } from "react-router";
import FormLogin from "../Fragments/FormLogin";

export default function AuthLayouts({ title, children, type }) {
  return (
    <div className="flex justify-center items-center min-h-screen px-10">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please enter your details
        </p>
        {children}
        {/* Kondisional rendering #1 */}
        <Navigation type={type} />
        
        {/* Kondisional rendering #2 */}
        {/* <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p> */}
      </div>
    </div>
  );
}

function Navigation({ type }) {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
}
