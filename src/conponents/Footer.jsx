import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import ri from '../assets/ri.svg'
import group3 from '../assets/group3.svg'

const Footer = () => {
  return (
    <div className='text-[14px] bg-black text-white py-[62px] lg:px-[100px] px-[20px]'>
      <div className='flex flex-col gap-5 lg:flex-row justify-between mb-[35px]'>
        <div className='flex flex-col justify-between'>
          <div>
            <img src={group3} alt="" />
          </div>
          <div className=' hidden lg:flex w-[70%] justify-between'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row max-w-[698px] lg:w-[698px] gap-5 justify-between'>
          <div>
            <h5 className=' text-white mb-[10px] text-[18px] font-[700]'>Community</h5>
            <ul>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div>
            <h5 className='text-white mb-[10px] text-[18px] font-[700]'>Places</h5>
            <ul>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>
          </div>
          <div>
            <h5 className='text-white mb-[10px] text-[18px] font-[700]'>About us</h5>
            <ul>
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex'>
        <img src={ri} alt="" />
        <span>2022 Metabnb</span>
      </div>
    </div>
  )
}

export default Footer





// 
// 
// 
// 
// 
// 
// 
//  
//  
// 
// 
// 
// 
// 
// 
// 