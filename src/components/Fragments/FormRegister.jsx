import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormRegister() {
  return (
    <form action="" className="mt-4">
      <InputForm
        label="Full Name"
        name="full_name"
        type="text"
        placeholder="Your Name"
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@email.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="******"
      />
      <InputForm
        label="Confirm Password"
        name="confirm_password"
        type="password"
        placeholder="******"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
}
