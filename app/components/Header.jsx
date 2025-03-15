import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div  className='w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 pt-32'>
            <div data-aos="zoom-in">
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </div>
            <h3 data-aos="fade-up"
             className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi I'm Md.Abubokor Siddik Yeamim
                <Image src={assets.hand_icon} alt='' className='w-6' />
            </h3>
            <h1 data-aos="fade-up" className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
                Frontend Web Developer Based In Bangladesh
            </h1>
            <p className='max-w-2xl mx-auto font-Ovo' data-aos="zoom-in"> 
                I am an expert at converting challenging
                design concepts into user-friendly, responsive user interfaces.
                Skilled with contemporary frameworks such as React and nextjs.
            </p>
            <div data-aos="zoom-in" className="flex flex-col md:flex-row items-center gap-4 mt-4">
                <a className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2' href="#contact">Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /> </a>

                <a href="https://drive.google.com/file/d/162yigTbcKUx0pUdsuDWqX6Mh9AunOSy3/view?usp=sharing" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> My Resume <Image src={assets.download_icon} alt='' className='w-4' /> </a>
            </div>
        </div>
    )
}

export default Header