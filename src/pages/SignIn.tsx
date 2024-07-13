import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signIn } from "../features/auth/authThunks";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signIn({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Failed to sign in:", err);
      });
  };

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form onSubmit={handleSubmit} className="sign-in-form" autoComplete="off">
        <h2 className="sign-in-form__title">Sign In</h2>
        <label className="input">
          <span className="input__heading">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-test-id="auth-email"
            name="email"
            type="email"
            required
          />
        </label>
        <label className="input">
          <span className="input__heading">Password</span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-test-id="auth-password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </label>
        <button data-test-id="auth-submit" className="button" type="submit">
          Sign In
        </button>
      </form>
      <span>
        Don&apos;t have an account?
        <Link to="/sign-up" data-test-id="auth-sign-up-link" className="sign-in-form__link">
          Sign Up
        </Link>
      </span>
    </main>
  );
};

export default SignIn;
