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
        <div className="container 2xl:px-10 flex pt-10 gap-5 mx-auto bg-white">
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
            <div className='w-1/4 h-40'>
                <Authority />
            </div>
        </div>
    );
};

export default Calender;