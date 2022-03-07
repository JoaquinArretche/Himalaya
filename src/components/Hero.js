import { LinkIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import {Link} from 'react-scroll';



const Hero = () => {
  return (
    <section className="showcase">
    <div className="overlay flex flex-col items-center justify-center text-white px-5">
    <div className='h-screen flex flex-col justify-center items-center'>
      <div id>
        <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 animate-ping absolute scroll-p-1.5'>
        HIMALAYA
    </h1>
    <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 scroll-p-1.5'>
        HIMALAYA
    </h1>
    </div>
    <div className='flex flex-col justify-center items-center py-10'>
    <Link className='py-3 px-3 bg-black rounded-full text-1x1 drop-shadow-md hover:bg-sky-400 transition duration-300 ease-in-out flex items-center animate-bounce'> 
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></Link>
    </div>
    </div>
    </div>

    </section>
    
   );
 };
 

export default Hero


  
  










