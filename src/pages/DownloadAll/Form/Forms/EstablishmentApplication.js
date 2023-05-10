import React from 'react';

const EstablishmentApplication = () => {

    const establishments = [
        {
            id: 1,
            name: 'এসএসসি ভোকেশনাল শিক্ষাক্রমের প্রতিষ্ঠান স্থাপন (স্বতন্ত্র) আবেদন ফরম'
        },
        {
            id: 2,
            name: 'এইচএসসি বিএম শিক্ষাক্রমের প্রতিষ্ঠান স্থাপন (স্বতন্ত্র) আবেদন ফরম'
        },
        {
            id: 3,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের প্রতিষ্ঠান স্থাপন আবেদন ফরম'
        },
        {
            id: 4,
            name: 'ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের প্রতিষ্ঠান স্থাপনের পূর্বানুমতির আবেদন ফরম'
        },
        {
            id: 5,
            name: 'ডিপ্লোমা ইন এগ্রিকালচার ও ফিসারিজ  শিক্ষাক্রমের প্রতিষ্ঠান স্থাপনের অনুমতি আবেদন ফরম'
        }
    ]

    return (
        <div>
            <h1 className='text-lg font-semibold'>প্রতিষ্ঠান স্থাপন আবেদন সংক্রান্ত ফরম</h1>
            {
                establishments.map(establishment =>
                    <div key={establishment.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{establishment.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default EstablishmentApplication;