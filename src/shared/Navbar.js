import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <div className='container mx-auto bg-red-500'>
                <div className="bg-white z-[10000] top-0">
                    <nav
                        className="relative px-10 flex justify-between items-center container mx-auto"
                    >
                        <ul
                            className="grid grid-cols-8   w-full items-center"
                        >
                            <div className='  text-center border border-dotted py-3 hover:bg-black hover:text-white text-[#727272] cursor-pointer '>
                                <Link to="/">
                                    <IoHome className='text-2xl mx-auto' />
                                </Link>
                            </div>


                            <li className="relative group  border border-dotted py-3 text-center text-orange-500 hover:text-white hover:bg-orange-500 cursor-pointer">
                                <Link
                                    className=" text-[15px] font-medium group  "
                                    to="!#">আমাদের সম্পর্কে

                                </Link>
                                <ul
                                    className="absolute top-[48px] -left-14 bg-white border border-gray-200 shadow-lg w-72 py-6 px-5 flex flex-col  -translate-y-3 text-left  invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-[1] border-t-4 border-t-orange-500"
                                >
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] pr-0 font-medium  "
                                            to="/history">ইতিহাস</Link>
                                    </li>

                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1 font-medium"
                                            to="/infrastructure">অবকাঠামো</Link>
                                    </li>

                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1 font-medium"
                                            to="/Activities">কার্যক্রম</Link>
                                    </li>
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1 font-medium"
                                            to="/officers">কর্মকর্তা বৃন্দ (জেষ্ঠ্যতার ভিত্তিতে নয়)</Link>
                                    </li>
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1 font-medium "
                                            to="#">কর্মচারী বৃন্দ (জেষ্ঠ্যতার ভিত্তিতে নয়)</Link>
                                    </li>
                                </ul>
                            </li>


                            <li className="relative group text-center border border-dotted py-3 text-[#C40A2A] hover:text-white hover:bg-[#C40A2A] cursor-pointer">
                                <Link
                                    className=" text-[15px]  font-medium group "
                                    to="#">পাঠ্যক্রম
                                    <i
                                        className="fa-solid fa-chevron-down text-sm ml-2 text-gray-500 group-"
                                    ></i></Link>

                                <ul
                                    className="absolute top-[48px] border-t-4 border-t-[#C40A2A] -left-14 bg-white border border-gray-200 shadow-lg w-72 py-6 px-5 flex flex-col gap-4 -translate-y-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-[1] text-left "
                                >
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1 font-medium"
                                            to="#">ডিপ্লোমা পর্যায়</Link>
                                    </li>
                                </ul>
                            </li>


                            <li className="relative group text-center border border-dotted py-3 text-[#84154D] hover:text-white hover:bg-[#84154D] cursor-pointer">
                                <Link
                                    className=" text-[15px]  font-medium  group "
                                    to="#">শিক্ষকদের তথ্য
                                    <i
                                        className="fa-solid fa-chevron-down text-sm ml-2 text-gray-500 group-"
                                    ></i></Link>
                            </li>



                            <li className="relative group text-center border border-dotted py-3 text-[#1399BE] hover:text-white hover:bg-[#1399BE] cursor-pointer">
                                <Link
                                    className=" text-[15px]  font-medium group "
                                    to="#">রেজাল্ট
                                    <i
                                        className="fa-solid fa-chevron-down text-sm ml-2 text-gray-500 group-"
                                    ></i></Link>

                                <ul
                                    className="absolute top-[48px] border-t-4 border-t-[#1399BE] -left-14 bg-white border border-gray-200 shadow-lg w-72 py-6 px-5 flex flex-col gap-4 -translate-y-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-[1] text-left"
                                >
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1  font-medium  "
                                            to="#">ডিপ্লোমা ইন্জিনিয়ারিং </Link>
                                    </li>
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1  font-medium  "
                                            to="#">সল্প মেয়াদী ও অন্যান্য </Link>
                                    </li>
                                </ul>
                            </li>


                            <li className="relative group text-center border border-dotted py-3 text-[#8768DE] hover:text-white hover:bg-[#8768DE] cursor-pointer">
                                <Link
                                    className=" text-[15px]  font-medium  group "
                                    to="#">ডাউনলোড
                                    <i
                                        className="fa-solid fa-chevron-down text-sm ml-2 text-gray-500 group-"
                                    ></i></Link>

                                <ul
                                    className="absolute top-[48px] border-t-4 border-t-[#8768DE] -left-14 bg-white border border-gray-200 shadow-lg w-72 py-6 px-5 flex flex-col gap-4 -translate-y-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-[1] text-left"
                                >
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1  font-medium  "
                                            to="#">সিলেবাস/কোর্স স্ট্রাকচার/প্রবিধান</Link>
                                    </li>

                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1  font-medium  "
                                            to="/form">ফরমসমূহ</Link>
                                    </li>
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1  font-medium  "
                                            to="#">একাডেমিক ক্যালেন্ডার</Link>
                                    </li>
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1  font-medium  "
                                            to="/rules">আইন/বিধি/নীতিমালা</Link>
                                    </li>
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1  font-medium  "
                                            to="/textBook">পাঠ্যবই</Link>
                                    </li>
                                    <li className='w-full border-b border-dotted py-2 hover:bg-gray-100'>
                                        <Link
                                            className="text-gray-800 text-[15px] py-1  font-medium  "
                                            to="#">কারিগরি শিক্ষক নির্দেশিকা</Link>
                                    </li>
                                </ul>
                            </li>



                            <li className=' text-center border border-dotted text-black py-3 hover:text-white hover:bg-black cursor-pointer'>
                                <Link
                                    className=" text-[15px]  font-medium  "
                                    to="!#">ফটোগ্যালারী</Link>
                            </li>


                            <li className='text-center border border-dotted py-3 text-green-500  hover:text-white hover:bg-green-500 cursor-pointer'>
                                <Link
                                    className="text-[15px] font-medium"
                                    to="#">বঙ্গবন্ধু কর্ণার</Link>
                            </li>


                        </ul>

                        {/* For Mobile Bar Menu */}
                        <div className="xl:hidden">
                            <button className="navbar-burger flex items-center text-red-600 p-3">
                                <svg
                                    className="block h-4 w-4 fill-current"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>

                {/* For Mobile Navbar  */}
                <div className="navbar-menu relative z-[5000000] hidden">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav
                        className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
                    >
                        <div className="flex items-center mb-8">
                            <Link className="mr-auto text-3xl font-bold leading-none" to="#">
                                <img
                                    className="w-36"
                                    src="./assets/img/logo/conic-logo.png"
                                    alt="logo"
                                />
                            </Link>
                            <button className="navbar-close">
                                <svg
                                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul className="">
                                <li className="mb-1">
                                    <Link
                                        className="block p-4 text-[15px] font-semibold text-gray-700 hover:bg-blue-50  rounded"
                                        to="./index.html">Home </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className="block p-4 font-semibold text-[15px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                        to="./about.html">About Us </Link>
                                </li>
                                <li className="mb-1 group">
                                    <Link
                                        className="block p-4 text-[15px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                        to="#">Elevator
                                        <i
                                            className="fa-solid fa-chevron-down text-sm ml-2 text-gray-500 group-"
                                        ></i></Link>
                                    <ul
                                        className="bg-white border h-0 py-0 group-hover:h-full w-full border-gray-200 shadow-lg group-hover:py-6 px-5 flex flex-col gap-4 -translate-y-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:translate-y-0 "
                                    >
                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Car Elevator </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Vila Elevator </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Stair Elevator </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Freight Elevator </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Hospital Elevator </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Residential Elevator </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Observation Elevator </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-1 group">
                                    <Link
                                        className="block p-4 text-[15px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                        to="#"
                                    >Escalator
                                        <i
                                            className="fa-solid fa-chevron-down text-sm ml-2 text-gray-500 group-"
                                        ></i></Link>

                                    <ul
                                        className="bg-white border h-0 py-0 group-hover:h-full border-gray-200 shadow-lg w-full group-hover:py-6 px-5 flex flex-col gap-4 -translate-y-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:translate-y-0 "
                                    >
                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Indoor Escalator </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Outdoor Escalator </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="text-gray-800 text-[15px] py-1  font-medium  "
                                                to="#">Moving Walks </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className="block p-4 text-[15px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                        to="#">Catalog </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className="block p-4 text-[15px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                        to="./contact.html">Contact Us </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className="block p-4 text-[15px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                        to="./newsroom.html">Newsroom</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Navbar;