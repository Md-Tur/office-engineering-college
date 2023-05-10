import React from 'react';

const EstablishingTeaching = () => {

    const establishes = [
        {
            id: 1,
            name: 'অ্যাডভান্সড সার্টিফিকেট কোর্স (১ বছর মেয়াদি) শিক্ষাক্রম পরিচালনা সংক্রান্ত নীতিমালা-২০২১'
        },
        {
            id: 2,
            name: 'এসএসসি (ভোকেশনাল) / দাখিল (ভোকেশনাল) শিক্ষাক্রমের নীতিমালা - ২০২০'
        },
        {
            id: 3,
            name: 'এইচএসসি (বিএম) শিক্ষাক্রমের নীতিমালা - ২০২০'
        },
        {
            id: 4,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের নীতিমালা - ২০২০'
        },
        {
            id: 5,
            name: 'ডিপ্লোমা ইন এগ্রিকালচার/ফিশারিজ শিক্ষাক্রমের নীতিমালা - ২০২০'
        },
        {
            id: 6,
            name: 'ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের নীতিমালা - ২০২০'
        },
        {
            id: 7,
            name: 'জাতীয় দক্ষতামান বেসিক (৩৬০ ঘন্টা মেয়াদি) শিক্ষাক্রমের নীতিমালা - ২০২০'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold underline'>বিভিন্ন শিক্ষাক্রমের প্রতিষ্ঠান স্থাপন, পাঠদান ও স্বীকৃতির নীতিমালা</h1>
            {
                establishes.map(establish =>
                    <div key={establish.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{establish.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default EstablishingTeaching;