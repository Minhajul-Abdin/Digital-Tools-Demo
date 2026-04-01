import React, { useState } from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from 'react-toastify';

const ToolCard = ({t, carts, setCarts}) => {
    const [isSubed, setIsSub] = useState(false);
    const handleSub = () => {
        setIsSub(true);

        const isFound = carts.find(item => item.id === t.id);

        if(isFound){
            toast.error("Tool Already Added in Cart!!");
            return;
        }
        setCarts([...carts, t]);
        toast.success("Tool Added To Cart!");
    }
    return (
        <div className='bg-white shadow-box p-6 rounded-2xl'>
            <div className='flex justify-between'>
                <div className='shadow-box-img p-4 rounded-full bg-white'><img className='w-7' src={t.icon}/></div>
                <div><p className={`rounded-full py-1.5 px-3 ${t.tagType == "best seller" ? 'bg-amber-200 text-amber-600' : t.tagType == 'popular' ? 'bg-purple-200 text-purple-600' : 'bg-green-200 text-green-600'}`}>{t.tagType}</p></div>
            </div>
                <h2 className='text-2xl py-4 font-bold  text-[#101727]'>{t.name}</h2>
                <p className='text-[#627382]'>{t.description}</p>
                <h2 className='text-2xl pb-4 font-bold   text-[#101727]'>${t.price}<span className='text-[#627382] text-lg font-semibold'>/{t.period == 'monthly' ? "Mo" : t.period == 'yearly' ? "Yr" : "One-Time"}</span></h2>
                <div className='space-y-2'>
                    {
                        t.features.map((list) => (<p key={list}><IoCheckmarkSharp className='text-green-600 inline' /> {list}</p>))
                    }
                </div>
                <button onClick={handleSub} className={`mt-6 btn w-full ${isSubed == false ? 'background-grad' :  'bg-green-500 text-white'} border-none rounded-full`}>
                    {isSubed ? "Added to Cart" : "Buy Now"}
                </button>
            </div>
    );
};

export default ToolCard;