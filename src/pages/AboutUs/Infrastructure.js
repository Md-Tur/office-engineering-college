import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
// component
import TextChanger from '../../shared/TextChanger';
import Authority from '../../shared/Authority/Authority';

const Infrastructure = () => {
    return (
        <div className="container 2xl:px-10 flex pt-10 gap-5 mx-auto bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-[1500px]">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ২১st মার্চ ২০২২</p>
                <hr />
                <h1 className='text-3xl py-5'>Organizational Structure</h1>
                <p className='text-sm'>To view organizational structure of Bangladesh Technical Education Board please download it in <span className='text-blue-600'>pdf</span> or <span className='text-blue-600'>doc</span> format.</p>
            </div>

            {/* right sections */}
            <div className='w-1/4 h-40'>
                <Authority />
            </div>
        </div>
    );
};

export default Infrastructure;