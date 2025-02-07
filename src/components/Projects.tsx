import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id:0,
        title: "Scholarship Form",
        desc:"A simple University based Scholarship Form using HTML & CSS",
        img:"/scholarship form.png",
        tags:["HTML", "CSS"],
    },

    {
        id:1,
        title: "Resume",
        desc:"A Resume showing details and skills related to me using Typscript, HTML, CSS ",
        img:"/resume.png",
        tags:["Typscript", "HTML", "CSS"],
    },

    {
        id:2,
        title: "Dynamic Resume",
        desc:"A Resume which is dynamic in nature and generate resume very fastly i used Typscript, HTML, CSS for making this project so great ",
        img:"/dynamic resume.png",
        tags:["Typscript", "HTML", "CSS"],
    }
]
const projects = () => {
  return (
    <div id = 'Projects' className='container pt-32' data-aos="fade-right">
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default projects
