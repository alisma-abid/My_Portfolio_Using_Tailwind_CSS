import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container  '>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-3' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h2 className='text-5xl underline'>Get in Touch</h2>
                <p className='text-gray-600 text-[20px] pt-2'>
                    You can contact me if u have any issue!
                </p>
                <div className='flex gap-3 items-center'>
                <IoMailOpenOutline  size={30}/> alismaabid93@gmail.com
                </div>
            </div>
            <div className='space-y-1\8' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h=[30px] bg-transparent border border-amber-50'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" 
                    className='h=[30px] bg-transparent border border-amber-50'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className = 'bg-transparent border border-amber-50'
                    id='msg' rows={8}>
                    </textarea>
                </div><br />
                <button className='bg-accent p-2 px-6'>Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
