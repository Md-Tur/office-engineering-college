import React from 'react';
// image
import footer from '../../images/footer.png';
import logo from '../../images/footer-logo.png';

const Footer = () => {
    return (
        <div className='container mx-auto bg-white'>
            <img className='w-full' src={footer} alt="footer" />
            <div className='flex justify-between px-7 pt-7 bg-gray-200'>
                <div>
                    <div className='flex'>
                        <p className='border-r border-gray-400 pr-3'>ম্যাপ</p>
                        <p className='px-3'>সাইটম্যাপ</p>
                        <p className='border-l border-gray-400 px-3'>প্রতিষ্ঠানের তালিকা</p>
                        <p className='border-l border-gray-400 px-3'>আমাদের সার্ভিস সমূহ</p>
                    </div>
                    <p className='py-3'>সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৩-০৫-১৬ ০৬:৩৫:০১</p>
                </div>
                <div>
                    <p>পরিকল্পনা ও বাস্তবায়নে:  মন্ত্রিপরিষদ বিভাগ,  এটুআই,  বিসিসি,  ডিওআইসিটি ও  বেসিস।</p>
                    <div className='flex items-center gap-3 justify-end py-2'>
                        <p>কারিগরি সহায়তায়:</p>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;