import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "623818f7-f142-42eb-89a6-a10084953848");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'  data-aos="zoom-in">
        <h4 className='text-center mb-2 text-lg font-Ovo' data-aos="zoom-in" > Connect with me </h4>
         <h2 className='text-center text-5xl font-Ovo' data-aos="zoom-in" >Get in touch</h2>
         <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'  data-aos="zoom-in">I'd love to hear from you! If you have any questions, comments or 
         feedback, please use the form below.</p>

         <form className='max-w-2xl mx-auto' onSubmit={onSubmit}  data-aos="zoom-in">
            <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                <input type="text" placeholder='Enter Your Name' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />
                <input type="email" placeholder='Enter Your Email' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
            </div>
            <textarea rows='6' placeholder='Enter Your Message' required 
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message' >
            </textarea>

            <button type='submit' className='py-3 px-8 flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 ' >Submit Now 
            <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </button>

            <p className='mt-4'> 
              {result}
            </p>
         </form>


    </div>
  )
}

export default Contact