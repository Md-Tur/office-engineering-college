import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
// component
import TextChanger from '../../shared/TextChanger';
import Authority from '../../shared/Authority/Authority';

const Textbook = () => {
    return (
        <div className="container 2xl:px-10 flex pt-10 gap-5 mx-auto bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-[1650px]">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ২১st মার্চ ২০২২</p>
                <hr />
                <h1 className='text-3xl py-5'>পাঠ্যপুস্তক</h1>
                <div className='text-base'>
                    <p>এসএসসি/দাখিল (ভোকেশনাল) পাঠ্যবই</p>
                    <p className='py-1'>এইচএসসি (বিএমটি) পাঠ্যবই</p>
                </div>
            </div>

            {/* right sections */}
            <div className='w-1/4 h-40'>
                <Authority />
            </div>
        </div>
    );
};

export default Textbook;