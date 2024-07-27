import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experiences() {
  return (
    <motion.div
      className="bg-oxford_blue-900 rounded-3xl p-20 space-y-10"
      id="Experiences"
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 , delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className="flex justify-center items-center flex-col space-y-10 pb-10 font-bold text-3xl"
      >
          <h1>Experiences</h1>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="flex justify-start flex-col space-y-10"
      > */}
        <div className="flex justify-start flex-row space-x-10">
          <div className="flex-grow-0 flex-shrink-0">
            <Link href="https://www.symbotic.com/" target="_blank">
              <Image
                className="rounded-full"
                src="/symbotic.png"
                alt="Symbotic Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex justify-start font-bold text-xl flex-col">
            <h1>Symbotic</h1>
            <div className="flex justify-start font-normal text-base italic">
              <p>May 2024 - Present</p>
            </div>
            <ul className="flex flex-row space-x-2">
              <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
                C#
              </li>
              <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
                Python
              </li>
              <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
                Git
              </li>
              <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
                Docker
              </li>
              <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
                Kubernetes
              </li>
            </ul>
            <div className="flex justify-start font-normal text-base">
              <p>
                Current Software Engineer Intern on the Symbotic Fleet
                Operations Team.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start flex-row space-x-10">
          <div className="flex-grow-0 flex-shrink-0">
            <Link href="https://www.travelers.com/" target="_blank">
              <Image
                className="rounded-none"
                src="/travelers.jpg"
                alt="Travelers Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex justify-start font-bold text-xl flex-col">
            <h1>The Travelers Companies, Inc.</h1>
            <div className="flex justify-start font-normal text-base italic">
              <p>January 2023 - June 2023</p>
            </div>
            <ul className="flex flex-row space-x-2">
              <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
                React
              </li>
              <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
                Python
              </li>
              <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
                Git
              </li>
              <li className="rounded-full bg-auto bg-black text-white font-light text-sm py-1 px-4">
                SQL
              </li>
            </ul>
            <div className="flex justify-start font-normal text-base">
              <ul>
                <li>
                  Developed a user-friendly test execution UI in an Agile
                  environment leveraging React to fetch software test results
                  from company APIs, enhancing coordination between offshore and
                  on-site QA Engineers on user stories.
                </li>
                <li>
                  Integrated a React-based onboarding application with other
                  interns, practicing test-driven development and code reviews
                  to produce a forum that could store and display user comments.
                </li>
                <li>
                  Automated SQL query construction by building Python scripts to
                  extract, transform, and load data from Snowflake and SQL
                  Server databases to deliver business data to other teams.
                </li>
              </ul>
            </div>
          </div>
        </div>
      {/* </motion.div> */}
    </motion.div>
  );
}
