import Image from 'next/image';
import React from 'react';
import {RiBookFill} from 'react-icons/ri';
import {CgUserlane} from 'react-icons/cg';
import {ImLibreoffice} from 'react-icons/im';
import Styles from '@/styles/navbar.module.css';
import Divider from './reuse/Divider';

const About = () => {
    return (
      <>
        <section className="text-gray-600 body-font" >
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                height={10000}
                width={10000}
                className="object-cover object-center rounded hover:saturate-150"
                alt="hero"
                src="/about.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium dark:text-white text-gray-900">
                {" "}
                Hey i am <span className={`${ Styles.name} font-thin`}>Krishna Bansal <span></span> </span>
              </h1>
              <p className="mb-8 leading-relaxed dark:text-white accordination-text">
                I&apos;m Full Stack Web Application Developer having 1 years of
                experience. I am from Uttar Pradesh, India. I enjoy taking complex
                problems and turning them into simple and beautiful
                Applications. I describe myself as a passionate developer who
                loves coding and the web platform. I am also an Educator. I help
                aspiring Developer to build career they love by sharing my
                knowledge. When i am not coding You will find me travelling
                around the world
              </p>
          <Divider title={'Education'} style={'text-base sm:text-xl'} />

              <div className="flex justify-center">
                <ol className="relative border-l dark:text-white border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-rose-200 rounded-full ring-8 ring-white dark:ring-black">
                      {/* <i className="ri-book-fill text-rose-600" /> */}
                      <RiBookFill className=" text-rose-600" />
                    </span>
                    <h3 className="flex items-center mb-1 text-sm font-semibold text-gray-600 dark:text-white">
                      Bachlor of Computer Application
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                      From Dr bhim Roa Ambedkar University
                    </time>
                    <p className="mb-4 text-sm font-normal text-gray-400">
                      Pursuing
                    </p>
                  </li>
                </ol>
              </div>

              <div className="flex space-x-10 justify-center py-10">
                <div className="text-center">
                <CgUserlane className="text-2xl dark:text-white text-indigo-500 m-auto  "/>
             
                  <p className="font-semibold dark:text-white">1+ Years Experience</p>
                </div>
                <div className="text-center">
                <ImLibreoffice className="text-2xl text-green-700 m-auto"/>
                 
                  <p className="font-semibold dark:text-white">10+ Projects Completed</p>
                </div>
               
              </div>

             
            </div>
          </div>
        </section>
      </>
    );
}

export default About