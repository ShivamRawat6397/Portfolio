import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto my-16 p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/4 lg:w-1/6">
          <img
            src="/me.jpg"
            alt="My Photo"
            className="rounded-full shadow-md w-32 md:w-40 lg:w-48"
          />
        </div>
        <div className="md:ml-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="mb-2">
            Hi there! 👋 I'm Shivam Rawat 🌟, a dedicated and innovative web
            developer passionate about crafting immersive digital experiences.
            With a Master's in Computer Applications from Graphic Era Hill
            University and a Bachelor's from the same prestigious institution,
            I've honed my skills to transform ideas into reality.
          </p>
          <p>
            My journey encompasses mastering cloud computing with AWS during my
            LTIMindtree Ignite internship and delving into data structures with
            Unacademy's Java DS & Algo course. From crafting seamless UIs with
            React.js to architecting robust backend systems with Node.js and
            Express.js, I thrive on turning visions into functional solutions.
            Let's connect and embark on this exhilarating journey together! 🚀
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <p>
          For a detailed view of my educational background, work experience, and
          skills, please take a look at my resume.
        </p>
        <a
          href="/Shivam_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4"
        >
          <img
            src="/Resume.png"
            alt="Resume"
            className="rounded shadow-md transform transition-transform hover:scale-110 w-32 md:w-36 lg:w-40 bg-transparent"
          />
        </a>
      </div>
    </section>
  );
};

export default About;
