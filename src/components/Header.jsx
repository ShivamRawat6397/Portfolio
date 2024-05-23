import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Shivam Rawat</h1>
        <div>
          <a href="#about" className="ml-4">
            About
          </a>
          <a href="#projects" className="ml-4">
            Projects
          </a>
          <a href="#contact" className="ml-4">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
