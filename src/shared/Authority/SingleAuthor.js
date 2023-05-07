import React from 'react';

const SingleAuthor = ({ title }) => {
    return (
        <div className='mb-3'>
            <div className='w-full p-2.5 bg-[#609513] text-lg font-semibold text-white mb-3'>
                <h1>{title.title}</h1>
            </div>
            <div className='flex justify-center'>
                <img className='border border-black w-4/6 h-[215px]' src={title.img} alt="education" />
            </div>
            <p className='text-center my-3 text-base font-semibold'>{title.name} <span className='font-normal'>{title.position}</span></p>
            <p className='text-right mt-10 text-[#2D2DFF]'> বিস্তারিত...</p>
        </div>
    );
};

export default SingleAuthor;