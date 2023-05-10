import React from 'react';
import { Link } from 'react-router-dom';

const Diploma = () => {

    const diplomas = [
        {
            id: 1,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং কোর্স স্ট্রাকচার, সিলেবাস, প্রবিধান ২০২২',
            link: 'https://drive.google.com/drive/folders/19gqwGlwCzDkgQrVOxZTqkQSBqLIrzI3o?usp=sharing'
        },
        {
            id: 2,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং কোর্স স্ট্রাকচার, সিলেবাস, প্রবিধান ২০১৬, ২০১০',
            link: 'https://drive.google.com/drive/folders/0BynIJ2cATXt3VHdMWXZpdHlpQ0k?resourcekey=0-XeZaLt--roh3CjeMUQxT4g'
        },
        {
            id: 3,
            name: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং মেকআপ কোর্স',
            link: 'https://drive.google.com/drive/folders/1n_WbzlUD9tthWFOsk08eWJU2WHxDPKmS'
        }
    ]

    return (
        <div>
            <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ১৩ এপ্রিল ২০২৩</p>
            <hr />
            <h1 className='text-3xl py-5'>সিলেবাস/কোর্স স্ট্রাকচার/প্রবিধান</h1>
            <div className='mt-10'>
                <h1 className='text-lg font-semibold'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং</h1>
                {
                    diplomas.map(diploma =>
                        <div key={diploma.id} className='border border-gray-300'>
                            <p className='text-base py-3 text-gray-500 hover:text-black pl-2'>
                                <Link to={diploma.link}>{diploma.name}</Link>
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Diploma;