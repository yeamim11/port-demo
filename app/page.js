'use client'

import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Aos from "aos";
import "aos/dist/aos.css"
import Fotter from "./components/Fotter";



export default function Home() {


  useEffect(() => {
    Aos.init({
      offset:100,
      duration:600,
      easing:"ease-in-sine",
      delay:100
    })
  })




  return (
    <div className="bg-black text-white">
    <Navbar  />
    <Header  />
    <About  />
    <Services  />
    <Work  />
    <Contact  />
    <Fotter/>
    </div>
  );
}
