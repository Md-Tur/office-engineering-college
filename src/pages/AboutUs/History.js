import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
// component
import TextChanger from '../../shared/TextChanger';
import Authority from '../../shared/Authority/Authority';

const History = () => {
    return (
        <div className="container 2xl:px-10 xl:px-10 lg:px-5 md:px-3 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col pt-10 gap-5 mx-auto pb-10 bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-10">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ২১st মার্চ ২০২২</p>
                <hr />
                <h1 className='text-3xl py-5'>ইতিহাস</h1>
                <p className='text-lg'>তৎকালিন পূর্ব পাকিস্তানে কারিগরি শিক্ষা প্রতিষ্ঠানসমূহের নিয়ন্ত্রণ, পরীক্ষা পরিচালনা ও সনদপত্র প্রদানের জন্য ১৯৫৪ সালে তদানিন্তন বাণিজ্য ও শিল্প বিভাগ-এর Vide Resolution No. 188-Ind. Dated 27-01-54 মোতাবেক “ইস্ট পাকিস্তান বোর্ড অব এক্সামিনেশন ফর টেকনিক্যাল এডুকেশন” নামে একটি বোর্ড স্থাপিত হয়। উদ্দেশ্য ছিল দেশের কারিগরি ও বৃত্তিমূলক শিক্ষা ও প্রশিক্ষণের সংগঠন পরিচালন, তদারিক, নিয়ন্ত্রন এবং উন্নয়নের দায়িত্ব পালন, পরীক্ষা পরিচালনা, নিয়ন্ত্রন ও বোর্ড কর্তৃক গৃহীত পরীক্ষায় উত্তীর্ণ ব্যক্তিবর্গকে ডিপ্লোমা/সাটির্ফিকেট প্রদান। <br />

                    অতঃপর ক্রমবর্ধমান চাহিদার প্রেক্ষিতে এবং ডিপ্লোমা ইন ইঞ্জিনিয়ারিং ও ট্রেড পর্যায়ের পাঠ্যক্রম প্রণয়ন, উন্নয়ন, নিয়ন্ত্রণ, সনদপত্র প্রদান, পরিদর্শন ও মূল্যায়নের জন্য একটি সংবিধিবদ্ধ প্রতিষ্ঠান স্থাপনের প্রয়োজনীয়তা অনুভূত হয়। ফলে ১৯৬৭ সালের ৭ মার্চ গেজেট নং -১৭৫ এল.এ. প্রকাশিত এবং ১ নং সংসদীয় আইনের বলে “ইস্ট পাকিস্তান টেকনিক্যাল এডুকেশন বোর্ড“ নামে একটি প্রতিষ্ঠান স্থাপিত হয়, যার বর্তমান নাম বাংলাদেশ কারিগরি শিক্ষা বোর্ড।</p>
            </div>

            {/* right sections */}
            <div className='2xl:w-1/4 xl:w-1/4 lg:w-1/3'>
                <Authority />
            </div>
        </div>
    );
};

export default History;