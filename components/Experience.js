import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Card = ({ src, title, desc, job, location }) => {
  return (
    <div className="p-5 lg:w-1/2  duration-300 hover:scale-105 shadow-lg ">
      <div className="h-full dark:bg-white   bg-opacity-75 px-8 pt-10 pb-10 rounded-lg overflow-hidden text-center relative">
        <div className="text-center ">
          <Image
            className="w-52 m-auto
        "
            src={src}
            alt="card"
            width={1000}
            height={10000}
          />
        </div>

        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-serif">
          {title}
        </h1>
        <p className="leading-relaxed mb-3 font-light ">{job}</p>
        <p className="leading-relaxed mb-3 text-base  ">{desc}</p>
        <div className="flex justify-center font-bold">
          <CiLocationOn size={30} className="mt-0" />{" "}
          <p className="leading-relaxed mb-3 font-light flex-col text-center ">
            {" "}
            {location}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap justify-center ">
            <Card
              src={"/speqto.jpg"}
              title={" Node Js Backend"}
              desc={" Develop and Manitain Backend Apis Using Node js and Mongo DB . working With Block chain and Crypto currency. I Learn Many New things  "}
              location={"Noida, India"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
