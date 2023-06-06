import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import {IoIosArrowRoundForward} from 'react-icons/io';

const Hero = () => {
  return (
    <section id="home">
      <div className=" dark:text-white container mx-auto flex px-5  md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white text-gray-900">
            I am a{" "}
            <TypeAnimation
            className="heading text-xl sm:text-5xl"
              sequence={[
                "Web Developer",
                1000,
                "Application Developer",
                1000,
                "Web Designer",
                1000,
                "Educator",
                1000,
              ]}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-8 leading-relaxed accordination-text">
            Hello and Welcome to my Portfolio! I am currently a Freelancer, Full
            Stack Web Developer and Android App Developer. I hope that this
            portfolio provides insight into my character, programming
            background, analytical skills, and accomplishments.
          </p>
          <div className="flex justify-center  m-auto py-3">
            <button onClick={()=>{
              window.location.href='/#contact'
            }} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Hire me <IoIosArrowRoundForward className="mt-2"/>
            </button>
          </div>

          <div className="flex  space-x-5 justify-center py-4 w-full">
          
          <Link href={'https://www.instagram.com/krishna_agrawal_____/'} target="_b">
                <BsInstagram  size={30} />
            </Link>
            <Link href={'https://www.github.com/krishna-sm'} target="_b">
                <BsGithub  size={30} />
            </Link>
            <Link href={'https://www.linkedin.com/in/krishna1806/'} target="_b">
                <BsLinkedin  size={30} />
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-">
          <Image
            height={1000}
            width={10000}
            className="object-cover object-center hover:saturate-100 saturate-150 duration-300 transition-all filter drop-shadow-lg rounded-full"
            alt="hero"
            src="/gyt.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
