import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sign Up page component for new user registration
const SignUp = () => {
  // State for form fields
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      // For demo, navigate to account settings with name and email
      navigate("/account-settings", { state: { email: form.email, name: form.name } });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="w-full max-w-md p-6" onSubmit={handleSubmit}>
        {/* Page title */}
        <h2 className="text-2xl font-bold mb-8 text-left leading-tight">
          Create your
          <br />
          PopX account
        </h2>
        {/* Full Name input */}
        <fieldset className="mb-4 border rounded px-3 py-2 relative">
          <legend className="px-1 text-[#6C25FF] text-sm font-medium ml-2">
            Full Name
            <span className="text-[#6C25FF]">*</span>
          </legend>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border-none outline-none bg-transparent placeholder-gray-400"
            placeholder="Enter your full name"
          />
        </fieldset>
        {/* Phone input */}
        <fieldset className="mb-4 border rounded px-3 py-2 relative">
          <legend className="px-1 text-[#6C25FF] text-sm font-medium ml-2">Phone Number</legend>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border-none outline-none bg-transparent placeholder-gray-400"
            placeholder="Enter your phone number"
          />
        </fieldset>
        {/* Email input */}
        <fieldset className="mb-4 border rounded px-3 py-2 relative">
          <legend className="px-1 text-[#6C25FF] text-sm font-medium ml-2">Email Address<span className="text-[#6C25FF]">*</span></legend>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-none outline-none bg-transparent placeholder-gray-400"
            placeholder="Enter your email address"
          />
        </fieldset>
        {/* Password input */}
        <fieldset className="mb-4 border rounded px-3 py-2 relative">
          <legend className="px-1 text-[#6C25FF] text-sm font-medium ml-2">Password</legend>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border-none outline-none bg-transparent placeholder-gray-400"
            placeholder="Enter a password"
          />
        </fieldset>
        {/* Company input */}
        <fieldset className="mb-4 border rounded px-3 py-2 relative">
          <legend className="px-1 text-[#6C25FF] text-sm font-medium ml-2">Company Name</legend>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full border-none outline-none bg-transparent placeholder-gray-400"
            placeholder="Enter your company name"
          />
        </fieldset>
        {/* Agency radio buttons */}
        <div className="mb-6">
          <span className="text-[#6C25FF] text-sm font-medium">Are you an agency?</span>
          <div className="flex gap-4 mt-2">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.agency === "yes"}
                onChange={handleChange}
                className="p-2 mr-2 cursor-pointer"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.agency === "no"}
                onChange={handleChange}
                className="p-2 mr-2 cursor-pointer"
              />
              No
            </label>
          </div>
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className={`w-full bg-[#6C25FF] text-white py-2 px-4 rounded active:scale-95 cursor-pointer transition ${(form.name.trim() && form.email.trim()) ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!(form.name.trim() && form.email.trim())}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
