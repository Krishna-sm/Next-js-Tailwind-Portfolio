import {  Button } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ImSpinner10 } from "react-icons/im";
import ReCAPTCHA from "react-google-recaptcha";
const Contact = () => {
  const [data,setData ]  = useState({
    user_name:'',
    user_email:'',
    message:''
  })


  const [loading,setLoading] = useState(false);
  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.values
    })
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      setLoading(true);

     await emailjs.sendForm('service_mt6v8zs', 'template_3yxjxe5', form.current, 'B-vsxTPRy3MFFWnWu')
      toast.success("thanku for contacting")
      // alert("success");
      setLoading(false);
     
      setData({
        user_name:'',
        user_email:'',
        message:''
      })
   

    } catch (error) {
      setLoading(false);
      toast.error("something went wrong")
      
      setData({
        user_name:'',
        user_email:'',
        message:''
      })
    }
    

  }

  const form = useRef();

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer className={'z-[1000000] font-serif '} style={{zIndex:'1000000000'}} />
        <div className="container px-3 sm:px-5 py-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="sf"
              width={10000}
              height={10000}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center  rounded hover:scale-105 duration-500"
              src="/contact.svg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <form ref={form} method="post" onSubmit={handleSubmit}>

                <div className=" space-y-2 py-3 m-auto flex flex-col">
                  <label htmlFor="name" className="font-sans">
                    Name
                  </label>
                  <input
                    placeholder="Krishna..."
                    type="text"
                    className="w-full  border-2 focus:outline-none px-4 h-12 dark:bg-white font-serif dark:text-black text-xl capitalize rounded-md"
                    name="user_name"
                    onChange={handleChange}
                    value={data.user_name}
                    required={true}
                    autoComplete="off"
                  />
                 
                </div>

                <div className=" space-y-2 py-3 m-auto flex flex-col">
                  <label htmlFor="email" className="font-sans">
                    Email
                  </label>
                  <input
                    placeholder="kana@gmail.com"
                    type="text"
                    name="user_email"
                    className="w-full  border-2 focus:outline-none px-4 placeholder:lowercase h-12 dark:bg-white font-serif dark:text-black text-xl  rounded-md"
                    onChange={handleChange}
                    required={true}
                    value={data.user_email}
                    autoComplete="off"
                  />
            
                </div>

                <div className=" space-y-2 py-3 m-auto flex flex-col">
                  <label htmlFor="message" className="font-sans">
                    Message
                  </label>
                  <textarea
                    placeholder="type something..."
                    cols={10}
                    rows={4}
                    name="message"
                    onChange={handleChange}
                    value={data.message}
                    required={true}
                    autoComplete="off"
                    type="text"
                    className="w-full  border-2 focus:outline-none p-4  dark:bg-white font-serif dark:text-black text-xl capitalize rounded-md"
                  ></textarea>

                 
                </div>

           
                <div className=" space-y-2 py-3 m-auto flex flex-col justify-center items-center">
                  {/* <button type="submit">Submit</button> */}
                {!loading ?  <Button   type="submit" className="bg-indigo-500 hover:bg-indigo-600" variant="contained">
                    Submit
                  </Button>
                  :
                  
                    <ImSpinner10 className="animate-spin " size={30} />
                  }

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
