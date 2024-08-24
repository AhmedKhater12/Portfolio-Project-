import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 bg-gray-200 "
    >
      <div className="flex flex-col items-center transition-transform transform hover:scale-105  duration-700">
        <Image
          src="/mee.jpeg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-lg object-cover shadow-lg"
        />
        <div className="mt-4 text-center">
          <h2 className="font-bold">Name: Ahmed Khater</h2>
          <p>Profile : Full-Stack Developer</p>
          <p>
            Email :{" "}
            <a href="mailto:ahmedkhater921@gmail.com" className="text-blue-500">
              ahmedkhater921@gmail.com
            </a>
          </p>
          <p>Phone : +201091090760</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 inline-block">
          About Me
        </h3>
        <p className="text-gray-700">
          My Name is Ahmed Khater. I am 22 years old. From Sharkia Governorate,
          the City of Awlad Saqr. I study at the Faculty of Computing and
          Artificial Intelligence, Cairo University, Fourth year. Department of
          Computing and Bioinformatics. I started in the web field from 2022. I
          chose this field for the love of it, and I see Myself in it ,not for
          the purpose of money.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <span className="block text-sm font-medium text-gray-700">
              HTML
            </span>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full
                "
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">
              CSS3
            </span>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">
              JavaScript
            </span>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">
              Tailwind CSS
            </span>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">
              Next Js
            </span>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">
              TypeScript
            </span>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full
                "
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">
              React
            </span>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">
              Prisma ORM
            </span>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">
              Jest-Testing
            </span>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
