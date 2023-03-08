import LoginBackground from "./components/LoginBackground";
import LoginForm from "./components/LoginForm";
import LoginHeader from "./components/LoginHeader";

export default function Login() {
  return (
    <LoginBackground>
      <LoginHeader />
      <LoginForm />
    </LoginBackground>
  );
}
