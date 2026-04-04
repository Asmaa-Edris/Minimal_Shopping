import { useState } from "react";
import { loginUser } from "../api/productApi";

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
    <div >
      <h1>Hello Again!</h1>
      <p>Welcome Back You've Been Missed!</p>
      <p>To login enter Your email address and password</p>

      <form onSubmit={handleLogin}>
        <div >
          <label>Email Address</label>
          <br />
          <input
            type="text"
            placeholder="example@mail.com"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div >
          <input 
            type="checkbox" 
            id="remember" 
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember"> Remember me</label>
        </div>

      
        <button 
          type="submit" 
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;