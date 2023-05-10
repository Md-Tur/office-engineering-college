import React from 'react';

const Rules = () => {

    const rules = [
        {
            id: 1,
            name: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড বিধিমালা, ২০২২'
        },
        {
            id: 2,
            name: 'বাংলাদেশ কারিগরি শিক্ষাবোর্ডের এ্যাক্ট-২০১৮'
        }
    ]

    return (
        <div className='mt-10'>
            {
                rules.map(rule =>
                    <div key={rule.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{rule.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Rules;