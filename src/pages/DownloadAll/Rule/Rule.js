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
        <div className="container 2xl:px-10 xl:px-10 lg:px-5 md:px-3 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col pt-10 gap-5 mx-auto pb-20 bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-10">
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
            <div className='2xl:w-1/4 xl:w-1/4 lg:w-1/3'>
                <Authority />
            </div>
        </div>
    );
};

export default Rule;