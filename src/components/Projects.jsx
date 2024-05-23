import React from "react";

const projects = [
  {
    title: "BlogHub",
    description:
      "BlogHub is a modern and scalable blogging platform built with a robust backend, a shared common package for input validation, and an interactive frontend. This project leverages various technologies to deliver a seamless user experience for blogging.",
    link: "https://github.com/ShivamRawat6397/BlogHub",
    image: "/BlogHub.png",
  },
  {
    title: "CashPal",
    description:
      "CashPal is a basic clone of the Paytm application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to sign up, sign in, view their dashboard, and send money to other users.",
    link: "https://github.com/ShivamRawat6397/CashPal",
    image: "/CashPal.png",
  },
  {
    title: "Youtube-Clone",
    description:
      "This project is a YouTube clone built using React.js. It utilizes the YouTube Data API to fetch videos and display them on the website. The project includes features such as browsing videos, searching for videos, uploading videos, and more.",
    link: "https://github.com/ShivamRawat6397/Youtube-Clone",
    image: "/YoutubeClone.png",
  },
  {
    title: "PassGuard",
    description:
      "PassGuard is a secure password manager designed to keep your sensitive information safe and easily accessible. Built with React for the frontend and Express.js for the backend, PassGuard offers a user-friendly interface for managing your passwords.",
    link: "https://github.com/ShivamRawat6397/PassGuard",
    image: "/PassGuard.png",
  },
  {
    title: "Multiple-Disease-Prediction",
    description:
      "This project aims to predict multiple diseases using machine learning algorithms and Streamlit, a Python library for creating web applications. The system allows users to input health parameters such as pulse rate, cholesterol, blood pressure, and heart rate, and predicts diseases such as diabetes, heart disease, and Parkinson’s disease. The model utilizes logistic regression and SVM classifiers for prediction.",
    link: "https://github.com/ShivamRawat6397/Multiple-Disease-Prediction-",
    image: "/MultipleDisease.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto my-16 p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-4 flex flex-col transform transition-transform hover:scale-110"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="flex-grow">{project.description}</p>
            <a href={project.link} className="text-blue-500 mt-2 self-end">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
