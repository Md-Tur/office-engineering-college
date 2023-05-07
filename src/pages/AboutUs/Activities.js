import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
import { BsDot } from "react-icons/bs";
// component
import TextChanger from '../../shared/TextChanger';
import Authority from '../../shared/Authority/Authority';

const Activities = () => {

    const activities = [
        {
            id: 1,
            activity: 'To prescribe the courses of instruction.'
        },
        {
            id: 2,
            activity: 'To arrange for development of learning materials.'
        },
        {
            id: 3,
            activity: 'To grant, with-hold or with-draw the affiliation to the concerned institutions.'
        },
        {
            id: 4,
            activity: 'To prescribe the conditions governing the admission and transfer of students.'
        },
        {
            id: 5,
            activity: 'To prescribe the manner and mode or inspection.'
        },
        {
            id: 6,
            activity: 'To monitor the teaching-learning processes/activities.'
        },
        {
            id: 7,
            activity: 'To control and giving registration of students.'
        },
        {
            id: 8,
            activity: 'To conduct and regulate the examination, evaluate the performance and publish results thereof.'
        },
        {
            id: 9,
            activity: 'To create and distribute Academic transcript, certificates after publication of results.'
        },
        {
            id: 10,
            activity: 'To grant Diploma/Certificate to the passed out graduates.'
        },
        {
            id: 11,
            activity: 'To arbitrate of arrange arbitration between teacher and management of the affiliated institutions.'
        },
        {
            id: 12,
            activity: 'To regulate and decide all administrative matters including creation and abolition of posts of BTEB.'
        },
        {
            id: 13,
            activity: 'To fix demand and receive such fees as may be prescribed by the regulation.'
        },
        {
            id: 14,
            activity: 'To hold and manage endowments and to institute and award scholarships medal & prizes.'
        },
        {
            id: 15,
            activity: 'To perform such other acts/activities and things as it may be considered necessary for the purpose of organizational regulation, supervision, control, management and development of Technical Education.'
        }
    ]

    return (
        <div className="container 2xl:px-10 flex pt-10 gap-5 mx-auto bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-[1500px]">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ২১st মার্চ ২০২২</p>
                <hr />
                <h1 className='text-3xl py-5'>Activities</h1>
                <div className='text-lg'>
                    {activities.map(activity =>
                        <p key={activity.id} className='flex gap-3 items-center py-1'><BsDot />{activity.activity}</p>
                    )
                    }
                </div>
            </div>

            {/* right sections */}
            <div className='w-1/4 h-40'>
                <Authority />
            </div>
        </div>
    );
};

export default Activities;