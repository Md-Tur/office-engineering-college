import React from 'react';
import { Link } from 'react-router-dom';

const HSC = () => {

    const hscs = [
        {
            id: 1,
            name: 'এইচএসসি (বিএমটি), (ভোক), ডিপ্লোমা ইন কমার্স সিলেবাস, কোর্স স্ট্রাকচার, প্রবিধান-২০২২',
            link: 'https://drive.google.com/drive/folders/1GlRZbbGcNj1dWjsJWPVakB11_cIK4-BS'
        },
        {
            id: 2,
            name: 'এইচএসসি (বিএমটি), (ভোক), ডিপ্লোমা ইন কমার্স বোর্ড চূড়ান্ত পরীক্ষা-২০২৩ এর পূর্নবিন্যাসকৃত সিলেবাস',
            link: 'https://drive.google.com/drive/folders/1qPxCTWXQWxQfWJ-rgUt-bpjxdYd5TRAZ'
        },
        {
            id: 3,
            name: 'এইচএসসি পর্যায়ে ২০২৩-২৪ শিক্ষাবর্ষ হতে বাংলা ও ইংরেজি বিষয়ের কার্যকর সিলেবাস',
            link: 'https://drive.google.com/drive/folders/1N_L9Es97_iUptt1kF0qXLmjkOPxqN5kn'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>এইচএসসি (বিএমটি), (ভোক), ডিপ্লোমা ইন কমার্স</h1>
            {
                hscs.map(hsc =>
                    <div key={hsc.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black pl-2'>
                            <Link to={hsc.link}>{hsc.name}</Link>
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default HSC;