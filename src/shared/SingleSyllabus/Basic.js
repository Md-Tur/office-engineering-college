import React from 'react';
import { Link } from 'react-router-dom';

const Basic = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>বেসিক ট্রেড (৩৬০ ঘন্টা)</h1>
            <div className='border border-gray-300'>
                <p className='text-base py-3 text-gray-500 hover:text-black pl-2'>
                    <Link to='https://drive.google.com/drive/folders/0BynIJ2cATXt3RTlleUFYMEpNSjg?resourcekey=0-ZHvhpKN4Wbk_V7JUWE95Ww'>বেসিক ট্রেড (৩৬০ ঘন্টা)  সিলেবাস, প্রবিধান</Link>
                </p>
            </div>
        </div>
    );
};

export default Basic;