import React from 'react';

const TemporaryCertificate = () => {

    const temporaries = [
        {
            id: 1,
            name: 'সাময়িক সনদপত্র/ডুপ্লিকেট রেজিস্ট্রেশন কার্ড/প্রবেশপত্র/সনদপত্র/নম্বরপত্র ও সকল নাম সংশোধনের আবেদন'
        },
        {
            id: 2,
            name: 'প্রতিষ্ঠান কর্তৃক গৃহীত স্থানীয় পরীক্ষার নম্বরপত্র, একাডেমিক ট্রান্সক্রিপ্ট সত্যায়ন, কাউন্টার সাইনের জন্য আবেদন ফরম'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>সাময়িক সনদপত্র/ডুপ্লিকেট রেজিস্ট্রেশন কার্ড/প্রবেশপত্র/সনদপত্র/নম্বরপত্র, নাম সংশোধন, সত্যায়ন, কাউন্টার সাইন সংশ্লিষ্ট ফরম</h1>
            {
                temporaries.map(temporary =>
                    <div key={temporary.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{temporary.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default TemporaryCertificate;