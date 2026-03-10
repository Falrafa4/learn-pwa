import { Link } from "react-router";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { useEffect } from "react";

export default function RegisterPage() {
  useEffect(() => {
    document.title = "Register Page";
  });

  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
}
