import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
import TextChanger from '../../shared/TextChanger';
import Authority from '../../shared/Authority/Authority';
import Diploma from '../../shared/SingleSyllabus/Diploma';
import Agriculture from '../../shared/SingleSyllabus/Agriculture';
import Textile from '../../shared/SingleSyllabus/Textile';
import HSC from '../../shared/SingleSyllabus/HSC';
import SSC from '../../shared/SingleSyllabus/SSC';
import JSC from '../../shared/SingleSyllabus/JSC';
import Basic from '../../shared/SingleSyllabus/Basic';
import Advanced from '../../shared/SingleSyllabus/Advanced';
import NSS from '../../shared/SingleSyllabus/NSS';
// component

const Curriculum = () => {
    return (
        <div className="container 2xl:px-10 flex pt-10 gap-5 mx-auto bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-5">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ১৩ এপ্রিল ২০২৩</p>
                <hr />
                <h1 className='text-3xl py-5'>সিলেবাস/কোর্স স্ট্রাকচার/প্রবিধান</h1>
                <Diploma />
                <Agriculture />
                <Textile />
                <HSC />
                <SSC />
                <JSC />
                <Basic />
                <Advanced />
                <NSS />
            </div>

            {/* right sections */}
            <div className='w-1/4 h-40'>
                <Authority />
            </div>
        </div>
    );
};

export default Curriculum;