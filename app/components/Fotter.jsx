import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";




const Fotter = () => {
    return (
        <div className='w-full px-[12%] scroll-mt-20'>
            <div className="flex justify-between ic ">
                <a className='cursor-pointer' href="#top">
                    <p className='font-bold text-4xl font-Ovo text-white/90' >Yeamim <span className='font-bold text-5xl text-red-700'>.</span> </p>
                </a>
                <div className="icon flex items-center gap-5">
                    <a href="https://www.facebook.com/jfj.yeamim">
                        <FaFacebookF className='text-2xl text-white' />
                    </a>
                    <a href="https://www.instagram.com/abubokoryeamim?igsh=MTI3ZGU5ZHp6d2JsYw==">
                        <FaInstagram className='text-2xl text-white' />
                    </a>
                    <a href="https://www.linkedin.com/in/yeamim111/">
                        <FaLinkedinIn className='text-2xl text-white' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Fotter