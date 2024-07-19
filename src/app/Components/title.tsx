import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <motion.div
      className="flex justify-center items-center space-x-40 pb-24"
      initial={{ opacity: 0, x: 150 }}
      transition={{ duration: 1.75, delay: 0.25, ease: "easeOut", type : "spring", bounce : 0.25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <motion.div className="image-rounded-full">
        <Image
          className="rounded-full"
          src="/intro.jpg"
          alt="Jalen Wu"
          width={200}
          height={200}
        />
      </motion.div>
      <div className="flex flex-col space-y-2">
          <h1 className="text-6xl font-bold">Jalen Wu</h1>
          <p className="text-2xl font-light">Software Engineer</p>
        <div className="flex flex-row text-sm font-light space-x-5">
          <motion.div whileHover={{scale : 1.2}}>
          <a
            href="https://www.linkedin.com/in/jalen-wu/"
            target="_blank"
            className="image"
          >
            <Image
              className="rounded-xl"
              src="/linkedin.jpg"
              alt="Linkedin Logo"
              width={50}
              height={50}
            />
          </a>
          </motion.div>
          <motion.div whileHover={{scale : 1.2}}>
          <a
            href="https://www.github.com/jalen1"
            target="_blank"
            className="image"
          >
            <Image
              className="rounded-xl"
              src="/github.png"
              alt="Github Logo"
              width={50}
              height={50}
            />
          </a>
          </motion.div>
          <motion.div whileHover={{scale : 1.2}}>
          <a
            href="mailto:wu.jal@northeastern.edu"
            target="_blank"
            className="image"
          >
            <Image
              className="rounded-xl"
              src="/mail.png"
              alt="Mail Logo"
              width={50}
              height={50}
            />
          </a>
          </motion.div>
        </div>
        
        <motion.div whileHover={{scale : 1.1, x : 0}} className="pt-2">
          <a
            className="rounded-full bg-center bg-auto bg-black text-white font-light text-l py-1 px-4"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
