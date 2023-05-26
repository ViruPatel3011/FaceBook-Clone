import React, { useState } from "react";

export default function LogoutDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUsernameClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div>
      <span
        onClick={handleUsernameClick}
        style={{ cursor: "pointer", pointerEvents: "auto" }}>
        Viral Patel
      </span>
      {showDropdown && (
        <ul className="dropdown-menu">
          <li onClick={handleLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
}
