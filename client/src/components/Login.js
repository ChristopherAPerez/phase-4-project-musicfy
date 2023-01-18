import { useState } from "react";
import Header from "./Header";
// import styled from "styled-components";
import LoginForm from "../pages/LoginForm";
import SignUpForm from "../pages/SignUpForm";
// import { Button } from "../styles";

function Login({ onLogin, user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">

      <Header user={user} setUser={setUser}/>

      {showLogin ? (
        <div>
          <LoginForm onLogin={onLogin} />
          <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div>
          <SignUpForm onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;