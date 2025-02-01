import React from 'react'
import './Awards.css'
import avard from '@/assets/Award badge.png'
import avard1 from '@/assets/Award badge (1).png'
import avard2 from '@/assets/Award badge (2).png'
import avard3 from '@/assets/Award badge (3).png'

const avards = () => {
  return (
    <div className='container flex items-center flex-col gap-7'>
      <h2 className='text-5xl font-bold'>Awards & Recognitions</h2>
      <div className="flex gap-[208px] items-center justify-center award mb-20">
        <div className="flex flex-col gap-4 items-center">
          <img src={avard} alt="" />
          <h2 className='text-2xl font-bold'>2021</h2>
          <p className='font-bold'>Best NGO Award</p>
          <p>Berlin, Germany</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src={avard1} alt="" />
          <h2 className='text-2xl font-bold'>2014</h2>
          <p className='font-bold'>Best NGO Award</p>
          <p>Berlin, Germany</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src={avard2} alt="" />
          <h2 className='text-2xl font-bold'>2018</h2>
          <p className='font-bold'>Best NGO Award</p>
          <p>Berlin, Germany</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src={avard3} alt="" />
          <h2 className='text-2xl font-bold'>2016</h2>
          <p className='font-bold'>Best NGO Award</p>
          <p>Berlin, Germany</p>
        </div>
      </div>
    </div>
  )
}

export default avards