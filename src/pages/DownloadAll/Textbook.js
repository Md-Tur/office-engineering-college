import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
// component
import TextChanger from '../../shared/TextChanger';
import Authority from '../../shared/Authority/Authority';

const Textbook = () => {

    const books = [
        {
            id: 1,
            name: 'এসএসসি/দাখিল (ভোকেশনাল) পাঠ্যবই'
        },
        {
            id: 2,
            name: 'এইচএসসি (বিএমটি) পাঠ্যবই'
        }
    ]

    return (
        <div className="container 2xl:px-10 xl:px-10 lg:px-5 md:px-3 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col pt-10 gap-5 mx-auto bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-10">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ২১st মার্চ ২০২২</p>
                <hr />
                <h1 className='text-3xl py-4'>পাঠ্যপুস্তক</h1>
                {
                    books.map(book =>
                        <div key={book.id} className='text-base'>
                            <p className='py-1 hover:cursor-pointer'>{book.name}</p>
                        </div>
                    )
                }
            </div>

            {/* right sections */}
            <div className='2xl:w-1/4 xl:w-1/4 lg:w-1/3'>
                <Authority />
            </div>
        </div>
    );
};

export default Textbook;