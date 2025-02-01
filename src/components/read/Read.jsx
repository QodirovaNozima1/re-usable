import React from 'react'
import card1 from '../../assets/Thumbnail.png'
import card2 from '../../assets/Thumbnail (1).png'
import card3 from '../../assets/Thumbnail (2).png'
import card4 from '../../assets/Thumbnail (3).png'


const Read = () => {
  return (
    <div className='container'>
        <div className="flex gap-3 items-center pt-14 pb-7">
            <h2 className='text-4xl font-medium'>Read Our News</h2>
            <p className='event__line'>_______________________________________________________________________________</p>
        </div>
        <div className="flex news__wrapper gap-[24px] pb-10">
                        <div className="news__card flex flex-col gap-3 items-center w-[280px]">
                                <img className="w-full "src={card1} alt="" />
                            <div className="flex flex-col gap-[10px]">
                                <h2 className='text-[20px] font-medium'>Caring for the present is caring for the future</h2>
                                <p className='text-[14px] font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                            </div>
                        </div>
                        <div className="news__card flex flex-col gap-3 items-center w-[280px]">
                                <img className="w-full "src={card2} alt="" />
                            <div className="flex flex-col gap-[10px]">
                                <h2 className='text-[20px] font-medium'>Caring for the present is caring for the future</h2>
                                <p className='text-[14px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                            </div>
                        </div>
                        <div className="news__card flex flex-col gap-3 items-center w-[280px]">
                                <img className="w-full "src={card3} alt="" />
                            <div className="flex flex-col gap-[10px]">
                                <h2 className='text-[20px] font-medium'>Caring for the present is caring for the future</h2>
                                <p className='text-[14px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                            </div>
                        </div>
                        <div className="news__card flex flex-col gap-3 items-center w-[280px]">
                                <img className="w-full "src={card4} alt="" />
                            <div className="flex flex-col gap-[10px]">
                                <h2 className='text-[20px] font-medium'>Caring for the present is caring for the future</h2>
                                <p className='text-[14px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Read