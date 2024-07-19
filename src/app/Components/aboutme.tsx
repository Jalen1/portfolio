import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function AboutMe() {
    return(
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex justify-center flex-col pb-20"
      >
        <div className="flex font-bold text-3xl justify-center pb-4" id="About">
          <h1>About Me</h1>
        </div>
        <div className="flex justify-center font-light text-lg">
          <p className="justify-center">
            Hello, my name is Jalen and I’m a rising fourth year Computer
            Science student at Northeastern University, concentrating in
            Artificial Intelligence. I am currently interning at{" "}
            <Link
              className="font-bold text-blue-500"
              href="https://symbotic.com/"
              target="_blank"
            >
              {" "}
              Symbotic
            </Link>
            , a robotics automation company. I am also currently serving as a
            core organizer of
            <Link
              className="font-bold text-blue-500"
              href="https://hackbeanpot.com/"
              target="_blank"
            >
              {" "}
              HackBeanpot
            </Link>
            , a 501c(3) non-profit and one of the biggest Boston hackathons with
            an 11-year track record organized by students at
            <Link
              className="font-bold text-blue-500"
              href="https://northeastern.edu"
              target="_blank"
            >
              {" "}
              Northeastern University
            </Link>
            . I am seeking to apply both my previous work and academic
            experience to developing software that will make a difference, and I
            would be more than happy to connect and discuss any opportunities!
          </p>
        </div>
      </motion.div>
    )
}