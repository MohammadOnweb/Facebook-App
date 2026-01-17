import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
 const navigate = useNavigate();

  const handleSignIn = () => {

    const newErrors = { email: "", password: "" };
    let hasError = false;

    //  Required fields
    if (!email) {
      newErrors.email = "Email is required";
      hasError = true;
    }
    if (!password) {
      newErrors.password = "Password is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    //  Check saved users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      setErrors({ email: "Email not found", password: "" });
      return;
    }

    if (user.password !== password) {
      setErrors({ email: "", password: "Incorrect password" });
      return;
    }



    setEmail("");
    setPassword("");
    setErrors({ email: "", password: "" });
    navigate('/mainpage')
  };

  const isDisabled = !email || !password;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img src="/logo2.png" alt="Logo" className="w-28" />
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded shadow w-96">
        <h1 className="text-2xl text-blue-800 font-bold text-center mb-1">
          Sign In
        </h1>

        {/* Email */}
        <div className="flex flex-col mb-3">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border-2 rounded focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.email && (
            <span className="text-red-600 text-xs mt-1">{errors.email}</span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border-2 rounded focus:outline-none ${
              errors.password ? "border-red-500" : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.password && (
            <span className="text-red-600 text-xs mt-1">{errors.password}</span>
          )}
        </div>

        <button
          onClick={handleSignIn}
          disabled={isDisabled}
          className={`w-full py-2 rounded text-white font-semibold ${
            isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
