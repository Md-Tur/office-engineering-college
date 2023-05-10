import React from 'react';
// react icon
import { AiFillFilePdf } from "react-icons/ai";

const SeventhPart = () => {

    const seventhPart = [
        {
            id: 1,
            name: 'Diploma in Medical Technology Academic Calender-2014',
        },
        {
            id: 2,
            name: 'Diploma Engg. Academic Calender-2014',
        },
        {
            id: 3,
            name: 'Textile Diploma Academic Calender-2014',
        },
        {
            id: 4,
            name: 'SSC Voc Academic Calender-2014',
        },
        {
            id: 5,
            name: 'Agriculture Diploma Academic Calender 2013-14',
        }
    ]

    return (
        <div>
            {
                seventhPart.map(seventh =>
                    <p key={seventh.id} className='text-base py-1 text-gray-500 hover:text-black hover:cursor-pointer'>{seventh.name}</p>
                )
            }
            <p className='flex items-center gap-2 text-base pt-1 text-gray-500 hover:text-black hover:cursor-pointer'><AiFillFilePdf className='text-2xl text-red-800' /> _RESULT_CGPA_OK.pdf</p>
        </div>
    );
};

export default SeventhPart;