import { useState, useEffect } from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a>Cat Questions</a>
      <a>Volunteer</a>
      <a>About</a>
      <a>Search</a>
      <button>Cat Assistance</button>
    </nav>
  );
}

export default Navbar;
