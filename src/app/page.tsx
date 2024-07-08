import Image from "next/image";
import Link from "next/link";

/**
 * Top level component for the home page
 * @returns {JSX.Element} The home page
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-20 overflow-y-scroll">
      <div className="flex justify-center items-center space-x-40">
        <div className="image-rounded-full">
          <Image
            className="rounded-full"
            src="/intro.jpg"
            alt="Jalen Wu"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-6xl font-bold">
            <h1>Jalen Wu</h1>
          </div>
          <div className="text-2xl font-light">
            <p>Software Engineer</p>
          </div>
          <div className="flex flex-row text-sm font-light space-x-5">
            <a href="https://www.linkedin.com/in/jalen-wu/" target="_blank" className="image">
              <Image
                className="rounded-xl"
                src="/linkedin.jpg"
                alt="Linkedin Logo"
                width={50}
                height={50}
              />
            </a>
            <a href="https://www.github.com/jalen1" target="_blank" className="image">
              <Image
                className="rounded-xl"
                src="/github.png"
                alt="Github Logo"
                width={50}
                height={50}
              />
            </a>
            <a href="mailto:wu.jal@northeastern.edu" target="_blank" className="image">
              <Image
                className="rounded-xl"
                src="/mail.png"
                alt="Mail Logo"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start flex-col pb-10">
        <div className="flex justify-start font-bold text-3xl">
          <h1>About Me</h1>
        </div>
        <div className="flex justify-start font-light text-lg">
          <p>
            Hello, my name is Jalen and I’m a rising fourth year Computer
            Science student at Northeastern University, concentrating in
            Artificial Intelligence. I am seeking to apply both my previous work
            and academic experience to developing software that will make a
            difference, and I would be more than happy to connect and discuss
            any opportunities!
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start flex-col space-y-10">
        <div className="flex justify-start font-bold text-3xl">
          <h1>Experiences</h1>
        </div>
        <div className="flex justify-start flex-row space-x-10">
          <div className="flex-grow-0 flex-shrink-0"> 
            <a href="https://www.symbotic.com/" target="_blank">
            <Image
              className="rounded-full"
              src="/symbotic.png"
              alt="Symbotic Logo"
              width={100}
              height={100}
            />
          </a>
          </div>
          <div className="flex justify-start font-bold text-xl flex-col">
            <h1>Symbotic</h1>
            <div className="flex justify-start font-normal text-base italic">
              <p>May 2024 - Present</p>
            </div>
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
          <a href="https://www.travelers.com/"  target="_blank">
            <Image
              className="rounded-none"
              src="/travelers.jpg"
              alt="Travelers Logo"
              width={100}
              height={100}
            />
          </a>
          </div>
          <div className="flex justify-start font-bold text-xl flex-col">
            <h1>The Travelers Companies, Inc.</h1>
            <div className="flex justify-start font-normal text-base italic">
              <p>January 2023 - June 2023</p>
            </div>
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
      </div>
    </main>
  );
}
