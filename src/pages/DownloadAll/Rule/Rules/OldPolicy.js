import React from 'react';

const OldPolicy = () => {

    const olds = [
        {
            id: 1,
            name: 'পুরাতন বিভিন্ন শিক্ষাক্রমের নীতিমালা-২০১৭'
        },
        {
            id: 2,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের নীতিমালা-২০১৮'
        },
        {
            id: 3,
            name: 'ডিপ্লোমা ইন ফিসারিজ শিক্ষাক্রমের নীতিমালা-২০০৯'
        },
        {
            id: 4,
            name: 'ডিপ্লোমা ইন এগ্রিকালচার শিক্ষাক্রমের নীতিমালা-২০০৮'
        },
        {
            id: 5,
            name: 'ডিপ্লোমা ইন মেডিকেল টেকনোলজি নীতিমালা-২০১১'
        },
        {
            id: 6,
            name: 'বেসিক ট্রেড কোর্স (৩৬০ ঘন্টা) নীতিমালা-২০১৬'
        },
        {
            id: 7,
            name: 'বেসরকারি কারিগরি শিক্ষা প্রতিষ্ঠান স্থাপন/পাঠদান/স্বীকৃতি প্রদানের নীতিমালা-খসড়া'
        },
        {
            id: 8,
            name: 'পুরাতন- এসএসসি (ভোক) কারিকুলাম এ্যাফিলিয়েশন নীতিমালা'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold underline'>বিভিন্ন শিক্ষাক্রমের পুরনো নীতিমালা</h1>
            {
                olds.map(old =>
                    <div key={old.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{old.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default OldPolicy;