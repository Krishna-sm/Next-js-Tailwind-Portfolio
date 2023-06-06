import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdDone } from "react-icons/md";

const Accordination = ({ title, ans }) => {
  // console.log(ans);
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="w-[96%] cursor-pointer  duration-300 dark:bg-gray-800 md:w-1/2 dark:text-white transition-all shadow-xl hover:shadow-lg hover:scale-100 "
    >
      <div className="flex justify-between px-5  py-5 duration-300 shadow-lg ">
        <p className="capitalize text-xl accordination">{title}</p>
        <IoIosArrowDown
          size={20}
          className={`${
            open ? "rotate-180" : "rotate-0"
          } mt-2 transform transition-transform duration-500`}
        />
      </div>
      <div
        className={`container duration-500 transition-all accordination-text capitalize py-5  px-6  ${
          !open ? "hidden " : "visible "
        }`}
      >
        {ans.map((element, index) => {
          // console.log(element)
          return (
            <div key={index} className="flex space-x-2">
              <MdDone color="green" size={30} />
              <p className="capitalize">{element}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <section >
        <div className="flex justify-center items-center flex-col space-y-4 py-10">
          <Accordination
            title={"Frontend Technologies"}
            ans={["Html", "css", "JavaScript","Bootstrap",'tailwind','react']}
          />
          <Accordination
            title={"Backend Technologies"}
            ans={["Node JS and Express JS (JavaScript)", "PHP", "Python"]}
          />
          <Accordination
            title={"Android Application"}
            ans={["React Native", "Flutter"]}
          />
          <Accordination title={"Databases"} ans={["Mongo DB", "MySQL"]} />
        </div>
      </section>
    </>
  );
};

export default Skills;
