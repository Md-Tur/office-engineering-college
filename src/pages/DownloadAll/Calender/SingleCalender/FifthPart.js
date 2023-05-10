import React from 'react';

const FifthPart = () => {

    const fifthPart = [
        {
            id: 1,
            name: 'SSC/Dakhil Voc Academic Calender-2016'
        },
        {
            id: 2,
            name: 'Diploma in Agriculture/Fisheries Academic Calendar 2015-16'
        },
        {
            id: 3,
            name: 'HSC Voc Academic Calendar 2015-16'
        },
        {
            id: 4,
            name: 'HSC BM Academic Calendar 2015-16'
        },
        {
            id: 5,
            name: 'Academic Calendar Diploma in Engg. 2015-16'
        }
    ]

    return (
        <div>
            {
                fifthPart.map(fifth =>
                    <p key={fifth.id} className='text-base py-1 text-gray-500 hover:text-black hover:cursor-pointer'>{fifth.name}</p>
                )
            }
        </div>
    );
};

export default FifthPart;