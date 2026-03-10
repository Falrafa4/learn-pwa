import { Link } from "react-router";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login Page";
  });
  
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
}
