import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res);
      }
    });
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin} className="mt-4">
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="John Doe"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="******"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
}
