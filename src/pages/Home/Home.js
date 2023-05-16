import React from 'react';
// images
import notice from "../../images/bg_notice_board.png";
import apply from "../../images/apply.jpg";
import form from "../../images/form.jpg";
import reg from "../../images/registration.jpg";
import res from "../../images/result.png";
import job from "../../images/JOB.jpg";
import innovation from "../../images/INNOVATION.png";
// react icon
import { IoMdArrowDropright } from "react-icons/io";
import Authority from '../../shared/Authority/Authority';
import { Link } from 'react-router-dom';

const Home = () => {
    const notices = [
        {
            id: 1,
            notice: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং (নেভাল স্পেশাল) পরীক্ষার বিজ্ঞপ্তি ও সময়সূচি'
        },
        {
            id: 2,
            notice: 'এসএসসি (ভোকেশনাল) ও দাখিল (ভোকেশনাল) দশম শ্রেণি পরীক্ষা ২০২২ এর হিসাব নম্বর সমস্যার ক...'
        },
        {
            id: 3,
            notice: 'মোঃ বজলুর রহমান, কোয়ালিটি অ্যাসুরেন্স অফিসার এর পাসপোর্টের জন্য অনাপত্তি সনদ'
        },
        {
            id: 4,
            notice: 'মনিরা সিকদার, ইনফরমেশন অফিসার এর পাসপোর্টের জন্য অনাপত্তি সনদ'
        },
        {
            id: 5,
            notice: 'মোঃ মোরশেদ আলম, উপ-সহকারি প্রকৌশলী (ইলেকট্রিক্যাল) এর পাসপোর্টের জন্য অনাপত্তি সনদ'
        }
    ]

    const newses = [
        {
            id: 1,
            title: 'বিজ্ঞপ্তি',
            img: '',
            points: [
                {
                    name: 'ডিপ্লোমা পর্যায়',
                    link: '/advertisement'
                },
                {
                    name: 'এইচ এস সি পর্যায়'
                },
                {
                    name: 'এস,এস,সি পর্যায়'
                },
                {
                    name: 'সল্প মেয়াদী ও অন্যান্য',
                    link: '/shortTerm'
                }
            ]
        },
        {
            id: 2,
            title: 'অনলাইনে ভর্তি (সেশনঃ ২০২২-২০২৩)',
            img: apply,
            points: [
                {
                    name: 'সরকারি ও বেসরকারি সকল শিক্ষাক্রমে ভর্তি'
                },
                {
                    name: 'প্রতিষ্ঠানের তালিকা'
                },
                {
                    name: 'ভর্তির নীতিমালা'
                },
                {
                    name: ''
                }
            ]
        },
        {
            id: 3,
            title: 'ফর্ম ফিলআপ',
            img: form,
            points: [
                {
                    name: 'ডিপ্লোমা পর্যায়'
                },
                {
                    name: 'এইচ এস সি পর্যায়'
                },
                {
                    name: 'এস,এস,সি পর্যায়'
                },
                {
                    name: 'সল্প মেয়াদী ও অন্যান্য',
                }
            ]
        },
        {
            id: 4,
            title: 'রেজিষ্ট্রেশন',
            img: reg,
            points: [
                {
                    name: 'বেসরকারি নতুন ভর্তি ২০২১-২০২২'
                },
                {
                    name: 'ডিপ্লোমা / এইচএসসি পর্যায়'
                },
                {
                    name: 'এস এস সি পর্যায়'
                },
                {
                    name: 'সল্প মেয়াদী ও অন্যান্য'
                }
            ]
        },
        {
            id: 5,
            title: 'চলমান ফলাফল',
            img: res,
            points: [
                {
                    name: 'ডিপ্লোমা পর্যায়'
                },
                {
                    name: 'এইচ এস সি পর্যায়'
                },
                {
                    name: 'এস,এস,সি পর্যায়'
                },
                {
                    name: 'সল্প মেয়াদী ও অন্যান্য',
                }
            ]
        },
        {
            id: 6,
            title: 'জবপ্লেসমেন্ট সেল',
            img: job,
            points: [
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                }
            ]
        },
        {
            id: 7,
            title: 'উদ্ভাবনী কার্যক্রম',
            img: innovation,
            points: [
                {
                    name: 'প্রজ্ঞাপন/পরিপত্র/নীতিমালা/ সংকলন'
                },
                {
                    name: 'ইনোভেশন টিম'
                },
                {
                    name: 'বার্ষিক উদ্ভাবন কর্মপরিকল্পনা'
                },
                {
                    name: 'উদ্ভাবনী প্রকল্পসমূহ'
                }
            ]
        }
    ]

    return (
        <div className="container 2xl:px-10 xl:px-10 lg:px-5 md:px-3 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col pt-10 gap-5 mx-auto pb-10 bg-white">
            {/* left sections */}
            <div className="2xl:w-3/4 xl:w-3/4 lg:w-2/3">
                {/* news */}
                <div className='mb-5 p-[13px] border flex items-center bg-[#EFEFEF] gap-3'>
                    <h1>খবর:</h1>  <marquee>বাকাশিবো অধিভুক্ত সকল প্রতিষ্ঠানে EIIN/প্রতিষ্ঠান ভিত্তিক গ্রামীণ মোবাইল সিম বিতরণ সংক্রান্ত বিজ্ঞপ্তি, বোর্ডের সাথে যোগাযোগের হটলাইন  01550620604, 01876397138, 01847313352, ডিপ্লোমা ইন টেক্সটাইল, এগ্রিকালচার, ফিশারিজ, লাইভস্টক ও ফরেস্ট্রি  শিক্ষাক্রমের প্রথম পর্বের ফরম ফিলাপের প্রভাব লিস্ট আগামী ০৯/০৫/২০২৩ খ্রি. তারিখ হতে অনলাইনে পাওয়া যাবে।</marquee>
                    <button className='bg-gradient-to-b from-[#6E6E6E] to-[#A1A1A1] py-1 px-[6px]'>সকল</button>
                </div>

                {/* notice board */}
                <div className='bg-gradient-to-b from-[#FEFEFE] to-[#EBEBEB] pl-28 pt-3 pb-16 border relative '>
                    <div className='absolute top-0 left-0'>
                        <img src={notice} alt="world" />
                    </div>
                    <h1 className='mb-3 text-2xl'>নোটিশ বোর্ড</h1>
                    {
                        notices.map(notice =>
                            <div className='flex items-center ml-4 mb-1' key={notice.id}>
                                <IoMdArrowDropright className='text-[#2DCA48] text-2xl' />
                                <Link className='underline decoration-dotted ml-3'>{notice.notice}</Link>
                            </div>
                        )
                    }
                    <div className='absolute z-1 bottom-3 right-3'>
                        <button className='bg-gradient-to-b from-[#6E6E6E] to-[#A1A1A1] py-1 px-[6px]'>সকল</button>
                    </div>
                </div>

                {/* depatments */}
                <div className="2xl:grid 2xl:grid-cols-2 xl:grid xl:grid-cols-2 xl:gap-7 lg:grid lg:grid-cols-2 lg:gap-7 md:grid md:grid-cols-2 md:gap-5 sm:grid sm:grid-cols-1 mt-10">
                    {
                        newses.map(news =>
                            <div key={news.id} className="h-[310px] bg-[#F5F5F5] p-3 pb-6 border border-gray-300">
                                <h1 className="text-2xl">{news.title}</h1>
                                <div className="flex gap-3 mt-5">
                                    <img className="w-1/3" src={news.img} alt="" />
                                    <div className="w-2/3">
                                        {
                                            news.points.map(point =>
                                                <div className="flex items-center gap-1 my-1">
                                                    <IoMdArrowDropright className='text-[#2DCA48] text-2xl' />
                                                    <Link className='ml-3' to={point.link}>{point.name}</Link>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/* video sections */}
                <div className='mt-10'>
                    <h1 className="p-2.5 bg-[#609513] text-lg font-semibold text-white mb-3">আশ্রয়ণের অধিকার শেখ হাসিনার উপহার</h1>
                    <div className="2xl:grid 2xl:grid-cols-3 2xl:gap-3 xl:grid xl:grid-cols-3 xl:gap-3 lg:grid lg:grid-cols-2 lg:gap-3 md:grid md:grid-cols-2 md:gap-2">
                        <iframe title="video" src="https://www.youtube.com/embed/VIDEO_ID" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe title="video" src="https://www.youtube.com/embed/VIDEO_ID" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe title="video" src="https://www.youtube.com/embed/VIDEO_ID" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <div className='mt-10'>
                    <h1 className="p-2.5 bg-[#609513] text-lg font-semibold text-white mb-3">আশ্রয়ণের অধিকার শেখ হাসিনার উপহার</h1>
                    <div className="w-full flex gap-3">
                        <div className="w-2/4">
                            <iframe className="w-full h-52" title="video" src="https://www.youtube.com/embed/VIDEO_ID" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p className="text-center text-base font-semibold py-3">ফল আর্মিওয়ার্ম পর্যবেক্ষণ ও সনাক্তকরণ</p>
                        </div>
                        <div className="w-2/4">
                            <iframe className="w-full h-52" title="video" src="https://www.youtube.com/embed/VIDEO_ID" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p className="text-center text-base font-semibold py-3">বন্যার সময় কি করণীয়</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right sections */}
            <div className='2xl:w-1/4 xl:w-1/4 lg:w-1/3'>
                {/* authority sections */}
                <Authority />
            </div>

        </div>
    );
};

export default Home;