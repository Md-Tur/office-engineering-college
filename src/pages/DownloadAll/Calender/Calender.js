import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
// component
import TextChanger from '../../../shared/TextChanger';
import Authority from '../../../shared/Authority/Authority';
import FirstPart from './SingleCalender/FirstPart';
import SecondPart from './SingleCalender/SecondPart';
import ThirdPart from './SingleCalender/ThirdPart';
import FourthPart from './SingleCalender/FourthPart';
import FifthPart from './SingleCalender/FifthPart';
import SeventhPart from './SingleCalender/SeventhPart';
import SixthPart from './SingleCalender/SixthPart';

const Calender = () => {

    return (
        <div className="container 2xl:px-10 xl:px-10 lg:px-5 md:px-3 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col pt-10 gap-5 mx-auto pb-10 bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-5">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ১৫ মার্চ ২০২৩</p>
                <hr />
                <h1 className='text-3xl py-5'>একাডেমিক ক্যালেন্ডার</h1>
                <div className='text-left'>
                    <FirstPart />
                    <SecondPart />
                    <ThirdPart />
                    <FourthPart />
                    <FifthPart />
                    <SixthPart />
                    <SeventhPart />
                </div>
            </div>

            {/* right sections */}
            <div className='2xl:w-1/4 xl:w-1/4 lg:w-1/3'>
                <Authority />
            </div>
        </div>
    );
};

export default Calender;