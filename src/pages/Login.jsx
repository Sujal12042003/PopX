import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Login page component for user authentication
const Login = () => {
  // State for email and password fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Button is active only if both fields are filled
  const isActive = email.trim() && password.trim();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // For demo, use email as both email and username
      navigate("/account-settings", { state: { email, name: email.split("@")[0] } });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="p-8 w-full max-w-md" onSubmit={handleSubmit}>
        {/* Page title and description */}
        <h2 className="text-3xl font-bold mb-2 text-left">Signin to your PopX account</h2>
        <p className="mb-6 text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        {/* Email input field */}
        <fieldset className="mb-4 border rounded px-3 py-2 relative">
          <legend className="px-1 text-[#6C25FF] text-sm font-medium ml-2">Email Address</legend>
          <input
            type="email"
            className="w-full border-none outline-none bg-transparent placeholder-gray-400"
            placeholder="Enter email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            id="email"
          />
        </fieldset>
        {/* Password input field */}
        <fieldset className="mb-6 border rounded px-3 py-2 relative">
          <legend className="px-1 text-[#6C25FF] text-sm font-medium ml-2">Password</legend>
          <input
            type="password"
            className="w-full border-none outline-none bg-transparent placeholder-gray-400"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="password"
          />
        </fieldset>
        {/* Submit button */}
        <button
          type="submit"
          className={`w-full bg-[#6C25FF] text-white py-2 px-4 rounded ${!isActive ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          disabled={!isActive}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
