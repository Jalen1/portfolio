import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed w-full z-50">
            <div className="flex justify-end items-end flex-col space-y-10 p-10 bg-cambridge_blue-600 opacity-100 bg-opacity-100">
                <div className="flex font-light text-xl space-x-10">
                    <a className="scroll-smooth" href="#About">About</a>
                    <a className="scroll-smooth" href="#Experiences">Experience</a>
                    <a className="scroll-smooth" href="#Projects">Projects</a>
                    <a className="scroll-smooth" href="#Skills">Skills</a>
                </div>
            </div>
        </header>
    );
}