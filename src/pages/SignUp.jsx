import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const navigate = useNavigate();

  // Individual error state
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Email validation function
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = () => {
    // Reset errors
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    let hasError = false;

    // 1️⃣ Required fields
    if (!firstName) {
      newErrors.firstName = "First name is required";
      hasError = true;
    }
    if (!lastName) {
      newErrors.lastName = "Last name is required";
      hasError = true;
    }
    if (!email) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!isValidEmail(email)) {
      newErrors.email = "Enter a valid email address";
      hasError = true;
    }
    if (!password) {
      newErrors.password = "Password is required";
      hasError = true;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      hasError = true;
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
      hasError = true;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      hasError = true;
    }

    // 2️⃣ Check duplicate email
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (email && isValidEmail(email)) {
      const exists = users.find((u) => u.email === email);
      if (exists) {
        newErrors.email = "This email is already registered";
        hasError = true;
      }
    }

    // If there are errors, show them
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // 3️⃣ Save user
    const user = { firstName, lastName, email, password, createdAt: new Date().toISOString() };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // 4️⃣ Reset form
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

 navigate('/signin')
  };

  const isDisabled =
    !firstName || !lastName || !email || !password || !confirmPassword;

  // --- JSX ---
  return (
    <>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img src="/logo2.png" alt="Logo" className="w-28" />
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded shadow w-96">
        <h1 className="text-2xl text-blue-800 font-bold text-center mb-1">
          Create a new account
        </h1>
        <p className="text-center text-sm text-gray-500 mb-4">It’s quick and easy.</p>

        {/* Name fields */}
        <div className="flex gap-2 mb-3">
          <div className="flex flex-col w-1/2">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full p-2 border-2 rounded focus:outline-none ${
                errors.firstName ? "border-red-500" : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {errors.firstName && <span className="text-red-600 text-xs mt-1">{errors.firstName}</span>}
          </div>

          <div className="flex flex-col w-1/2">
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full p-2 border-2 rounded focus:outline-none ${
                errors.lastName ? "border-red-500" : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {errors.lastName && <span className="text-red-600 text-xs mt-1">{errors.lastName}</span>}
          </div>
        </div>

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
          {errors.email && <span className="text-red-600 text-xs mt-1">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="flex flex-col mb-3">
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border-2 rounded focus:outline-none ${
              errors.password ? "border-red-500" : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.password && <span className="text-red-600 text-xs mt-1">{errors.password}</span>}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mb-4">
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-2 border-2 rounded focus:outline-none ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.confirmPassword && (
            <span className="text-red-600 text-xs mt-1">{errors.confirmPassword}</span>
          )}
        </div>

        <p className="text-xs text-gray-500 mb-4">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
        </p>

        <button
          onClick={handleSignUp}
          disabled={isDisabled}
          className={`w-full py-2 rounded text-white font-semibold ${
            isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          Sign Up
        </button>
      </div>
    </div>
    </>
  );
}
