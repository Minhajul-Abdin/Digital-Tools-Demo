import React from 'react';
import banner from '../assets/banner.png';
import play from '../assets/Play.png';
import { PiRecordFill } from "react-icons/pi";




const Hero = () => {
    return (
        <div className='md:w-[80%] mx-auto'>
            <div className="hero py-15">
  <div className="hero-content w-[90%] flex-col lg:flex-row-reverse md:gap-20">
    <img
      src={banner}
      className=""
    />
    <div className='w-[95%] md:w-[80%] lg:w-fit'>
      <span className="flex items-center color-text w-fit bg-[#E1E7FF] py-2.5 px-4 rounded-full my-auto text-[12px] md:text-[14px]"><PiRecordFill className='inline mr-1' /> New: AI-Powered Tools Available</span>
      <h1 className="mt-5 text-5xl md:text-7xl font-bold text-[#101727]">Supercharge Your Digital Workflow</h1>
      <p className="py-6 text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity <br/>
software-all in one place. Start creating faster today.<br/>Explore Products
      </p>
      <button className="btn text-white rounded-full background-grad mr-2.5">Explore Products</button>
      <button className="btn text-grad rounded-full border-for-btn bg-none"><img src={play} /> Watch Demo</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;