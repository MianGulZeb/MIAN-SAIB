import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const contactus = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-black'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Contact Us.</h1>
        <ul>
          <li>0333966702</li>
          <li>0333966705</li>
          <li>0333976702</li>
          <li>0333966701</li>
        </ul>
        <div className='flex justify-between md:w-[35%] my-6'>
            <FaFacebookSquare size={20} />
            <FaInstagram size={20} />
            <FaTwitterSquare size={20} />
           
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-[#00df9a]'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#00df9a]'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#00df9a]'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#00df9a]'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
            <li className='py-2 text-sm'>ITSolution</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default contactus;
