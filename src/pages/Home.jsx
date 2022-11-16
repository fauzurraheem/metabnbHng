import React from 'react'
import group1 from '../assets/group1.png'
import group2 from '../assets/group2.png'
import frame1 from '../assets/frame1.svg'
import frame2 from '../assets/frame2.svg'
import frame3 from '../assets/frame3.svg'
import star from '../assets/star.svg'
import pic from '../assets/pic.png'
import frame00 from '../assets/Frame00.svg'
import frame01 from '../assets/Frame01.svg'
import frame02 from '../assets/Frame02.svg'
import frame03 from '../assets/Frame03.svg'
import frame4 from '../assets/Frame4.svg'
import frame5 from '../assets/Frame5.svg'
import frame6 from '../assets/Frame6.svg'
import frame7 from '../assets/Frame7.svg'


const Home = () => {
  return (
    <div className=' text-[#434343] font-[400]'>
      <div className='flex flex-col md:flex-row justify-between items-center py-[43px] lg:px-[100px] px-[20px] gap-10 lg:gap-0'>
        <div className='md:w-[60%]'>
          <h2 className='lg:text-[56px] text-[45px] '>Rent a  <span className='text-[#A02279] font-[500]'>Place</span>  away from <span className='text-[#A02279] font-[500]'>Home</span>  in the <span className='text-[#A02279] font-[500]'>Metaverse</span> </h2>
          <p className='lg:text-[24px] sm:text-[20px] text-[18px] mt-[30px]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <div className='flex w-[95%] mt-[48px]'>
            <input type="text" placeholder='Search for location' className='w-[65%] h-[64px] border border-[#A3A3A3] rounded-l-[8px] px-[15px] py-[18px] outline-none bg-[#f7f7f7]'/>
            <button className='w-[35%] h-[64px] bg-[#A02279] rounded-r-[8px]' >Search</button>
          </div>
        </div>
        <div className='lg:w-[40%] '>
          <img src={group1}  alt='group1' className='sm:h-[450px]'/>
        </div>
      </div>
      <div className='bg-[#A02279] flex justify-between lg:px-[100px] px-[20px] py-[15px] mb-[57px] mt-[20px]'>
        <img src={frame1} alt="" className='w-[60px] sm:w-[150px] lg:w-[215px]' />
        <img src={frame2} alt="" className='w-[60px] sm:w-[150px] lg:w-[215px]'  />
        <img src={frame3} alt=""  className='w-[60px] sm:w-[150px] lg:w-[215px]' />
      </div>
      <div className='lg:px-[100px] px-[20px]'>
        <h1 className='text-center font-[700] lg:text-[48px] text-[30px] text-black  mb-[43px]'>Inspiration for your next adventure</h1>
        <div className='grid grid-col-1 overflow-auto gap-[24px] sm:grid-cols-2 lg:grid-cols-4 justify-items-center'>
          <div className='max-w-[292px] p-[16px] text-[12px] border border-[#D7D7D7] rounded-[15px]'>
            <img src={frame4} alt="" />
            <div className=' flex justify-between mt-[12px]'>
              <span>Desert king</span>
              <span><span className='font-[700]'>1MBT</span> per night</span>
            </div>
            <div className=' flex justify-between mt-[8px]'>
              <span>2345km away</span>
              <span className='text-right'>available for 2weeks stay</span>
            </div>
            <img src={star} alt="" className='mt-[9px]' />
          </div>
          <div className='max-w-[292px] p-[16px] text-[12px] border border-[#D7D7D7] rounded-[15px]'>
            <img src={frame5} alt="" />
            <div className=' flex justify-between mt-[12px]'>
              <span>Desert king</span>
              <span><span className='font-[700]'>1MBT</span> per night</span>
            </div>
            <div className=' flex justify-between mt-[8px]'>
              <span>2345km away</span>
              <span className='text-right'>available for 2weeks stay</span>
            </div>
            <img src={star} alt="" className='mt-[9px]' />
          </div>
          <div className='max-w-[292px] p-[16px] text-[12px] border border-[#D7D7D7] rounded-[15px]'>
            <img src={frame6} alt="" />
            <div className=' flex justify-between mt-[12px]'>
              <span>Desert king</span>
              <span><span className='font-[700]'>1MBT</span> per night</span>
            </div>
            <div className=' flex justify-between mt-[8px]'>
              <span>2345km away</span>
              <span className='text-right'>available for 2weeks stay</span>
            </div>
            <img src={star} alt="" className='mt-[9px]' />
          </div>
          <div className='max-w-[292px] p-[16px] text-[12px] border border-[#D7D7D7] rounded-[15px]'>
            <img src={frame7} alt="" />
            <div className=' flex justify-between mt-[12px]'>
              <span>Desert king</span>
              <span><span className='font-[700]'>1MBT</span> per night</span>
            </div>
            <div className=' flex justify-between mt-[8px]'>
              <span>2345km away</span>
              <span className='text-right'>available for 2weeks stay</span>
            </div>
            <img src={star} alt="" className='mt-[9px]' />
          </div>
          <div className='max-w-[292px] p-[16px] text-[12px] border border-[#D7D7D7] rounded-[15px]'>
            <img src={frame00} alt="" />
            <div className=' flex justify-between mt-[12px]'>
              <span>Desert king</span>
              <span><span className='font-[700]'>1MBT</span> per night</span>
            </div>
            <div className=' flex justify-between mt-[8px]'>
              <span>2345km away</span>
              <span className='text-right'>available for 2weeks stay</span>
            </div>
            <img src={star} alt="" className='mt-[9px]' />
          </div>
          <div className='max-w-[292px] p-[16px] text-[12px] border border-[#D7D7D7] rounded-[15px]'>
            <img src={frame01} alt="" />
            <div className=' flex justify-between mt-[12px]'>
              <span>Desert king</span>
              <span><span className='font-[700]'>1MBT</span> per night</span>
            </div>
            <div className=' flex justify-between mt-[8px]'>
              <span>2345km away</span>
              <span className='text-right'>available for 2weeks stay</span>
            </div>
            <img src={star} alt="" className='mt-[9px]' />
          </div>
          <div className='max-w-[292px] p-[16px] text-[12px] border border-[#D7D7D7] rounded-[15px]'>
            <img src={frame02} alt="" />
            <div className=' flex justify-between mt-[12px]'>
              <span>Desert king</span>
              <span><span className='font-[700]'>1MBT</span> per night</span>
            </div>
            <div className=' flex justify-between mt-[8px]'>
              <span>2345km away</span>
              <span className='text-right'>available for 2weeks stay</span>
            </div>
            <img src={star} alt="" className='mt-[9px]' />
          </div>
          <div className='max-w-[292px] p-[16px] text-[12px] border border-[#D7D7D7] rounded-[15px]'>
            <img src={frame03} alt="" />
            <div className=' flex justify-between mt-[12px]'>
              <span>Desert king</span>
              <span><span className='font-[700]'>1MBT</span> per night</span>
            </div>
            <div className=' flex justify-between mt-[8px]'>
              <span>2345km away</span>
              <span className='text-right'>available for 2weeks stay</span>
            </div>
            <img src={star} alt="" className='mt-[9px]' />
          </div>
        </div>
      </div>
      <div className='py-[50px] md:py-[100px] lg:px-[100px] px-[20px] bg-[#A02279] flex flex-col md:flex-row gap-10 text-white mt-[53px]'>
        <div className='md:w-[50%] pt-[1rem]'>
          <h2 className='font-[700] text-white lg:text-[48px] text-[30px] mb-[35px]'>Metabnb NFTs</h2>
          <p className='lg:text-[18px] text-[16px]'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          <button className='bg-white text-[#A02279] py-[9px] px-[13px] rounded-[8px] text-[16px] mt-[67px] w-[156px] text-left'>Learn more</button>
        </div>
        <div className='flex justify-center'>
          <img src={group2} alt="" className='sm:w-[70%] md:w-[100%]' />
        </div>
      </div>
    </div>
  )
}

export default Home


// 
// 
// Desert king
// 1MBT per night
// Desert king
// 1MBT per night
// Desert king
// 1MBT per night
// 2345km away
// available for 2weeks stay
// 2345km away
// available for 2weeks stay
// 2345km away
// available for 2weeks stay
// 2345km away
// available for 2weeks stay
// Desert king
// 1MBT per night
// Desert king
// 1MBT per night
// Desert king
// 1MBT per night
// Desert king
// 1MBT per night
// 2345km away
// available for 2weeks stay
// 2345km away
// available for 2weeks stay
// 2345km away
// available for 2weeks stay
// 2345km away
// available for 2weeks stay