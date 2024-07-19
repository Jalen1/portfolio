'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
      <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.15}}
      viewport={{ once: true }}
      id="projects"
      className="flex justify-start items-center flex-col space-y-10 pb-20"
    >
      <div className="flex justify-start items-center font-bold text-3xl">
        <h1>Projects</h1>
      </div>
      <motion.div whileHover={{scale : 1.01 }} className="flex justify-start flex-row space-x-10">
        <div className="flex justify-start font-bold text-xl flex-col left-64">
          <Link
            className="font-bold"
            href="https://github.com/Jalen1/portfolio"
            target="_blank"
          >
            <h1>Portfolio</h1>
            </Link>
          <div className="flex justify-start font-normal text-base italic">
            <p>July 2024</p>
          </div>
          <ul className="flex flex-row space-x-2">
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Next.js
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Typescript
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Framer Motion
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Git
            </li>
            
          </ul>
          <div className="flex justify-start font-normal text-base">
            <p>
              Designed and developed a personal portfolio website using Next.js
              and Typescript. The website showcases my projects, skills, and
              experiences. Component animations were implemented using Framer Motion
              to add a dynamic user experience.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div whileHover={{scale : 1.01 }} className="flex justify-start flex-row space-x-10">
        <div className="flex justify-start font-bold text-xl flex-col left-64">
          <Link
            className="font-bold"
            href="https://devpost.com/software/poqua"
            target="_blank"
          >
            <h1>Poqua</h1>
            </Link>
          <div className="flex justify-start font-normal text-base italic">
            <p>February 2024</p>
          </div>
          <ul className="flex flex-row space-x-2">
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              React Native
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Typescript
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Git
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Google Firebase
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Expo
            </li>
          </ul>
          <div className="flex justify-start font-normal text-base">
            <p>
              Best overall winner of the
              <Link
                className="font-bold text-blue-500"
                href="https://hackbeanpot.com/#projects"
                target="_blank"
              >
                {" "}
                2024 HackBeanpot{" "}
              </Link>
              hackathon. Poqua is an aquarium tank monitor software application
              that gathers metrics such as water quality, temperature and light
              levels in a fish tank measured by hardware (DHT11 Temperature
              Module, Photoresistor, Turbidity sensor) that the user is intended
              to place in their personal fish tank. Poqua supports various user
              features, such as adding fish, viewing current fish, and setting
              reminders for tasks to maintain their fish tank.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div whileHover = {{ scale : 1.01 }} className="flex justify-start flex-row space-x-10">
        <div className="flex justify-start font-bold text-xl flex-col left-64">
          <Link
            className="font-bold"
            href="https://github.com/Jalen1/todo-chart"
            target="_blank"
          >
            <h1>Java Spring To-Do</h1>
          </Link>
          <div className="flex justify-start font-normal text-base italic">
            <p>May 2024</p>
          </div>
          <ul className="flex flex-row space-x-2">
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Java
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Spring Boot
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Git
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              PostgreSQL
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Postman
            </li>
          </ul>
          <div className="flex justify-start font-normal text-base">
            <p>
              Designed a todo list application in Java that handles HTTP
              requests to add, delete, and modify tasks. Leveraged Spring Boot
              to handle user requests from the application controller, and to
              configure application endpoints in a web environment.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div whileHover = {{ scale : 1.01 }} className="flex justify-start flex-row space-x-10">
        <div className="flex justify-start font-bold text-xl flex-col left-64">
          <Link
            className="font-bold"
            href="https://github.com/Jalen1/FileSystem"
            target="_blank"
          >
            <h1>File System</h1>
          </Link>
          <div className="flex justify-start font-normal text-base italic">
            <p>November 2023</p>
          </div>
          <ul className="flex flex-row space-x-2">
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              C
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Vim
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Git
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Linux
            </li>
            <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
              Makefile
            </li>
          </ul>
          <div className="flex justify-start font-normal text-base">
            <p>
              Developed a file system driver in C that mounts a 1024-kilobyte
              disk image as a filesystem, allowing users to add, delete, and
              modify files and directories in a Linux environment.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
      );
}
