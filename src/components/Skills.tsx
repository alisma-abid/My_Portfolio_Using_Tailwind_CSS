import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 data-aos="zoom-out-down" className='text-4xl underline md:text-5xl'>Learning</h2>
            <p data-aos="zoom-in-up" className='text-gray-500 pt-4'>
            </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-2xl'>
                <div className='space-y-2'>
                    <h2>Typescript</h2>
                    <h2>HTML & CSS</h2>
                    <h2>Tailwind</h2>
                    <h2>Node.js</h2>
                </div>
                <div className='space-y-2'>
                    <h2>Kali Linux</h2>
                    <h2>Matlab</h2>
                    <h2>Multicim</h2>
                    <h2>Word, Power point & Excel </h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
