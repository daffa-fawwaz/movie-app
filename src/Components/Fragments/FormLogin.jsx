import { useEffect, useRef, useState } from "react";
import InputLabel from "../Elements/Input";
import Button from "../Elements/Buttons/Button";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [userLogin, setUserLogin] = useState(() => {
    const savedData = localStorage.getItem("users");
    return savedData ? JSON.parse(savedData) : [];
  });
  const info = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.email.value;
    const password = e.target.password.value;

    const foundUser = userLogin.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("login", username);
      window.location.href = "/home";
    } else {
      e.preventDefault();
      info.current.classList.remove("hidden");
      return false;
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <InputLabel type="email" htmlFor="email" name="email" id="email">
          Email
        </InputLabel>
        <InputLabel
          type="password"
          htmlFor="password"
          name="password"
          id="password"
        >
          Password
        </InputLabel>
        <p ref={info} className="hidden">
          Username atau Passwor salah
        </p>
        <div className="mt-5">
          <Button>Login</Button>
        </div>
        <p className="mt-1">
          Don't Have Account?{" "}
          <Link to="/register">
            <span className="text-blue-500">Register</span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default FormLogin;
