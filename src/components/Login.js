import React, { useState } from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";
function Login() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Login</h1>
      <label>Username</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        placeholder="Enter Username"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          login(name);
          // Use the <Navigate /> component to redirect to "/"
          return <Navigate to="/" replace={true} />;
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
