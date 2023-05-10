import React from 'react';

const TechnologyChange = () => {

    const technologies = [
        {
            id: 1,
            name: 'এসএসসি ভোক, দাখিল ভোক শিক্ষাক্রম ট্রেড সংযোজনের পূর্বানুমতির আবেদন ফরম'
        },
        {
            id: 2,
            name: 'জাতীয় দক্ষতামান বেসিক (৩৬০ঘন্টা মেয়াদী) শিক্ষাক্রমের পরিচালনার জন্য ট্রেড বৃদ্ধি/আসন বৃদ্ধি/নাম/স্থান পরিবর্তনের আবেদনপত্র'
        },
        {
            id: 3,
            name: 'এইচএসসি (বিএম) শিক্ষাক্রমের স্পেশালাইজেশন সংযোজন/ভূতাপেক্ষভাবে স্পেশালাইজেশন সংযোজন/নাম পরিবর্তন/স্থান পরিবর্তনের আবেদন ফরম'
        },
        {
            id: 4,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের টেকনোলজি সংযোজন/নাম পরিবর্তন/স্থান পরিবর্তনের আবেদন ফরম'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>ট্রেড/টেকনোলজি/স্পেশালাইজেশন সংযোজন/আসন বৃদ্ধি/নাম/স্থান পরিবর্তনের আবেদন সম্পর্কিত ফরম</h1>
            {
                technologies.map(technology =>
                    <div key={technology.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{technology.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default TechnologyChange;