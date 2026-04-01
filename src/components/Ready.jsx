import React from 'react';

const Ready = () => {
    return (
        <div className='background-grad py-30 text-center'>
            <div className='w-[80%] mx-auto'>
                <div className='items-title'>
        <div className="hero ">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-4xl font-bold">Ready to Transform Your Workflow?</h1>
                    <p className="py-6 ">
                    Join thousands of professionals who are already using Digitools to work smarter.<br/> Start your free trial today.</p>
                </div>
            </div>
        </div>
        <div>
            <button className='py-3 px-5 bg-white rounded-full text-purple-500 cursor-pointer mr-3'>Explore Products</button>
            <button className='py-3 px-5 bg-transparent rounded-full text-white border-1 cursor-pointer mr-3'>View Pricing</button> 
        </div>
        <p className="py-6 ">
            14-day free trial • No credit card required • Cancel anytime
        </p>
                
    </div>
            </div>
        </div>
    );
};

export default Ready;