import React from 'react';

const FourthPart = () => {

    const fourthPart = [
        {
            id: 1,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জি ২০১৬ -২০১৭'
        },
        {
            id: 2,
            name: 'SSC/Dakhil Voc Academic Calender-2017'
        },
        {
            id: 3,
            name: 'ডিপ্লোমা ইন এগ্রিকালচার, ফিসারিজ ও লাইভস্টক শিক্ষাক্রম শিক্ষা বর্ষপঞ্জি ২০১৬-২০১৭'
        },
        {
            id: 4,
            name: 'Diploma Engg. Academic Calender-2016-17'
        },
        {
            id: 5,
            name: 'HSC BM Academic Calender-2016-17'
        },
        {
            id: 6,
            name: 'HSC Voc Academic Calender-2016-17'
        }
    ]

    return (
        <div className='py-10'>
            {
                fourthPart.map(fourth =>
                    <p key={fourth.id} className='text-base py-1 text-gray-500 hover:text-black hover:cursor-pointer'>{fourth.name}</p>
                )
            }
        </div>
    );
};

export default FourthPart;