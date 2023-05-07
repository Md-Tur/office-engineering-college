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
        <div className="container 2xl:px-10 flex pt-10 gap-5 mx-auto bg-white">
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
            <div className='w-1/4 h-40'>
                <Authority />
            </div>
        </div>
    );
};

export default Form;