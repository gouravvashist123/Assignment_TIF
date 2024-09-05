import React from 'react'
import img1 from './images/img2.svg'

const AboutUs = () => {
  return (
    <div className=' p-4 py-10 flex justify-center bg-slate-200'>
      <div className='w-[80vw] bg-slate-200 flex justify-center items-center '>
        <div className='w-[50%] flex justify-center'>
          <img src={img1} alt="" className='h-[30rem] w-[20rem]' />
        </div>
        <div className='flex flex-col gap-5 items-start w-[50%]'>
          <h1 className='font-bold text-3xl text-[#0E2368]'>About Us</h1>
          <p className='text-sm text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <button className='p-2 bg-red-500 text-white rounded-full'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

