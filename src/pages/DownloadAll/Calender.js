import React from 'react';
// react icon
import { MdPrint } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
// component
import TextChanger from '../../shared/TextChanger';
import Authority from '../../shared/Authority/Authority';

const Calender = () => {
    return (
        <div className="container 2xl:px-10 flex pt-10 gap-5 mx-auto bg-white">
            {/* left sections */}
            <div className="w-3/4 pb-5">
                <TextChanger />
                <MdPrint className='text-3xl mt-7' />
                <p className='text-sm text-right'>সর্ব-শেষ হাল-নাগাদ: ১৫ মার্চ ২০২৩</p>
                <hr />
                <h1 className='text-3xl py-5'>একাডেমিক ক্যালেন্ডার</h1>
                <div className='text-left'>
                    <div>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের পর্ব-পরিকল্পনা-২০২৩ (মার্চ থেকে জুলাই)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন টেক্সটাইল শিক্ষাক্রমের শিক্ষা বষপঞ্জি-২০২৩</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন এগ্রিকালচার, ফিসারিজ, লাইভস্টক ও ফরেস্ট্রি শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি-২০২৩</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>পঞ্জিজাতীয় দক্ষতামান বেসিক (৩৬০ ঘন্টা) শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি-২০২৩</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>অ্যাডভান্সড সার্টিফিকেট কোর্স (১বছর মেয়াদি) শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি-২০২৩</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>জেএসসি (ভোকেশনাল), এসএসসি (ভোকেশনাল) ও দাখিল (ভোকেশনাল) শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি ২০২৩</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এইচ এসসি (বিএমটি/ভোকেশনাল) ও ডিপ্লোমা ইন কমার্স শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি ২০২৩</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>০৪ বছর মেয়াদি ডিপ্লোমা ইন মেডিকেল টেকনোলজি শিক্ষা বর্ষপঞ্জিঃ ২০২২-২০২৩</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন এগ্রিকালচার/লাইভস্টক/ফিসারিজ/ফরেস্ট্রি শিক্ষাক্রমের পর্ব-পরিকল্পনা (সেপ্টেম্বর, ২০২২ থেকে ফেব্রুয়ারি, ২০২৩)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের পর্ব-পরিকল্পনা (সেপ্টেম্বর, ২০২২ থেকে ফেব্রুয়ারি, ২০২৩)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের পর্ব-পরিকল্পনা (অক্টোবর, ২০২২ থেকে মার্চ, ২০২৩)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন এগ্রিকালচার, লাইভস্টক, ফরেস্ট্রি, ফিসারিজ শিক্ষাক্রমের (মে, ২০২২ থেকে সেপ্টেম্বর, ২০২২)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি (মে,২০২২ থেকে সেপ্টেম্বর,২০২২)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি (মে,২০২২ থেকে সেপ্টেম্বর,২০২২)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এইচএসসি (বিএমটি/ভোকেশনাল) ও ডিপ্লোমা-ইন-কমার্স শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি - ২০২২</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>জেএসসি (ভোকেশনাল), এসএসসি (ভোকেশনাল) ও দাখিল (ভোকেশনাল) শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি ২০২২</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>শর্ট কোর্স একাডেমিক ক্যালেন্ডার - ২০২২</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন এগ্রিকালচার/ফিসারিজ/লাইভস্টক/ফরেস্ট্রি শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জিঃ২০২১-২২ (ডিসেম্বর থেকে এপ্রিল)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন এগ্রিকালচার/ফিসারিজ/লাইভস্টক/ফরেস্ট্রি শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জিঃ২০২১</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>৪ বছর মেয়াদি ডিপ্লোমা ইন মেডিকেল টেকনোলজি শিক্ষা বর্ষপঞ্জিঃ ২০২১-২০২২</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এইচএসসি (বিএম/ভোকেশনাল)/ডিপ্লোমা ইন কমার্স শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জিঃ ২০২১-২২ খ্রিঃ (সংশোধিত)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এইচএসসি (বিএম/ভোকেশনাল)/ডিপ্লোমা ইন কমার্স শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি:২০২১-২২</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>জেএসসি/এসএসসি/দাখিল (ভোকেশনাল) শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি ২০২১</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এসএসসি/দাখিল (ভোকেশনাল)  শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি: ২০২০</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন এগ্রিকালচার, ফিসারিজ ও লাইভস্টক শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি ২০১৯-২০২০ (সংশোধিত)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি: ২০১৯-২০২০ (সংশোধিত)</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>৪ বছর মেয়াদি ডিপ্লোমা ইন মেডিক্যাল টেকনোলজি শিক্ষাবর্ষপঞ্জি ২০১৯-২০২০</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>১ বছর মেয়াদি সার্টিফিকেট কোর্সের শিক্ষাবর্ষ পঞ্জিঃ-২০১৯-২০২০</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জি : ২০১৯-২০২০</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন এগ্রিকালচার, ফিসারিজ ও লাইভস্টক শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি: ২০১৯-২০</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি : ২০১৯-২০২০</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এইচএসসি (বিএম) ও ডিপ্লোমা ইন কমার্স শিক্ষক্রমের শিক্ষা বর্ষপঞ্জি : ২০১৯-২০২০</p>
                        <p className='text-base pt-1 text-gray-500 hover:text-black'>এইচএসসি (ভোক) শিক্ষক্রমের শিক্ষা বর্ষপঞ্জি : ২০১৯-২০২০</p>
                    </div>

                    <div className='py-10'>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জিঃ ২০১৮-১৯</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জি ২০১৮-১৯</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা-ইন-এগ্রিকালচার, ফিসারিজ ও লাইভস্টক শিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জি ২০১৮-১৯</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এসএসসি/দাখিল (ভোক) শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি-২০১৯</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>১ বছর মেয়াদি সার্টিফিকেট কোর্সের শিক্ষাবর্ষ পঞ্জিঃ-২০১৮-১৯</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এইচএসসি (বিএম/ভোক) শিক্ষাক্রমের ২০১৮-১৯ শিক্ষাবর্ষের শিক্ষাবর্ষপঞ্জি</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা-ইন-টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি ২০১৮-১৯</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা-ইন-এগ্রিকালচার, ফিসারিজ ও লাইভস্টক শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি ২০১৮-১৯</p>
                        <p className='text-base pt-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জিঃ ২০১৮-১৯</p>
                    </div>

                    <div>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং (আর্মি) শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জিঃ ২০১৮</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এসএসসি/দাখিল (ভোক) শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি : ২০১৮</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জি : ২০১৭-২০১৮</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন এগ্রিকালচার, ফিসারিজ ও লাইভস্টক শিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জি ২০১৭-১৮</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিংশিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জি : ২০১৭-১৮</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>১ বছর মেয়াদি স্বাস্থ্য প্রযুক্তি ও সেবা শিক্ষাক্রম শিক্ষাবর্ষপঞ্জি ২০১৭-১৮</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>৪ বছর মেয়াদি ডিপ্লোমা ইন মেডিক্যাল টেকনোলজি শিক্ষাবর্ষপঞ্জি ২০১৭-১৮</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এইচএসসি (ভোক) শিক্ষাবর্ষপঞ্জি: ২০১৭-১৮</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>এইচএসসি (বিএম) শিক্ষাবর্ষপঞ্জি: ২০১৭-১৮</p>
                        <p className='text-base pt-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের শিক্ষা বর্ষপঞ্জি: ২০১৭-২০১৮</p>
                    </div>

                    <div className='py-10'>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের সংশোধিত শিক্ষা বর্ষপঞ্জি ২০১৬ -২০১৭</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>SSC/Dakhil Voc Academic Calender-2017</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>ডিপ্লোমা ইন এগ্রিকালচার, ফিসারিজ ও লাইভস্টক শিক্ষাক্রম শিক্ষা বর্ষপঞ্জি ২০১৬-২০১৭</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>Diploma Engg. Academic Calender-2016-17</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>HSC BM Academic Calender-2016-17</p>
                        <p className='text-base pt-1 text-gray-500 hover:text-black'>HSC Voc Academic Calender-2016-17</p>
                    </div>

                    <div>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>SSC/Dakhil Voc Academic Calender-2016</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>Diploma in Agriculture/Fisheries Academic Calendar 2015-16</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>HSC Voc Academic Calendar 2015-16</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>HSC BM Academic Calendar 2015-16</p>
                        <p className='text-base pt-1 text-gray-500 hover:text-black'>Academic Calendar Diploma in Engg. 2015-16</p>
                    </div>

                    <div className='py-10'>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>SSC Voc Academic Calender-2015</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>Diploma in Engineering Academic Calendar 2014-15</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>Diploma in Textile Academic Calendar 2014-15</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>HSC BM & Dip in Commerce Academic Calender-2014-15</p>
                        <p className='text-base pt-1 text-gray-500 hover:text-black'>HSC Vocational Academic Calender-2014-15</p>
                    </div>

                    <div>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>Diploma in Medical Technology Academic Calender-2014</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>Diploma Engg. Academic Calender-2014</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>Textile Diploma Academic Calender-2014</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>SSC Voc Academic Calender-2014</p>
                        <p className='text-base py-1 text-gray-500 hover:text-black'>Agriculture Diploma Academic Calender 2013-14</p>
                        <p className='flex items-center gap-2 text-base pt-1 text-gray-500 hover:text-black'><AiFillFilePdf className='text-2xl text-red-800' /> _RESULT_CGPA_OK.pdf</p>
                    </div>
                </div>
            </div>

            {/* right sections */}
            <div className='w-1/4 h-40'>
                <Authority />
            </div>
        </div>
    );
};

export default Calender;