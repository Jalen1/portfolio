import { useState } from "react";
import { motion } from "framer-motion";

/** To be referenced when skillState is 0. */
function LanguageBox() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center space-x-10">
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/java.jpg"
          alt="Java Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/python.png"
          alt="Python Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/csharp.png"
          alt="CSharp Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/JavaScript-logo.png"
          alt="Javascript Logo"
          width={200}
          height={200} 
          
        />
      </div>
      <div className="flex flex-row items-center space-x-10">
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/typescript.png"
          alt="Typescript Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/mysql.svg"
          alt="MySQL Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/html.png"
          alt="HTML Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/css.png"
          alt="CSS Logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

/** To be referenced when skillState is 1. */
function FrameworkBox() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center space-x-10">
        <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/react.png"
          alt="React Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/tailwind.png"
          alt="Tailwind Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/git.png"
          alt="Git Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/node.png"
          alt="Node Logo"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-row items-center space-x-10">
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/next.png"
          alt="Next Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/spring.png"
          alt="Java Spring Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/express.png"
          alt="Express Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/jest.png"
          alt="Jest Logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

/** To be referenced when skillState is 2. */
function SoftwareBox() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center space-x-10">
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/docker.png"
          alt="Docker Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/expo.png"
          alt="Expo Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/kubernetes.png"
          alt="Kubernetes Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/postgres.png"
          alt="Postgres Logo"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-row items-center space-x-10">
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/postman.webp"
          alt="Postman Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/vscode.webp"
          alt="VSCode Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
            src="/framer.svg"
          alt="Jira Logo"
          width={200}
          height={200}
        />
         <motion.img
          whileHover={{scale : 1.2}}
          className="rounded-none"
          src="/firebase.png"
          alt="Firebase Logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

/** Represents the Toggle Bar component that will change what is displayed on the site based on buttons that the user clicks. */
function ToggleBar({
  currSkillState,
  onLanguage,
  onFramework,
  onSoftware,
}: any) {
  return (
    <>
      {currSkillState === 0 ? (
        <div className="flex items-center align-middle justify-center flex-row py-10 space-x-10">
           <motion.button
          whileHover={{scale : 1.2}} 
            className="rounded-full bg-center bg-auto bg-black text-white font-bold text-xl py-1 px-4"
            onClick={onLanguage}
          >
            Languages
          </motion.button>
           <motion.button
          whileHover={{scale : 1.2}}
            className="rounded-full bg-auto border-black border-2 text-black font-bold text-xl py-1 px-4 "
            onClick={onFramework}
          >
            Frameworks
          </motion.button>
           <motion.button
          whileHover={{scale : 1.2}}
            className="rounded-full bg-auto border-black border-2 text-black font-bold text-xl py-1 px-4"
            onClick={onSoftware}
          >
            Software
          </motion.button>
        </div>
      ) : currSkillState === 1 ? (
        <div className="flex items-center align-middle justify-center flex-row py-10 space-x-10">
           <motion.button
          whileHover={{scale : 1.2}}
            className="rounded-full bg-center bg-auto border-black border-2 text-black font-bold text-xl py-1 px-4"
            onClick={onLanguage}
          >
            Languages
          </motion.button>
           <motion.button
          whileHover={{scale : 1.2}}
            className="rounded-full bg-auto  bg-black text-white font-bold text-xl py-1 px-4 "
            onClick={onFramework}
          >
            Frameworks
          </motion.button>
           <motion.button
          whileHover={{scale : 1.2}}
            className="rounded-full bg-auto border-black border-2 text-black font-bold text-xl py-1 px-4"
            onClick={onSoftware}
          >
            Software
          </motion.button>
        </div>
      ) : (
        <div className="flex items-center align-middle justify-center flex-row py-10 space-x-10">
           <motion.button
          whileHover={{scale : 1.2}}
            className="rounded-full bg-auto border-black border-2 text-black font-bold text-xl py-1 px-4 "
            onClick={onLanguage}
          >
            Languages
          </motion.button>
           <motion.button
          whileHover={{scale : 1.2}}
            className="rounded-full bg-auto border-black border-2 text-black font-bold text-xl py-1 px-4 "
            onClick={onFramework}
          >
            Frameworks
          </motion.button>
           <motion.button
          whileHover={{scale : 1.2}}
            className="rounded-full bg-auto  bg-black text-white font-bold text-xl py-1 px-4 "
            onClick={onSoftware}
          >
            Software
          </motion.button>
        </div>
      )}

      {currSkillState === 0 ? (
        <LanguageBox />
      ) : currSkillState === 1 ? (
        <FrameworkBox />
      ) : (
        <SoftwareBox />
      )}
    </>
  );
}

export default function Skills() {
  /** Used to toggle between languages, tools, and frameworks. */
  const [skillState, setSkillState] = useState(0);

  /**
   * TODO:
   * 1. Make the buttons change color when one of them is pressed (the one that is selected should be black).
   * 2. Switch between the different screens depending on which button is pressed.
   *
   *
   * {skillState === 0 ? <LanguageBox skillState = 0 /> : skillsState === 1 ? <FrameworkBox/> : <ToolBox/> }
   */
  return (
    <>
      <motion.div initial = {{ opacity : 0 , x : 400}}
      whileInView = {{ opacity : 1 , x : 0 }}
      transition = {{ duration : 0.5 , delay : 0.25}}
      viewport = {{ once: true }}
      className="flex justify-center items-center font-bold text-3xl flex-col p-24 bg-burnt_sienna-700 rounded-3xl relative"
      id="Skills"
      >
        <h1>Skills</h1>
        <ToggleBar
          currSkillState={skillState}
          onLanguage={() => {
            setSkillState(0);
          }}
          onFramework={() => {
            setSkillState(1);
          }}
          onSoftware={() => {
            setSkillState(2);
          }}
        />
      </motion.div>
    </>
  );
}
