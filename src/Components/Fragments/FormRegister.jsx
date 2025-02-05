import InputLabel from "../Elements/Input";
import Button from "../Elements/Buttons/Button";
import { useDispatch } from "react-redux";
import { addToUsers } from "../../Redux/Slices/usersSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState(() => {
    const savedData = localStorage.getItem("users");
    return savedData ? JSON.parse(savedData) : [];
  });

  const handleAddUsers = (e) => {
    e.preventDefault();
    const username = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      setUsers([
        ...users,
        {
          user: username,
        },
      ]);
      dispatch(
        addToUsers({
          id: users.length,
          username: username,
          password: password,
        })
      );
    } else {
      return false;
    }
  };

  return (
    <>
      <form onSubmit={handleAddUsers}>
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
        <InputLabel
          type="password"
          htmlFor="confirm-password"
          name="confirmPassword"
          id="confirm-password"
        >
          Confirm Password
        </InputLabel>
        <div className="mt-5">
          <Button>Register</Button>
        </div>
        <p className="mt-1">
          Have Account?{" "}
          <Link to="/login">
            <span className="text-blue-500">Login</span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default FormRegister;
