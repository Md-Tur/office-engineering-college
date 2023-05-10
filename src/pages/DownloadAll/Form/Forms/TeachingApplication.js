import React from 'react';

const TeachingApplication = () => {

    const teachings = [
        {
            id: 1,
            name: 'এসএসসি ভোকেশনাল শিক্ষাক্রমের প্রতিষ্ঠান পাঠদানের আবেদন ফরম'
        },
        {
            id: 2,
            name: 'দাখিল ভোকেশনাল শিক্ষাক্রমের প্রতিষ্ঠান পাঠদানের আবেদন ফরম'
        },
        {
            id: 3,
            name: 'জাতীয় দক্ষতামান বেসিক ট্রেড (৩৬০) শিক্ষাক্রম পরিচলনার জন্য পাঠদানের আবেদন ফরম'
        },
        {
            id: 4,
            name: 'এইচএসসি বিএম শিক্ষাক্রমের প্রতিষ্ঠান প্রাথমিক পাঠদানের আবেদন ফরম'
        },
        {
            id: 5,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের প্রাথমিক পাঠদানের আবেদন ফরম'
        },
        {
            id: 6,
            name: 'ডিপ্লোমা ইন এগ্রিকালচার ও ফিসারিজ  শিক্ষাক্রমের প্রাথমিক পাঠদানের আবেদন ফরম'
        },
        {
            id: 7,
            name: 'সার্টিফিকেট ইন মেডিকেল টেকনোলজি (এক বছর মেয়াদি) পরিচালনার জন্য আবেদন ফরম'
        },
        {
            id: 8,
            name: 'সার্টিফিকেট ইন এনিম্যাল হেলথ্ (এক বছর মেয়াদি) পরিচালনার জন্য স্বীকৃতির আবেদন ফরম'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>পাঠদানের আবেদন সম্পর্কিত ফরম</h1>
            {
                teachings.map(teaching =>
                    <div key={teaching.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{teaching.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default TeachingApplication;