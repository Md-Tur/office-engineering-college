import React from 'react';
import { Link } from 'react-router-dom';

const Agriculture = () => {

    const agricultures = [
        {
            id: 1,
            name: 'ডিপ্লোমা ইন এগ্রিকালচার সিলেবাস, কোর্স স্ট্রাকচার, প্রবিধান-২০২২',
            link: 'https://drive.google.com/drive/folders/16wgMKQnRAFBBhYWrPURnFYc-1sSDJ5nV'
        },
        {
            id: 2,
            name: 'ডিপ্লোমা ইন ফিসারিজ সিলেবাস,কোর্স স্ট্রাকচার, প্রবিধান-২০২২',
            link: 'https://drive.google.com/drive/folders/1PBAy5dsuulPHmP27zTNnuBDJIExrrW2B'
        },
        {
            id: 3,
            name: 'ডিপ্লোমা ইন ফরেস্ট্রি সিলেবাস, কোর্স স্ট্রাকচার, প্রবিধান-২০২২',
            link: 'https://drive.google.com/drive/folders/1SOQlBmLO3C3dH4n7imlMBKIoZSJuLNFc'
        },
        {
            id: 4,
            name: 'ডিপ্লোমা ইন লাইভস্টক সিলেবাস, কোর্স স্ট্রাকচার, প্রবিধান-২০২২',
            link: 'https://drive.google.com/drive/folders/1Je4kTozlx52S-8fFRu1V6DjOtJ53R4a_'
        },
        {
            id: 5,
            name: 'ডিপ্লোমা ইন এগ্রিকালচার/ফিসারিজ/লাইভস্টক/ফরেস্ট্রি মেকআপ কোর্স',
            link: 'https://drive.google.com/drive/folders/1KqNzQJVUAX7z0SoshbXqkPiiQkgNc2jp'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>ডিপ্লোমা ইন এগ্রিকালচার/ফিসারিজ/লাইভস্টক/ফরেস্ট্রি</h1>
            {
                agricultures.map(agriculture =>
                    <div key={agriculture.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black pl-2'>
                            <Link to={agriculture.link}>{agriculture.name}</Link>
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default Agriculture;