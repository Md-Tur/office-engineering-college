import React from 'react';

const SixthPart = () => {

    const sixthpart = [
        {
            id: 1,
            name: 'SSC Voc Academic Calender-2015'
        },
        {
            id: 2,
            name: 'Diploma in Engineering Academic Calendar 2014-15'
        },
        {
            id: 3,
            name: 'Diploma in Textile Academic Calendar 2014-15'
        },
        {
            id: 4,
            name: 'HSC BM & Dip in Commerce Academic Calender-2014-15'
        },
        {
            id: 5,
            name: 'HSC Vocational Academic Calender-2014-15'
        }
    ]

    return (
        <div className='py-10'>
            {
                sixthpart.map(sixth =>
                    <p key={sixth.id} className='text-base py-1 text-gray-500 hover:text-black hover:cursor-pointer'>{sixth.name}</p>
                )
            }
        </div>
    );
};

export default SixthPart;