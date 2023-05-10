import React from 'react';

const TeachingInspection = () => {

    const inspections = [
        {
            id: 1,
            name: 'এসএসসি ভোকেশনাল, দাখিল ভোকেশনাল শিক্ষাক্রমের প্রতিষ্ঠান পাঠদানের পরিদর্শন প্রতিবেদন'
        },
        {
            id: 2,
            name: 'জাতীয় দক্ষতামান বেসিক ট্রেড (৩৬০) শিক্ষাক্রম পরিচালনার পাঠদান অনুমোদনের জন্য পরিদর্শন প্রতিবেদন'
        },
        {
            id: 3,
            name: 'এইচএসসি বিএম শিক্ষাক্রমের প্রতিষ্ঠান প্রাথমিক পাঠদানের পরিদর্শন প্রতিবেদন'
        },
        {
            id: 4,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের প্রতিষ্ঠান পাঠদান অনুমতি নিমিত্ত পরিদর্শন প্রতিবেদন'
        },
        {
            id: 5,
            name: 'সার্টিফিকেট ইন মেডিকেল ও এনিম্যাল হেলথ্  (এক বছর মেয়াদি) পরিচালনার প্রাথমিক পাঠদানের  পরিদর্শন প্রতিবেদন'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>পাঠদান পরিদর্শন সম্পর্কিত ফরম</h1>
            {
                inspections.map(inspection =>
                    <div key={inspection.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{inspection.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default TeachingInspection;