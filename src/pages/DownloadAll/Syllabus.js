import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
// component
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

const Syllabus = () => {
    return (
        <div className="container 2xl:px-10 xl:px-10 lg:px-5 md:px-3 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col pt-10 gap-5 mx-auto pb-20 bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-5">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
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
            <div className='2xl:w-1/4 xl:w-1/4 lg:w-1/3'>
                <Authority />
            </div>
        </div>
    );
};

export default Syllabus;