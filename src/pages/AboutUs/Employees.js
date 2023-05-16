import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
// component
import TextChanger from '../../shared/TextChanger';
import Authority from '../../shared/Authority/Authority';

const Employees = () => {

    const employees = [
        {
            id: 1,
            serial: '১.',
            name: 'মোঃ হারুন-অর-রশিদ',
            position: 'কম্পিউটার অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 2,
            serial: '২.',
            name: 'আব্দুল বাসেত',
            position: 'কম্পিউটার অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 3,
            serial: '৩.',
            name: 'মোঃমামুন অর রশিদ',
            position: 'কম্পিউটার অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 4,
            serial: '৪.',
            name: 'মোঃ শাহাদত হোসেন',
            position: 'কম্পিউটার অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 5,
            serial: '৫.',
            name: 'মোঃ শাহিদুল হক সুমন',
            position: 'কম্পিউটার অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 6,
            serial: '৬.',
            name: 'আব্দুল জব্বার',
            position: 'মেশিন অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 7,
            serial: '৭.',
            name: 'মোঃ দেলোয়ার হোসেন',
            position: 'উচ্চমান সহকারি',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 8,
            serial: '৮.',
            name: 'পারভীন আক্তার',
            position: 'উচ্চমান সহকারি',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 9,
            serial: '৯.',
            name: 'সুনিতা রানী রায়',
            position: 'উচ্চমান সহকারি',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 10,
            serial: '১০.',
            name: 'কাওছার আহম্মেদ বেপারী',
            position: 'উচ্চমান সহকারি',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 11,
            serial: '১১.',
            name: 'শারমীন বেগম',
            position: 'উচ্চমান সহকারি',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 12,
            serial: '১২.',
            name: 'মোঃ তৌহিদুল ইসলাম',
            position: 'উচ্চমান সহকারি',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 13,
            serial: '১৩.',
            name: 'মোঃ মোসফিকুর রহমান',
            position: 'নিরাপত্তা সহকারি',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 14,
            serial: '১৪.',
            name: 'মোঃ জাহিদুর রহমান',
            position: 'ভান্ডার রক্ষক',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 15,
            serial: '১৫.',
            name: 'আব্দুল্লাহ আল মামুন',
            position: 'ক্যাশিয়ার',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 16,
            serial: '১৬.',
            name: 'মোহাম্মদ আরমান আসলাম',
            position: 'অফসেট মেশিন অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 17,
            serial: '১৭.',
            name: 'মোঃ আতাউর রহমান',
            position: 'উচ্চমান সহকারি কাম ডাটা প্রসেসর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 18,
            serial: '১৮.',
            name: 'অলক দত্ত',
            position: 'উচ্চমান সহকারি কাম ডাটা প্রসেসর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 19,
            serial: '১৯.',
            name: 'আনিসুজ্জামান ফয়সাল',
            position: 'ডাটা এন্ট্রি কন্ট্রোল অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 20,
            serial: '২০.',
            name: 'মোহাম্মদ ছামিদুল ইসলাম',
            position: 'কম্পোজিটর কাম টাইপিস্ট',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 21,
            serial: '২১.',
            name: 'মোঃ জাহাঙ্গীর হোসাইন',
            position: 'অফসেট প্লেট মেকার',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 22,
            serial: '২২.',
            name: 'আমজাদ হোসেন',
            position: 'বাইন্ডার',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 23,
            serial: '২৩.',
            name: 'মোঃ মহিদুল হোসেন',
            position: 'প্রেস মেকানিক্স কাম হেলপার',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 24,
            serial: '২৪.',
            name: 'মোহাম্মদ জাকির হোসেন',
            position: 'অফিস সহকারি কাম-মুদ্রাক্ষরিক',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 25,
            serial: '২৫.',
            name: 'মোহাম্মদ নাজমুল হক',
            position: 'অফিস সহকারি কাম-মুদ্রাক্ষরিক',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 26,
            serial: '২৬.',
            name: 'মোহাম্মদ এনামুল হক',
            position: 'অফিস সহকারি কাম-মুদ্রাক্ষরিক',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 27,
            serial: '২৭.',
            name: 'মোঃ মাসুম বিল্লাহ',
            position: 'অফিস সহকারি কাম-মুদ্রাক্ষরিক',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 28,
            serial: '২৮',
            name: 'মোঃ আবু তাহের মন্ডল',
            position: 'অফিস সহকারি কাম-মুদ্রাক্ষরিক',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 29,
            serial: '২৯.',
            name: 'নেওয়াজ নাসির',
            position: 'অফিস সহকারি কাম-ডাটা প্রসেসর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 30,
            serial: '৩০.',
            name: 'আবু মোহাম্মদ ফেরদৌস',
            position: 'রিসিপশনিস্ট',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 31,
            serial: '৩১.',
            name: 'মোঃ বাবুলউদ্দিন',
            position: 'ড্রাইভার',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 32,
            serial: '৩২.',
            name: 'আরিফুল ইসলাম',
            position: 'ড্রাইভার',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 33,
            serial: '৩৩.',
            name: 'মোঃ বুলবুল হামিদ',
            position: 'ড্রাইভার',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 34,
            serial: '৩৪.',
            name: 'মোঃফারুক',
            position: 'ডেসপাস রাইডার',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 35,
            serial: '৩৫.',
            name: 'মোঃ আসাদুল ইসলাম',
            position: 'অফিস এ্যাটেনডেন্ট',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 36,
            serial: '৩৬.',
            name: 'মো. মিজানুর রহমান',
            position: 'মো. মিজানুর রহমান',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 37,
            serial: '৩৭.',
            name: 'মিসেস মিনা',
            position: 'অফিস এ্যাটেনডেন্ট',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 38,
            serial: '৩৮.',
            name: 'অফিস এ্যাটেনডেন্ট',
            position: 'নাম্বারিং মেশিন অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 39,
            serial: '৩৯.',
            name: 'মোঃ কফিল উদ্দীন',
            position: 'কম্পিউটার ল্যাব এটেনডেন্ট',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 40,
            serial: '৪০.',
            name: 'মোঃ মনিরুজ্জামান মনির',
            position: 'কম্পিউটার ল্যাব এটেনডেন্ট',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 41,
            serial: '৪১.',
            name: 'মোঃ সিরাজ মিয়া',
            position: 'ডুপ্লিকেটিং মেশিন অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 42,
            serial: '৪২.',
            name: 'মোঃ আবুল কালাম',
            position: 'ডুপ্লিকেটিং মেশিন অপারেটর',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 43,
            serial: '৪৩.',
            name: 'মোঃ আতিকুর রহমান',
            position: 'ইলেকট্রিশিয়ান',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 44,
            serial: '৪৪.',
            name: 'মোঃ আবদুর রহমান',
            position: 'লিফটম্যান',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 45,
            serial: '৪৫.',
            name: 'মোঃ রুস্তম আলী',
            position: 'রেকর্ড সরবরাহকারী',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        },
        {
            id: 46,
            serial: '৪৬.',
            name: 'মোঃ আবুল কাশেম',
            position: 'ক্যাশ পিয়ন',
            office: 'বাংলাদেশ কারিগরি ‍শিক্ষা বোর্ড',
            mobileOffice: '',
            mobile: '',
            email: ''
        }
    ]

    return (
        <div className="container 2xl:px-10 xl:px-10 lg:px-5 md:px-3 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col pt-10 gap-5 mx-auto bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-10">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ২১st মার্চ ২০২২</p>
                <hr />
                <h1 className='text-3xl py-5'>কর্মচারীবৃন্দ</h1>
                <div className='border'>
                    {
                        employees.map(employee =>
                            <div key={employee.id} className='text-base flex border mb-10'>
                                <div className='w-1/6'>
                                    <div className='flex'>
                                        <div className='w-2/12'>
                                            <h1 className='pl-1 pt-1 border h-32'>{employee.serial}</h1>
                                        </div>
                                        <div className='w-10/12 h-32 flex border-b justify-center'>

                                        </div>
                                    </div>
                                </div>
                                <div className='w-4/5 flex gap-6'>
                                    <div className='w-1/2 flex items-center'>
                                        <div className='w-1/3'>
                                            <p className='border border-gray-300 py-2 pl-2'>নাম</p>
                                            <p className='border border-gray-300 py-2 pl-2'>পদবি</p>
                                            <p className='border border-gray-300 py-2 pl-2'>অফিস</p>
                                        </div>
                                        <div className='w-2/3'>
                                            <p className='border border-gray-300 py-2 pl-2'>{employee.name}</p>
                                            <p className='border border-gray-300 py-2 pl-2'>{employee.position}</p>
                                            <p className='border border-gray-300 py-2 pl-2'>{employee.office}</p>
                                        </div>
                                    </div>
                                    <div className='w-1/2 flex items-center'>
                                        <div className='w-1/3'>
                                            <p className='flex items-center border border-gray-300 h-[43px] pl-2'>ফোন (অফিস)</p>
                                            <p className='flex items-center border border-gray-300 h-[42px] pl-2'>মোবাইল</p>
                                            <p className='flex items-center border border-gray-300 h-[43px] pl-2'>ই-মেইল</p>
                                        </div>
                                        <div className='w-2/3'>
                                            <p className='flex items-center border border-gray-300 h-[43px] pl-2'></p>
                                            <p className='flex items-center border border-gray-300 h-[42px] pl-2'></p>
                                            <p className='flex items-center border border-gray-300 h-[43px] pl-2'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* right sections */}
            <div className='2xl:w-1/4 xl:w-1/4 lg:w-1/3'>
                <Authority />
            </div>
        </div>
    );
};

export default Employees;