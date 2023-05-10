import React from 'react';

const InspectionEstablishment = () => {

    const inspections = [
        {
            id: 1,
            name: 'এসএসসি ভোকেশনাল শিক্ষাক্রমের প্রতিষ্ঠান স্থাপনের পরিদর্শন প্রতিবেদন'
        },
        {
            id: 2,
            name: 'এইচএসসি বিএম শিক্ষাক্রমের প্রতিষ্ঠান স্থাপনের পরিদর্শন প্রতিবেদন'
        },
        {
            id: 3,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের প্রতিষ্ঠান স্থাপনের নিমিত্ত পরিদর্শন প্রতিবেদন'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>প্রতিষ্ঠান স্থাপন পরিদর্শন সংক্রান্ত ফরম</h1>
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

export default InspectionEstablishment;