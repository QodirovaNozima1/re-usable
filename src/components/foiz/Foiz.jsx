import React from 'react'
import './Foiz.css'
import chart from '../../assets/Chart.png'
import cub from '../../assets/green.png'
import cub1 from '../../assets/blond.png'
import cub2 from '../../assets/purle.png'
import cub3 from '../../assets/yellow.png'
import cub4 from '../../assets/pink.png'

const Foiz = () => {
  return (
    <div className='bg-black mt-16 mb-14 pb-16 pt-16'>
        <div className="container foiz flex justify-between">
            <div className="flex foiz__title flex-col text-white justify-center w-[40%] gap-10">
                <h2 className='text-5xl font-bold'>How we spend your donations and where it goes</h2>
                <p>We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
                <div className="flex foiz__desc flex-wrap  w-[550px] gap-2">
                    <div className="flex gap-2.5"><img src={cub} alt="" /><p>40% planting trees</p></div>
                    <div className="flex gap-2.5"><img src={cub1} alt="" /><p>35% cleanliness program</p></div>
                    <div className="flex gap-2.5"><img src={cub2} alt="" /><p>40% planting trees</p></div>
                    <div className="flex gap-2.5"><img src={cub3} alt="" /><p>10% animal safety</p></div>
                    <div className="flex gap-2.5"><img src={cub4} alt="" /><p>5% feeding the poor</p></div>
                </div>
            </div>

            <div className="w-[40%]">
                <img src={chart} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Foiz