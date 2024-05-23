import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-black text-white">
      <p className="text-sm">
        &copy; Shivam Rawat {new Date().getFullYear()} ❤️
      </p>
    </footer>
  );
};

export default Footer;
