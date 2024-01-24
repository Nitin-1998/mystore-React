import React from 'react'
import Headphone from '../../assets/Products/headphone.png'
import BrowsButton from '../Buttons/BrowsButton'

const Banner = ({src, bgColor,title1,title2}) => {
  return (
    <>
        <main className='dark:bg-slate-900 py-20  '>
            <div className='container  '>
                <div className={`${bgColor} grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center rounded-2xl py-6`}>
                    {/* text area 1 */}
                    <div className='text-white  w-full container '>
                        <p data-aos="fade-right">30% OFF</p>
                        <h1 data-aos="zoom-out" className='text-3xl font-bold md:text-7xl '>{title1}</h1>
                        <p data-aos="fade-up">10 Jan to 28 Jan</p>
                    </div>
                    {/* Image Area */}
                    <div data-aos="zoom-in">
                        <img className=' object-cover  w-[250px] md:w-[240px]  scale-105 sm:scale-150 ' src={src} />
                    </div>
                    {/* text area 2 */}
                    <div data-aos="fade-up" className='text-white w-full container'>
                        <p >Air Solo Bass</p>
                        <h1 className='text-3xl font-bold md:text-5xl  '>{title2}</h1>
                        <p className=' line-clamp-1 md:line-clamp-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis</p>
                        <BrowsButton title="Shop Now" btnBgColor="bg-[#fff]" btnTxtColor="text-[#F42C37]" />
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Banner