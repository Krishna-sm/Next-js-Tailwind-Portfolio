import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  BsFillMoonStarsFill,
  BsFillCloudSunFill,
  BsArrowUp,
} from "react-icons/bs";
import { RxCross1, RxDoubleArrowUp } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import Styles from "@/styles/navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const resumeOpen= ()=>{
    window.open("/resume.pdf",'_b')
  }
  const { asPath } = useRouter();
  const { theme, setTheme, systemTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const [mount, setMount] = useState(false);
  const curruntTheme = theme === "system" ? systemTheme : theme;
  const [visible, setVisible] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, [toggleVisible]);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <section>
      <nav
        className={`  w-full top-0 fixed flex flex-col duration-300 md:flex-row justify-between bg-white dark:bg-gray-900 shadow-md  dark:shadow-black py-3 px-3 dark:text-white  z-[10000] `}
      >
        <div className="flex justify-between ">
          <Link
            href={"/"}
            className={`${Styles.logo} text-4xl pl-4 dark:text-white text-purple-600 `}
          >
            Krishna
          </Link>
          <span
            className={`sm:hidden text-center pr-4 transform transition-all duration-500`}
          >
            {!showMenu ? (
              <CiMenuFries onClick={() => setShowMenu(!showMenu)} size={30} />
            ) : (
              <RxCross1 onClick={() => setShowMenu(!showMenu)} size={30} />
            )}
          </span>
        </div>
        <ul
          className={`${
            !showMenu ? "hidden h-full " : "h-screen sm:h-full overflow-hidden"
          } space-x-5 pb-16 sm:pb-0   z-[1000]   sm:z-0 flex justify-center items-center flex-col sm:flex-row space-y-10 sm:space-y-0 sm:flex`}
        >
          <Link onClick={() => setShowMenu(false)} href={"/"}>
            <li className="sm:text-xl text-center  font-extralight"></li>
          </Link>
          <Link onClick={() => setShowMenu(false)} href={"/"}>
            <li
              className={` ${
                asPath === "/" ? "dark:text-gray-200" : "dark:text-white"
              } sm:text-xl text-center duration-500  font-extralight sm:hover:border-b-4 sm:dark:hover:border-b-yellow-500`}
            >
              Home
            </li>
          </Link>
          <Link onClick={() => setShowMenu(false)} href={"/#about"}>
            <li
              className={`sm:text-xl ${
                asPath === "/#about" ? "dark:text-gray-200" : "dark:text-white"
              } text-center duration-500  font-extralight sm:hover:border-b-4 sm:dark:hover:border-b-yellow-500`}
            >
              About
            </li>
          </Link>

          <Link onClick={() => setShowMenu(false)} href={"/#skills"}>
            <li
              className={`sm:text-xl ${
                asPath === "/#about" ? "dark:text-gray-200" : "dark:text-white"
              } text-center duration-500  font-extralight sm:hover:border-b-4 sm:dark:hover:border-b-yellow-500`}
            >
              Skills
            </li>
          </Link>

          <Link onClick={() => setShowMenu(false)} href={"/#portfolio"}>
            <li
              className={`sm:text-xl ${
                asPath === "/#about" ? "dark:text-gray-200" : "dark:text-white"
              } text-center duration-500  font-extralight sm:hover:border-b-4 sm:dark:hover:border-b-yellow-500`}
            >
              Portfolio
            </li>
          </Link>

          <Link onClick={() => setShowMenu(false)} href={"/#service"}>
            <li
              className={`sm:text-xl ${
                asPath === "/#about" ? "dark:text-gray-200" : "dark:text-white"
              } text-center duration-500  font-extralight sm:hover:border-b-4 sm:dark:hover:border-b-yellow-500`}
            >
              Service
            </li>
          </Link>
          <Link onClick={() => setShowMenu(false)} href={"/#contact"}>
            {" "}
            <li
              className={`sm:text-xl text-center duration-500  font-extralight sm:hover:border-b-4 sm:dark:hover:border-b-yellow-500`}
            >
              Contact
            </li>
          </Link>
          <li className=" text-center flex justify-center cursor-pointer">
            {mount && curruntTheme === "dark" ? (
              <BsFillMoonStarsFill
                size={30}
                onClick={() => setTheme("light")}
              />
            ) : (
              <BsFillCloudSunFill size={30} onClick={() => setTheme("dark")} />
            )}
          </li>
          <li className=" text-center flex justify-center cursor-pointer">
                <button onClick={resumeOpen} className="px-8 py-1 dark:hover:bg-white dark:hover:text-black 
                duration-200
                hover:bg-gray-900 hover:text-white
                border-gray-900 border-2 dark:border-white">Resume</button>
          </li>
        </ul>
      </nav>

      <button
        onClick={scrollToTop}
        className={`fixed transiton-all  duration-300 bottom-24 right-0 sm:bottom-10  sm:right-10 p-3 dark:bg-green-400 dark:text-white bg-indigo-900 text-white cursor-pointer rounded-full text-2xl z-[1000] ${
          visible ? "inline" : "hidden"
        }`}
      >
        <div>
          <RxDoubleArrowUp />
        </div>
      </button>
    </section>
  );
};

export default NavBar;
