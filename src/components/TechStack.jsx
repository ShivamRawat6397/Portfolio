import React from "react";

const TechStack = () => {
  return (
    <section id="tech-stack" className="container mx-auto my-16 p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Technical Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="bg-white shadow-md rounded p-6 transform transition-transform hover:scale-105 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4">Development</h3>
            <p className="text-gray-700">Frontend(MERN and NEXT.JS)</p>
            <p className="text-gray-700">Backend(PostgreSQL and MongoDB)</p>
          </div>
          <img src="/web.png" alt="weblogo" className="w-12 md:w-16" />
        </div>
        <div className="bg-white shadow-md rounded p-6 transform transition-transform hover:scale-105 flex justify-between items-center relative">
          <div>
            <h3 className="text-lg font-semibold mb-4">Skills</h3>
            <ul className="pl-6 text-gray-700">
              <li>C++</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>PostgreSQL</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <img
            src="/Skills.png"
            alt="Skills"
            className="w-12 md:w-16 absolute top-0 right-0"
          />
        </div>
        <div className="bg-white shadow-md rounded p-6 transform transition-transform hover:scale-105 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4">Others</h3>
            <ul className="pl-6 text-gray-700">
              <li>SQL</li>
              <li>NoSQL</li>
              <li>Prisma</li>
              <li>Hono</li>
              <li>NPM</li>
              <li>Adobe XD</li>
              <li>Terraform</li>
              <li>AWS services</li>
            </ul>
          </div>
          <img src="/other.png" alt="Other" className="w-12 md:w-16" />
        </div>
        <div className="bg-white shadow-md rounded p-6 transform transition-transform hover:scale-105 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4">Core Subjects</h3>
            <ul className="pl-6 text-gray-700">
              <li>Data Structures</li>
              <li>Object-Oriented Programming</li>
              <li>Operating System</li>
              <li>Database Management System</li>
              <li>Computer Networks</li>
            </ul>
          </div>
          <img src="/subject.jpg" alt="core" className="w-12 md:w-16" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
