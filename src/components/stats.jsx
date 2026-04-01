import React from 'react';

const Stats = () => {
    return (
        <div className='back py-15'>
            <div className="w-[90%] mx-auto space-y-5 flex flex-wrap md:flex md:flex-nowrap md:w-[80%] text-white">
  <div className="stat place-items-center">
    <div className="stat-value text-6xl">50K+</div>
    <div className="stat-desc text-white text-2xl">Active Users</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-value text-6xl">200+</div>
    <div className="stat-desc text-white text-2xl">Premium Tools</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-value text-6xl">4.9</div>
    <div className="stat-desc text-white text-2xl">Rating</div>
  </div>
</div>
        </div>
    );
};

export default Stats;