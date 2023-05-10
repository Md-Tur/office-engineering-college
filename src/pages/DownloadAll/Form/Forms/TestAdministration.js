import React from 'react';

const TestAdministration = () => {

    const tests = [
        {
            id: 1,
            name: 'অনিয়মিত পরীক্ষার্থীদের পরীক্ষায় অংশগ্রহণের অনুমতির আবেদন'
        },
        {
            id: 2,
            name: 'চাহিদা ফরম'
        },
        {
            id: 3,
            name: 'পরীক্ষার্থীর বিরুদ্ধে গোপনীয় প্রতিবেদন'
        },
        {
            id: 4,
            name: 'বান্ডেল লেবেল'
        },
        {
            id: 5,
            name: 'শিরোনাম পত্র'
        },
        {
            id: 6,
            name: 'হাজিরা শীট'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>পরীক্ষা পরিচালনা সংশ্লিষ্ট ফরম</h1>
            {
                tests.map(test =>
                    <div key={test.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{test.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default TestAdministration;