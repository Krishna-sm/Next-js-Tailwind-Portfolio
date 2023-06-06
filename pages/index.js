import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import FeedBack from '@/components/FeedBack'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import TerminalUI from '@/components/TerminalUI'
import Divider from '@/components/reuse/Divider'
import React, { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks 
  const [loading,setLoading]  = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    const suscribe = setTimeout(()=>{
      setLoading(false);
      return  {suscribe}
    },800);
  },[])

  if(loading)
  {
    return <div className="dark:bg-gray-900 text-white h-screen w-full flex justify-center items-center" >

<PulseLoader size={50}   color="rgba(54, 215, 183, 1)" />
    </div>
  }

  return (
    <>
       <div className="dark:bg-gray-900 py-10 duration-150 transition-all">
        <div className='py-10 sm:py-10' />
       <Hero/>
       <Divider id={'about'} title={'About Me'} style={'text-2xl sm:text-3xl md:text-4xl'} />
       <About/>
       <Divider id={'service'} title={'Services'} style={'text-2xl sm:text-3xl md:text-4xl'} />
       <Services/>
       <Divider id={'experience'} title={'Experience'} style={'text-2xl sm:text-3xl md:text-4xl'} />
       <Experience/>
       <Divider id={'skills'} title={'Skills'} style={'text-2xl sm:text-3xl md:text-4xl'} />
       <Skills/>
       <Divider id={'portfolio'} title={'Portfolio'} style={'text-2xl sm:text-3xl md:text-4xl'} />
       <FeedBack/>
       <Divider id={'terminal'} title={'Terminal'} style={'text-2xl sm:text-3xl md:text-4xl'} />
        <TerminalUI/>
       <Divider id={'contact'} title={'Contact'} style={'text-2xl sm:text-3xl md:text-4xl'} />
       <Contact/>
       </div>
    </>
  )
}

export default index
