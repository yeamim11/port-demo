import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] scroll-mt-20'  data-aos="zoom-in">
         <h4 className='text-center mb-2 text-lg font-Ovo'  data-aos="zoom-in" > What I Offers </h4>
         <h2 className='text-center text-5xl font-Ovo'  data-aos="zoom-in" >My Services</h2>
         <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'  data-aos="zoom-in">I am a frontend developer from Narayanganj, Dhaka with 2 years of experience in multiple 
         companies like Creative it, Fiver and Group.</p>

         <div className="grid grid-cols-auto gap-6 my-10" data-aos="fade-up">
          {serviceData.map(({icon, title, description, link}, index)=>(
            <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 hover:text-black ">
              <Image src={icon} alt='' className='w-10' />
              <h3 className='text-lg my-4 text-gray-700'> {title} </h3>
              <p className='text-sm text-gray-600 leading-5'> {description} </p>
              <a href={link} className='flex items-center gap-2 text-sm mt-5' >
                Read More <Image src={assets.right_arrow} alt='' className='w-4'/>
              </a>
            </div>
          ))}
         </div>
    </div>
  )
}

export default Services