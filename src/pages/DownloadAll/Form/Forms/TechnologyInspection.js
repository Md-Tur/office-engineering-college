import React from 'react';

const TechnologyInspection = () => {

    const technologies = [
        {
            id: 1,
            name: 'জাতীয় দক্ষতামান বেসিক শিক্ষাক্রম (৩৬০ ঘন্টা) মেয়াদী পরিচালনার  নাম/স্থান পরিবর্তন/ট্রেড/আসন বৃদ্ধির  আবেদনের জন্য পরিদর্শন প্রতিবেদন'
        },
        {
            id: 2,
            name: 'এইচএসসি (বিএম) শিক্ষাক্রমের স্পেশালাইজেশন সংযোজন/ভূতাপেক্ষভাবে স্পেশালাইজেশন সংযোজন/নাম পরিবর্তন/স্থান পরিবর্তনের পরিদর্শন প্রতিবেদন'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>ট্রেড/টেকনোলজি/স্পেশালাইজেশন সংযোজন/আসন বৃদ্ধি/নাম/স্থান পরিবর্তনের পরিদর্শন সম্পর্কিত ফরম</h1>
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

export default TechnologyInspection;