import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    }
    

  return (
    <>
    {/* <div className=" fixed top-0 right-0 w-11/12 -z-50 translate-y-[-80%] ">
        <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div> */}
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-gray-600/90 lg:bg-gray-600/90 '>
        <a href="#top"  >
            <p className='font-bold text-4xl font-Ovo text-white/90' >Yeamim <span className='font-bold text-5xl text-red-700'>.</span> </p>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray-500 text-white shadow-sm '>
            <li><a className='font-Ovo' href="#top"> Home </a></li>
            <li><a className='font-Ovo' href="#about"> About Me </a></li>
            <li><a className='font-Ovo' href="#services"> Services </a></li>
            <li><a className='font-Ovo' href="#work"> My Work </a></li>
            <li><a className='font-Ovo' href="#contact"> Contact Me </a></li>
        </ul>

        <div className="flex items-center gap-4">
            <a href="#contact" className=' font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4' >
                Contact
                <Image src={assets.arrow_icon} className='w-3' alt='' />
            </a>

            <button className='block md:hidden ml-4' onClick={openMenu} >
                <Image src={assets.menu_black} alt='' className='w-6' />
            </button>
        </div>
        {/* ============== mobile menu =================== */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-500/90  transition duration-500'>

            <div className="absolute right-6 top-6" onClick={closeMenu} >
                <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>

            <li><a className='font-Ovo' onClick={closeMenu} href="#top"> Home </a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about"> About Me </a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services"> Services </a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#work"> My Work </a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact"> Contact Me </a></li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar