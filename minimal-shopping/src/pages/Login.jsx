import { useState } from "react";
import { loginUser } from "../api/productApi";
import logo from "../assets/images/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser({ username, password });
      alert(`Welcome back, ${userData.firstName}!`);
    } catch (err) {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h1>Hello Again!</h1>
          <p className="welcome-subtitle">Welcome Back You've Been Missed!</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <p className="login-instruction">To login enter Your email address and password</p>

          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FaEye
                  className="input-icon"
                  size={18}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  className="input-icon"
                  size={18}
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>

          <div className="remember-group">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className="login-btn-wrapper">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;