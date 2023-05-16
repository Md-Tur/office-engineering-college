import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
// component
import TextChanger from '../../../shared/TextChanger';
import Authority from '../../../shared/Authority/Authority';
import EstablishmentApplication from './Forms/EstablishmentApplication';
import InspectionEstablishment from './Forms/InspectionEstablishment';
import TeachingApplication from './Forms/TeachingApplication';
import TeachingInspection from './Forms/TeachingInspection';
import TechnologyChange from './Forms/TechnologyChange';
import OrganizationCommittees from './Forms/OrganizationCommittees';
import AcademicRecognition from './Forms/AcademicRecognition';
import TemporaryCertificate from './Forms/TemporaryCertificate';
import TestAdministration from './Forms/TestAdministration';
import TechnologyInspection from './Forms/TechnologyInspection';

const Form = () => {
    return (
        <div className="container 2xl:px-10 xl:px-10 lg:px-5 md:px-3 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col pt-10 gap-5 mx-auto pb-10 bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-5">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ২১st মার্চ ২০২২</p>
                <hr />
                <h1 className='text-3xl py-5'>ফরমসমূহ</h1>
                <EstablishmentApplication />
                <InspectionEstablishment />
                <TeachingApplication />
                <TeachingInspection />
                <TechnologyChange />
                <TechnologyInspection />
                <OrganizationCommittees />
                <AcademicRecognition />
                <TemporaryCertificate />
                <TestAdministration />
            </div>

            {/* right sections */}
            <div className='2xl:w-1/4 xl:w-1/4 lg:w-1/3'>
                <Authority />
            </div>
        </div>
    );
};

export default Form;