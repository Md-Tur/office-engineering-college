import React from 'react';

const TextChanger = () => {
    return (
        <div className='flex bg-[#609513] p-3 w-[490px] my-3'>
            <div className='flex gap-3 border-r-[3px] border-gray-500 mr-5 text-white items-center'>
                <p className='text-sm'>Text size</p>
                <p className='text-xs px-3 py-1'>A</p>
                <p className='text-lg px-3 py-1'>A</p>
                <p className='mr-5 text-2xl px-3 py-1'>A</p>
            </div>
            <div className='flex gap-3 items-center'>
                <p className='text-white text-sm'>Color</p>
                <p className='bg-white px-3 py-2 text-xs'>C</p>
                <p className='bg-[#CFE5FC] px-3 py-2 text-xs'>C</p>
                <p className='bg-[#2F2F2F] px-3 py-2 text-yellow-300 text-xs'>C</p>
                <p className='bg-[#F7F3D6] px-3 py-2 text-xs'>C</p>
            </div>
        </div>
    );
};

export default TextChanger;