import React from "react";
import { useLocation } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

// AccountSettings page displays user info and allows profile picture update
const AccountSettings = () => {
  // Get user info from navigation state
  const location = useLocation();
  const { email = "", name = "" } = location.state || {};
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-2xl p-4 sm:p-10">
        {/* Page title */}
        <h2 className="text-2xl font-bold mb-4 text-left">Account Settings</h2>
        <hr className="mb-8 border-black" />
        {/* Profile picture and user info */}
        <div className="flex items-center mb-8">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-0 sm:mr-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow"
            />
            {/* Camera icon for uploading new profile picture */}
            <label htmlFor="profile-pic-upload" className="absolute bottom-2 right-2 bg-[#6C25FF] rounded-full p-2 cursor-pointer flex items-center justify-center shadow-lg">
              <FaCamera className="text-white text-base sm:text-lg" />
              <input id="profile-pic-upload" type="file" accept="image/*" className="hidden" />
            </label>
          </div>
          <div className="text-center sm:text-left">
            {/* Display user name and email */}
            <div className="text-lg sm:text-2xl font-bold text-black mb-1">{name || "Marry Doe"}</div>
            <div className="text-base sm:text-lg text-gray-500 mb-2">{email || "Marry@Gmail.Com"}</div>
          </div>
        </div>
        {/* Description section */}
        <div className="mb-8">
          <p className="text-base sm:text-md font-semibold text-black mb-2">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        <hr className="border-dotted border-gray-400 mb-8" />
      </div>
    </div>
  );
};

export default AccountSettings;
