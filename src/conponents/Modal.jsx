import React from 'react'
import { Button } from 'antd';
import { useState } from 'react';
import { Modal } from 'antd';
import image5 from '../assets/image5.svg'
import image6 from '../assets/image6.svg'
import {MdKeyboardArrowRight} from 'react-icons/md'

const ModalO = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <Button type="text" onClick={showModal}>
          <button className='px-[27px] py-[15px] rounded-[10px] bg-[#A02279] text-[16px] text-white'>Connect wallet</button>
        </Button>
        <Modal title={<h2 className='font-[700] text-[24px] m-0'>Connect Wallet</h2>} footer={null} open={isModalOpen} onOk={handleOk}  bodyStyle={{height:'100%'}} onCancel={handleCancel} width={600}>
        <p className='m-0'>Choose your preferred wallet:</p>
        <ul className='py-[12px]'>
          <li className='flex items-center justify-between border border-[#CFD8DC] bg-[#F8F9FA] rounded-[8px] p-[12px] mb-[1rem]' >
            <div className='flex items-center'>
              <img src={image5} alt="" />
              <p className='m-0 pl-[16px] font-[600] text-[18px]'>Metamask</p>
            </div>
            <MdKeyboardArrowRight size={20} color='#959DA6' />
          </li>
          <li className='flex items-center justify-between border border-[#CFD8DC] bg-[#F8F9FA] rounded-[8px] p-[12px] '>
            <div className='flex items-center'>
              <img src={image6} alt="" />
              <p className='m-0 pl-[16px] font-[600] text-[18px]'>WalletConnect</p>
            </div>
            <MdKeyboardArrowRight size={20} color='#959DA6' />
          </li>
        </ul>
      </Modal>
    </div>
  )
}

export default ModalO