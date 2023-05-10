import React from 'react';
import { Link } from 'react-router-dom';

const Advanced = () => {

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>এডভান্সড সার্টিফিকেট কোর্স</h1>
            <div className='border border-gray-300'>
                <p className='text-base py-3 text-gray-500 hover:text-black pl-2'>
                    <Link to='https://drive.google.com/drive/folders/0BynIJ2cATXt3YXZhVl9kVnQ3WWM?resourcekey=0-Saoxg4S5EM53wFfmbTM21A'>এডভান্সড সার্টিফিকেট কোর্স সিলেবাস, প্রবিধান</Link>
                </p>
            </div>
        </div>
    );
};

export default Advanced;