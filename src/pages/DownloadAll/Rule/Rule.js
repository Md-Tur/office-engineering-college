import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
// component
import TextChanger from '../../../shared/TextChanger';
import Authority from '../../../shared/Authority/Authority';
import Rules from './Rules/Rules';
import EstablishingTeaching from './Rules/EstablishingTeaching';
import OldPolicy from './Rules/OldPolicy';
import ExaminationPolicy from './Rules/ExaminationPolicy';

const Rule = () => {
    return (
        <div className="container 2xl:px-10 flex pt-10 gap-5 mx-auto bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-[550px]">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ২১st মার্চ ২০২২</p>
                <hr />
                <h1 className='text-3xl py-5'>আইন/বিধি/নীতিমালা</h1>
                <Rules />
                <EstablishingTeaching />
                <OldPolicy />
                <ExaminationPolicy />
            </div>

            {/* right sections */}
            <div className='w-1/4 h-40'>
                <Authority />
            </div>
        </div>
    );
};

export default Rule;