import React from "react";
import Styles from '@/styles/navbar.module.css';
const Divider = ({title,style,id}) => {
  return (
    <>
      <div id={id} className="relative flex py-5 items-center justify-center px-4">
        <div className="flex-grow border-t  border-gray-300 dark:border-gray-500" />
        <span className={` ${Styles.divider} flex-shrink mx-4 ${style} font-semibold text-gray-700 dark:text-gray-200 tracking-widest`}>
          {title}
        </span>
        <div className="flex-grow border-t  border-gray-300 dark:border-gray-500" />
      </div>
    </>
  );
};

export default Divider;
