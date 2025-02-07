import React from 'react'
import Image from 'next/image';

interface propsType {
    title: string;
    desc:  string;
    img:  string;
    tags:  string[];
}

const Card: React.FC<propsType> = ({title, desc, img, tags}) => {
  return (
    <div data-aos="flip-left" className='border border-accent w-[300px] sm:w-[300px]'>
      <div>
        <Image className='w-[300px] sm:w-[300px] h-auto' 
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      </div>

<div className='p-4 -space-y-4'>
    <div className='text-8l underline font-semibold'>{title}</div> <br />
    <div>{desc}</div><br />
    <div>
        {tags.map((el) => (
            <div className='tags' key={el}>
              {el}
            </div>))}
    </div>
</div>

    </div>
  )
}

export default Card
