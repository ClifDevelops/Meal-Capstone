import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './AuthForms.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const demoLogin = async () => {
    setEmail('Clif@Clif.com')
    setPassword('Clif')
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }

  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/homepage" />;
  }

  return (
    <div className="auth-form">
    <form  onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          className="auth-form-input"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          className="auth-form-input"
        />
        <div>
        <button type="submit" className="auth-form-button">
          Login
        </button>
        </div>
        <div>
        <button onClick={demoLogin} className="demo-user-button">
          {" "}
          Or try as a Demo User!
        </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
