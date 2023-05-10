import React from 'react';
import { Link } from 'react-router-dom';

const Textile = () => {

    const textiles = [
        {
            id: 1,
            name: 'ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং সিলেবাস, কোর্স স্ট্রাকচার, প্রবিধান-২০২২',
            link: 'https://drive.google.com/drive/folders/1L22HOkFaWfhFsNU9LAUOGqDXXevWC4Sb'
        },
        {
            id: 2,
            name: 'ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং মেকআপ কোর্স',
            link: 'https://drive.google.com/drive/folders/1y0dF2z2T0RYMhqdNfGNRko1hQxNmWDz7'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং</h1>
            {
                textiles.map(textile =>
                    <div key={textile.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black pl-2'>
                            <Link to={textile.link}>{textile.name}</Link>
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default Textile;