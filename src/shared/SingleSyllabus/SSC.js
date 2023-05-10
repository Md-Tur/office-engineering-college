import React from 'react';
import { Link } from 'react-router-dom';

const SSC = () => {

    const sscs = [
        {
            id: 1,
            name: 'এসএসসি (ভোকেশনাল), দাখিল (ভোকেশনাল) কোর্স স্ট্রাকচার, সিলেবাস, প্রবিধান - ২০১৭',
            link: ''
        },
        {
            id: 2,
            name: 'এসএসসি (ভোকেশনাল) দাখিল (ভোকেশনাল) সিলেবাস',
            link: ''
        },
        {
            id: 3,
            name: 'এসএসসি (ভোকেশনাল) ও দাখিল (ভোকেশনাল) শিক্ষাক্রমে এনটিভিকিউএফ এলাইনকৃত ১৩টি ট্রেডের সিলেবাস',
            link: ''
        },
        {
            id: 4,
            name: 'এসএসসি (ভোকেশনাল), দাখিল (ভোকেশনাল) কোর্স স্ট্রাকচার, সিলেবাস, প্রবিধান - ২০১৩',
            link: ''
        },
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>এসএসসি (ভোকেশনাল) দাখিল (ভোকেশনাল)</h1>
            {
                sscs.map(ssc =>
                    <div key={ssc.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black pl-2'>
                            <Link to={ssc.link}>{ssc.name}</Link>
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default SSC;