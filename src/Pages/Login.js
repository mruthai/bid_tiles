import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  console.log("Loaded password:", process.env.REACT_APP_SECRET_PASSWORD); 

  const handleLogin = () => {
    if (inputPassword === process.env.REACT_APP_SECRET_PASSWORD) {
      localStorage.setItem("authenticated", "true");
      navigate("/Tiles");
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center text-white bg-black p-5 vh-100">
      <h2>Login</h2>
      <div className="input-group w-25">
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>

    </div>
  );
};

export default Login;
