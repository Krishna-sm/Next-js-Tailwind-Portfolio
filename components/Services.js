import Image from 'next/image'
import React from 'react'


const Card = ({src,title,desc})=>{
    return   <div className="p-5 lg:w-1/3  duration-300 hover:scale-105  ">
    <div className="h-full dark:bg-white   bg-opacity-75 px-8 pt-10 pb-10 rounded-lg overflow-hidden text-center relative">
      <div className="text-center ">
        <Image className='w-52 m-auto
        ' src={src} alt='card' width={1000} height={10000} />
      </div>
    
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 font-serif">{title}</h1>
      <p className="leading-relaxed mb-3 font-light ">{desc}</p>

    </div>
  </div>
}


const Services = () => {
  return (
    <>
    
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap ">
        <Card src={'/web.svg'}  title={'Web Development'}  desc={'User-friendly and secure Web Apps that exhibit seamless performance across browsers and devices.'} />
        <Card src={'/android.svg'} title={'Android Development'} desc={'Create an impactful mobile app that fits your brand and industry within a shorter time frame.'}  />
        <Card src={'/designing.svg'} title={'Web Designing'}  desc={'We combine the latest trends with our customers individual goals and needs to deliver impactful designs.'} />
     
    </div>
  </div>
</section>

    
    </>
  )
}

export default Services