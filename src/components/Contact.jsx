import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="container mx-auto my-16 p-4">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Feel free to reach out to me through the following platforms:</p>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://www.linkedin.com/in/shivam-rawat-a29879194/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/linkedin.png"
            alt="LinkedIn"
            className="contact-link inline-block transition-transform transform hover:scale-110 h-8"
          />
        </a>
        <a
          href="https://github.com/ShivamRawat6397"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.png"
            alt="GitHub"
            className="contact-link inline-block transition-transform transform hover:scale-110 h-8"
          />
        </a>
        <a
          href="https://www.instagram.com/shivamrawat524/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/instagram.jpg"
            alt="Instagram"
            className="contact-link inline-block transition-transform transform hover:scale-110 h-8"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
