import React from 'react'
import './Events.css'
import arrow from '../../assets/Arrow button.png'

const Events = () => {
    return (
        <div className='container'>
            <div className="flex gap-3 items-center pt-14 pb-7">
                <h2 className='text-4xl font-medium'>Our Events</h2>
                <p className='event__line'>______________________________________________________________________________________________________________________</p>
            </div>
            <div className="flex justify-between event__box items-center  mb-20  event">
                <div className="event__card flex gap-4 items-center justify-center rounded-sm w-[600px] h-[191px] bg-[#BEF3C0]">
                    <div className="flex flex-col">
                        <p className='text-5xl font-medium'>23</p>
                        <p>Sep</p>
                    </div>
                    <div className="flex flex-col w-[400px]">
                        <p>Next Events  ______________________</p>
                        <p className='text-2xl font-bold'>Say no to plastic usage and save the planet</p>
                    </div>
                    <div className="">
                        <img src={arrow} alt="" />
                    </div>
                </div>
                <div className="event__card flex gap-7 items-center justify-center rounded-sm w-[600px] h-[191px] bg-[#BEF3C0]">
                    <div className="flex flex-col">
                        <p className='text-5xl font-medium'>23</p>
                        <p>Sep</p>
                    </div>
                    <div className="flex flex-col w-[400px]">
                        <p>Next Events  ______________________</p>
                        <p className='text-2xl font-bold'>Say no to plastic usage and save the planet</p>
                    </div>
                    <div className="">
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events