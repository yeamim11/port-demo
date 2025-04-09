import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-20 scroll-mt-20' data-aos="zoom-in" >
            <h4 className='text-center mb-2 text-lg font-Ovo' > Introduction </h4>
            <h2 className='text-center text-5xl font-Ovo' >About Me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none" >
                    <Image src={assets.user} alt='' className=' w-full rounded-3xl'  data-aos="zoom-in" />
                </div>
                <div className="flex-1">
                    <p className='mb-10 max-w-2xl font-Ovo' data-aos="fade-up" data-aos-delay="200">
                        I am an expert at converting challenging
                        design concepts into user-friendly, responsive user interfaces.
                        Skilled with contemporary frameworks such as React and Vue.js.
                        Please feel free to change any information to better fit your
                        personality and experience!
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'  data-aos="zoom-in"  data-aos-delay="600">
                        {infoList.map(({ icon, title, description }, index) => (
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-3 duration-500 hover:shadow-black'>
                                <Image src={icon} alt={title} className='w-7 mt-3 ' />
                                <h3 className='my-4 font-bold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className='my-6 text-white/90 font-Ovo' data-aos="fade-up">
                        Tools I Use
                    </h4>
                    <ul className='flex items-center gap-3 sm:gap-5' data-aos="fade-up" >
                        {toolsData.map((tool,index)=>(
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-3 duration-500' >
                                <Image src={tool} alt='Tool' className='w-6 sm:w-8'/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About