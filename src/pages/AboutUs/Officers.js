import React from 'react';
// images
import chairman from '../../images/chairman.jpg';
import sochib from '../../images/sochib.jpg';
import porichalok from '../../images/porichalok.jpg';
import controller from '../../images/controller.png';
import inspector from '../../images/inspector.jpg';
import porichalokIT from '../../images/porichalokIT.jpg';
import subPorichalok from '../../images/subPorichalok.png';
import subPorichalok1 from '../../images/subPorichalok1.jpg';
import subSochib from '../../images/subSochib.png';
import subSochib1 from '../../images/subSochib1.png';
import subSochib2 from '../../images/subSochib2.jpg';
import subController from '../../images/subController.jpeg';
import subController1 from '../../images/subController1.jpg';
import system from '../../images/system.png';
import system1 from '../../images/system1.jpg';
import subInspector from '../../images/subInspector.jpg';
import subController2 from '../../images/subController2.png';
import subController3 from '../../images/subController3.jpeg';
import subInspector1 from '../../images/subInspector1.jpg';
import subInspector2 from '../../images/subInspector2.jpeg';
import subController4 from '../../images/subController4.jpg';
import subPorichalok2 from '../../images/subPorichalok2.jpg';
import mullaion from '../../images/mullaion.jpg';
import programmer from '../../images/programmer.png';
import programmer1 from '../../images/programmer1.jpg';
import curriculumn from '../../images/curriculumn.jpeg';
import specialist from '../../images/specialist.png';
import curriculumn1 from '../../images/curriculumn1.png';
import curriculumn2 from '../../images/curriculumn2.png';
import specialist1 from '../../images/specialist1.jpg';
import specialist2 from '../../images/specialist2.png';
import curriculumn3 from '../../images/curriculumn3.jpg';
import industry from '../../images/industry.jpg';
import programmer2 from '../../images/programmer2.png';
import curriculumn4 from '../../images/curriculumn4.jpg';
import specialist3 from '../../images/specialist3.jpg';
import curriculumn5 from '../../images/curriculumn5.jpg';
import industry1 from '../../images/industry1.png';
import subController5 from '../../images/subController5.jpg';
import subController6 from '../../images/subController6.png';
import information from '../../images/information.jpg';
import asstProgrammer from '../../images/asstProgrammer.jpg';
import asstProgrammer1 from '../../images/asstProgrammer1.jpg';
import quality from '../../images/quality.jpg';
import quality1 from '../../images/quality1.jpg';
import quality2 from '../../images/quality2.jpg';
import quality3 from '../../images/quality3.jpg';
import maintainance from '../../images/maintainance.png';
import subController7 from '../../images/subController7.png';
import subPorichalok3 from '../../images/subPorichalok3.png';
import operator from '../../images/operator.jpg';
import asstProgrammer2 from '../../images/asstProgrammer2.png';
import asstProgrammer3 from '../../images/asstProgrammer3.jpg';
import asstProgrammer4 from '../../images/asstProgrammer4.jpg';
import registration from '../../images/reegistration.jpg';
import subPorichalok4 from '../../images/subPorichalok4.jpg';
import subController8 from '../../images/subController8.jpg';
import subController9 from '../../images/subController9.jpg';
import subController10 from '../../images/subController10.jpg';
import subSpecialist from '../../images/subSpecialist.jpg';
import subSpecialist1 from '../../images/subSpecialist1.jpg';
import quality4 from '../../images/quality4.jpg';
import quality5 from '../../images/quality5.jpg';
import subController11 from '../../images/subController11.jpg';
import subSpecialist2 from '../../images/subSpecialist2.jpg';
import subController12 from '../../images/subController12.jpg';
import subController13 from '../../images/subController13.jpeg';
import subController14 from '../../images/subController14.jpeg';
import asstProgrammer5 from '../../images/asstProgrammer5.jpg';
import section from '../../images/section.jpg';
import section1 from '../../images/section1.jpg';
import store from '../../images/store.jpg';
import subEngineer from '../../images/subEngineer.jpg';
import proof from '../../images/proof.jpg';
import subEngineer1 from '../../images/subEngineer1.jpg';
import section2 from '../../images/section2.jpg';
import section3 from '../../images/section3.jpg';
import proof1 from '../../images/proof1.jpg';
// react icon
import { MdPrint } from "react-icons/md";
// component
import TextChanger from '../../shared/TextChanger';

const Officers = () => {

    const officers = [
        {
            id: 1,
            serial: '১',
            img: chairman,
            name: 'মোঃ আলী আকবর খান',
            position: 'চেয়ারম্যান',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'chairman@bteb.gov.bd',
            mobile: ' ',
            mobileOffice: '০২-৫৫০০৬৫২১',
            mobileHome: ' ',
            fax: ' '
        },
        {
            id: 2,
            serial: '২',
            img: sochib,
            name: 'মোহাম্মদ আবদুল্লাহ আল মাহমুদ জামান',
            position: 'সচিব',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'secretary@bteb.gov.bd',
            mobile: '',
            mobileOffice: '০২-৫৫০০৬৫২২',
            mobileHome: '',
            fax: ''
        },
        {
            id: 3,
            serial: '৩',
            img: porichalok,
            name: 'প্রকৌশলী মোঃ রকিব উল্লাহ',
            position: 'পরিচালক (কারিকুলাম)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'bteb.director@gmail.com',
            mobile: '০১৩২২৮৩০০০৩',
            mobileOffice: '০২-৫৫০০৬৫২৩',
            mobileHome: '০১৩২২৮৩০০০৩',
            fax: ''
        },
        {
            id: 4,
            serial: '৪',
            img: controller,
            name: 'মোঃ কেপায়েত উল্লাহ',
            position: 'পরীক্ষা নিয়ন্ত্রক',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'bteb.controller@gmail.com',
            mobile: '',
            mobileOffice: '০২-৫৫০০৬৫২৫',
            mobileHome: '',
            fax: ''
        },
        {
            id: 5,
            serial: '৫',
            img: inspector,
            name: 'প্রকৌশলী বি.এম. আমিনুল ইসলাম',
            position: 'পরিদর্শক',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'inspector@bteb.gov.bd',
            mobile: '০১৭১১৪৭৭৪৩০',
            mobileOffice: '০২-৫৫০০৬৫২৪',
            mobileHome: '',
            fax: ''
        },
        {
            id: 6,
            serial: '৬',
            img: porichalokIT,
            name: 'প্রফেসর মো: মামুন উল হক',
            position: 'পরিচালক (আইটিসি)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'director.itc.bteb@gmail.com',
            mobile: '০১৭১১১৮৬৩০২',
            mobileOffice: '৫৫০০৬৫২৮',
            mobileHome: '',
            fax: ''
        },
        {
            id: 7,
            serial: '৭',
            img: subPorichalok,
            name: 'জনাব মোঃ আলমগীর হোসেন',
            position: 'উপ-পরিচালক (হিসাব ও নিরীক্ষা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'alamgirds@gmail.com',
            mobile: '০১৮৩৭১৭৬৫৯২, ০১৭১২৮৪৪৩৭৬',
            mobileOffice: '+৮৮০২৯১৪৫৬৭৭',
            mobileHome: '০১৯৮৬৮১২৬৮৭',
            fax: ''
        },
        {
            id: 8,
            serial: '৮',
            img: subPorichalok1,
            name: 'জনাব এস এম শাহজাহান',
            position: 'উপ-পরিচালক (কোর্স এ্যাক্রিডিটেশন)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'shahjahan_bteb@yahoo.com',
            mobile: '০১৭১২১২৫৭৬৫',
            mobileOffice: '০২-৫৫০০৬৫২৮',
            mobileHome: '০১৭১২১২৫৭৬৫',
            fax: ''
        },
        {
            id: 9,
            serial: '৯',
            img: subSochib,
            name: 'জনাব মোঃ আবুল হোসেন',
            position: 'উপ-সচিব (প্রশাসন)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'abulhossainhaulader@gmail.com',
            mobile: '০১৯১৫৯৮৯৭১৯',
            mobileOffice: '০২-৫৫০০৬৫৩০',
            mobileHome: '০১৯১৫৯৮৯৭১৯',
            fax: ''
        },
        {
            id: 10,
            serial: '১০',
            img: subSochib1,
            name: 'জনাব রাজু মুহম্মদ শহীদুল ইসলাম',
            position: 'উপ-পরিচালক (গবেষণা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'rmsislam@gmail.com',
            mobile: '০১৫৫৬৬২২৬৫৫',
            mobileOffice: '০২-৫৫০০৬৫৩৯',
            mobileHome: '০১৫৫৬৬২২৬৫৫',
            fax: ''
        },
        {
            id: 11,
            serial: '১১',
            img: subSochib2,
            name: 'জনাব মোঃ আব্দুল হান্নান',
            position: 'উপ-সচিব (রেজিস্ট্রেশন)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'hannan7212@gmail.com',
            mobile: '০১৮৩৪৩৫৭৯৭১',
            mobileOffice: '০২-৫৫০০৬৫৩৬',
            mobileHome: '০১৮৩৪৩৫৭৯৭১',
            fax: ''
        },
        {
            id: 12,
            serial: '১২',
            img: subController,
            name: 'জনাব মোহাম্মদ আবুল শাহিন কাওছার সরকার',
            position: 'উপ-পরীক্ষা নিয়ন্ত্রক (ডিপ্লোমা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'kowser73@yahoo.com',
            mobile: '০১৭১২২৫১৯১৭',
            mobileOffice: '০২-৫৫০০৬৫৩১',
            mobileHome: '০১৭১২২৫১৯১৭',
            fax: ''
        },
        {
            id: 13,
            serial: '১৩',
            img: subController1,
            name: 'মোঃ খোরশেদ আলম',
            position: 'উপ-পরীক্ষা নিয়ন্ত্রক (গোপনীয়)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'dcconbteb@gmail.com',
            mobile: '০১৭১২০০০১৯৯',
            mobileOffice: '০২-৫৫০০৬৫৩২',
            mobileHome: '',
            fax: ''
        },
        {
            id: 14,
            serial: '১৪',
            img: system,
            name: 'প্রকৌশলী মোহাম্মদ সামসুল আলম',
            position: 'সিস্টেম এনালিস্ট',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'engr.shams@yahoo.com',
            mobile: '০১৯১২৫২৮২৫৩',
            mobileOffice: '',
            mobileHome: '০১৯১২৫২৮২৫৩',
            fax: ''
        },
        {
            id: 15,
            serial: '১৫',
            img: system1,
            name: 'জনাব এ কে এম শামসুজ্জামান',
            position: 'সিস্টেম এনালিস্ট',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'zaman.bteb@gmail.com',
            mobile: '০১৭১১৩৬৬৯২৪',
            mobileOffice: '০২৫৫০০৬৫৩৪',
            mobileHome: '',
            fax: ''
        },
        {
            id: 16,
            serial: '১৬',
            img: subInspector,
            name: 'ড. ইন্দ্রানী ধর',
            position: 'উপ-পরিদর্শক (ডিপ্লোমা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'didipbteb2022@gmail.com',
            mobile: '',
            mobileOffice: '০২-৫৫০০৬৫৩৫',
            mobileHome: '',
            fax: ''
        },
        {
            id: 17,
            serial: '১৭',
            img: subController2,
            name: 'জনাব মোঃ সুলতান হোসেন',
            position: 'উপ-পরীক্ষা নিয়ন্ত্রক (বিএম)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'sultanhossain07@gmail.com',
            mobile: '০১৭১৫১০৮৫৪৯',
            mobileOffice: '০২-৫৫০০৬৫২৯',
            mobileHome: '০১৭১৫১০৮৫৪৯',
            fax: ''
        },
        {
            id: 18,
            serial: '১৮',
            img: subController3,
            name: 'প্রকৌশলী জাকারিয়া আব্বাসী',
            position: 'উপ-পরীক্ষা নিয়ন্ত্রক (ভোকেশনাল)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'zabbasi1975.za@gmail.com',
            mobile: '০১৫৫২৩৩০৬৯২',
            mobileOffice: '০২-৫৫০০৬৫২৭',
            mobileHome: '০১৫৫২৩৩০৬৯২',
            fax: ''
        },
        {
            id: 19,
            serial: '১৯',
            img: subInspector1,
            name: 'প্রকৌ. মোঃ শাখাওয়াত হাসান',
            position: 'উপ-পরিদর্শক (বিএম)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'dihscbmbteb@gmail.com',
            mobile: '০১৯৯৭৬২৬৭৩৭',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 20,
            serial: '২০',
            img: subInspector2,
            name: 'প্রকৌশলী হরিপদ চন্দ্র পাল',
            position: 'উপ-পরিচালক (প্রকাশনা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'ddpublication.bteb@gmail.com',
            mobile: '০১৭১১৩৩৮৩৫১',
            mobileOffice: '০২-৪৮১২১৭০৮',
            mobileHome: '০২-৪১০৩১৭৯৫',
            fax: ''
        },
        {
            id: 21,
            serial: '২১',
            img: subController4,
            name: 'প্রকৌ. মোঃ এনায়েত করিম',
            position: 'উপ-পরীক্ষা নিয়ন্ত্রক (সনদ)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'anayet_2013@yahoo.com',
            mobile: '০১৮১৫৮৮২১১৯',
            mobileOffice: '০২-৫৫০০৬৫৩৩',
            mobileHome: '',
            fax: ''
        },
        {
            id: 22,
            serial: '২২',
            img: subPorichalok2,
            name: 'মোঃ তোফাজ্জল হক',
            position: 'উপ-পরিচালক (লার্নিং ম্যাটেরিয়ালস ডেভেলপমেন্ট)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'md.tofazzal_hoque@yahoo.com',
            mobile: '০১৭১১-০৪৫৭৫৫',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 23,
            serial: '২৩',
            img: mullaion,
            name: 'জনাব মোঃ হুমায়ুন কবির',
            position: 'মূল্যায়ন কর্মকর্তা ও উপ-পরিদর্শক (অ.দা.)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'humayunme.2001@gmail.com',
            mobile: '০১৭৪০-৮৪২১৪৭',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 24,
            serial: '২৪',
            img: programmer,
            name: 'জনাব মোহাম্মদ জাকির হোসেন হাওলাদার',
            position: 'প্রোগ্রামার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'jakir_hossain63@yahoo.com',
            mobile: '০১৭১১৩৮৩৮৩৫',
            mobileOffice: '',
            mobileHome: '০১৭১১৩৮৩৮৩৫',
            fax: ''
        },
        {
            id: 25,
            serial: '২৫',
            img: programmer1,
            name: 'জনাব মোঃ মারফত আলী',
            position: 'প্রোগ্রামার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'marfatnew@gmail.com',
            mobile: '০১৭১৫৯১৫৪৭২',
            mobileOffice: '',
            mobileHome: '০১৭১৫৯১৫৪৭২',
            fax: ''
        },
        {
            id: 26,
            serial: '২৬',
            img: curriculumn,
            name: 'জনাব মোহাম্মদ আব্দুল কাইউম',
            position: 'কারিকুলাম বিশেষজ্ঞ (টেক্সটাইল)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'cstextilediploma@gmail.com',
            mobile: '০১৭১৬১৯২৭৭৮',
            mobileOffice: '',
            mobileHome: '০১৭১৬১৯২৭৭৮',
            fax: ''
        },
        {
            id: 27,
            serial: '২৭',
            img: specialist,
            name: 'জনাব মোঃ আব্দুল্লা আল মাবুদ',
            position: 'বিশেষজ্ঞ (লার্ণিং ম্যাটেরিয়ালস ডেভেলপমেন্ট)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mabud82@gmail.com',
            mobile: '০১৭১৮৪০৬২৭১',
            mobileOffice: '',
            mobileHome: '০১৭১৮৪০৬২৭১',
            fax: ''
        },
        {
            id: 28,
            serial: '২৮',
            img: curriculumn1,
            name: 'জনাব রূপক কান্তি বিশ্বাস',
            position: 'কারিকুলাম বিশেষজ্ঞ (ডিপ্লোমা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'btebcsdiploma@gmail.com',
            mobile: '০১৬২৫৫৫৪৪০৬',
            mobileOffice: '',
            mobileHome: '০১৬২৫৫৫৪৪০৬',
            fax: ''
        },
        {
            id: 29,
            serial: '২৯',
            img: curriculumn2,
            name: 'প্রকৌশলী মোঃ ফারুক রেজা',
            position: 'কারিকুলাম বিশেষজ্ঞ (দাখিল ভোকেশনাল)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'rezabteb@gmail.com',
            mobile: '০১৭১২২৫৫৭৪৬',
            mobileOffice: '০২-৫৫০০৬৫৪০',
            mobileHome: '',
            fax: ''
        },
        {
            id: 30,
            serial: '৩০',
            img: specialist1,
            name: 'জনাব মোহাম্মদ গোলাম মহিউদ্দিন ভূঁইয়া',
            position: 'বিশেষজ্ঞ (এসএসসি ভোকেশনাল)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mahib29@gmail.com',
            mobile: '০১৭১৬৯৪৩০৬৪',
            mobileOffice: '',
            mobileHome: '০১৭১৬৯৪৩০৬৪',
            fax: ''
        },
        {
            id: 31,
            serial: '৩১',
            img: specialist2,
            name: 'জনাব মোঃ শাহ আলম মজুমদার',
            position: 'বিশেষজ্ঞ (কোর্স এ্যাক্রিডিটেশন)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'ehlam1999@gmail.com',
            mobile: '০১৮১৫৪২৪৮৫৫',
            mobileOffice: '০২-৫৫০০৬৫৪৩',
            mobileHome: '০১৮১৫৪২৪৮৫৫',
            fax: ''
        },
        {
            id: 32,
            serial: '৩২',
            img: curriculumn3,
            name: 'জনাব মুহঃ আবদুর রাজ্জাক মিঞা',
            position: 'কারিকুলাম বিশেষজ্ঞ (শর্ট কোর্স)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mianrazzaque67@gmail.com',
            mobile: '০১৭১১৯৩৩৫৪৩',
            mobileOffice: '০২-৫৫০০৬৫৩৮',
            mobileHome: '',
            fax: ''
        },
        {
            id: 33,
            serial: '৩৩',
            img: industry,
            name: 'জনাব মোঃ ফজলুল করিম',
            position: 'ইন্ডাষ্ট্রি লিয়াজোঁ অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: '',
            mobile: '০১৭১৭৪৩৯৯১২',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 34,
            serial: '৩৪',
            img: programmer2,
            name: 'জনাব মোহাম্মদ হাসান ঈমাম',
            position: 'প্রোগ্রামার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mheedusoft@gmail.com',
            mobile: '০১৭১২৮৬২৩৫৮',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 35,
            serial: '৩৫',
            img: curriculumn4,
            name: 'মোহাম্মদ সাজজাদ মুফতী',
            position: 'কারিকুলাম বিশেষজ্ঞ (বিএম)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'sazzadmufti@gmail.com',
            mobile: '০১৯১৪-০৭৬০৭১',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 36,
            serial: '৩৬',
            img: specialist3,
            name: 'প্রকৌশলী জান্নাতুল ফেরদৌসী',
            position: 'বিশেষজ্ঞ (গবেষণা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'ferdousy20@yahoo.com',
            mobile: '',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 37,
            serial: '৩৭',
            img: curriculumn5,
            name: 'কৃষিবিদ ড. মোঃ আব্দুল মালেক',
            position: 'কারিকুলাম বিশেষজ্ঞ (কৃষি)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'csagribteb@gmail.com',
            mobile: '০১৭১৬৯২৪৩৪৪',
            mobileOffice: '০২-৫৫০০৬৫৪১',
            mobileHome: '',
            fax: ''
        },
        {
            id: 38,
            serial: '৩৮',
            img: industry1,
            name: 'জনাব মোঃ নওশাদ আলী',
            position: 'ইন্ডাষ্ট্রি লিয়াজোঁ অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'nowsad77@gmail.com',
            mobile: '০১৭১৬০৪৪৬১১',
            mobileOffice: '',
            mobileHome: '০১৭১৬০৪৪৬১১',
            fax: ''
        },
        {
            id: 39,
            serial: '৩৯',
            img: subController5,
            name: 'জনাব মোঃ মাছুম বিল্লাল সরদার',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mdsarder.bteb@gmail.com',
            mobile: '০১৩২২৮৩০১০০',
            mobileOffice: '',
            mobileHome: '০১৭৯৩২৬৩৬৫১',
            fax: ''
        },
        {
            id: 40,
            serial: '৪০',
            img: subController6,
            name: 'জনাব মোঃ গোলাম কাওছার',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক (বিতরণ)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mgkawsar@yahoo.com',
            mobile: '০১৭১৫৮৮৮১৩৫',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 41,
            serial: '৪১',
            img: information,
            name: 'জনাব মনিরা সিকদার',
            position: 'ইনফরমেশন অফিসার ও সহকারী সচিব (অ. দা.)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'monirabteb@gmail.com',
            mobile: '০১৭৭৬৫২৮৮৭৫',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 42,
            serial: '৪২',
            img: asstProgrammer,
            name: 'জনাব মোঃ রেজভী হোসেন',
            position: 'সহকারি প্রোগ্রামার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'rezvibd@gmail.com',
            mobile: '০১৬৮৫৯১৩০৯২',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 43,
            serial: '৪৩',
            img: asstProgrammer1,
            name: 'জনাব মোঃ শামীম রেজা',
            position: 'সহকারি প্রোগ্রামার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'shamimreza06@gmail.com',
            mobile: '০১৭৯৮৭৩৭২২২',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 44,
            serial: '৪৪',
            img: quality,
            name: 'জনাব মোঃ মঈনুল হোসেন',
            position: 'কোয়ালিটি অ্যাসুরেন্স অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'moynulhossain2@gmail.com',
            mobile: '০১৭১৮৫৫৬৬১২',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 45,
            serial: '৪৫',
            img: quality1,
            name: 'জনাব মোঃ বজলুর রহমান',
            position: 'কোয়ালিটি অ্যাসুরেন্স অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'bozlur86@gmail.com',
            mobile: '০১৭২৬০২৫০৬০',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 46,
            serial: '৪৬',
            img: quality2,
            name: 'জনাব হুমায়রা মাইসুর',
            position: 'কোয়ালিটি অ্যাসুরেন্স অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'hmaisur@yahoo.com',
            mobile: '০১৭২৩৩৫০৪৯৬',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 47,
            serial: '৪৭',
            img: quality3,
            name: 'জনাব কল্যান ব্রত দাস',
            position: 'কোয়ালিটি অ্যাসুরেন্স অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'kb.das2013@gmail.com',
            mobile: '০১৭১১৫০৭২১৫',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 48,
            serial: '৪৮',
            img: maintainance,
            name: 'জনাব এস. এম. গোলাম কিবরিয়া কার্জন',
            position: 'সহকারী মেইনটেনেন্স ইঞ্জিনিয়ার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'kibria.carzon@gmail.com',
            mobile: '০১৯১৭৪৫৯২৩৪',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 49,
            serial: '৪৯',
            img: subController7,
            name: 'জনাব মোঃ মোস্তাফিজুর রহমান',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: '',
            mobile: '০১৭১১২৮১৫৩৪',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 50,
            serial: '৫০',
            img: subPorichalok3,
            name: 'জনাব মোঃ শামসুল হায়দার',
            position: 'সহকারী পরিচালক (হিসাব ও নিরীক্ষা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'shamsulhaider70@yahoo.com',
            mobile: '০১৫৫২৪২৮৫৭৯, ০১৯১৪৫৭৫১২০',
            mobileOffice: '+৮৮০২-৫৫০০৬৫৪৫',
            mobileHome: '',
            fax: ''
        },
        {
            id: 51,
            serial: '৫১',
            img: operator,
            name: 'জনাব এম এ সালাম',
            position: 'সিনিয়র কম্পিউটার অপারেটর',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'salambteb@gmail.com',
            mobile: '০১৭১৬-৩৫২৭৪৬',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 52,
            serial: '৫২',
            img: asstProgrammer2,
            name: 'জনাব মোঃ আবুল হাশেম',
            position: 'সহকারী প্রোগ্রামার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mahasembteb@gmail.com',
            mobile: '০১৭২৪-৮৯৫০০২',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 53,
            serial: '৫৩',
            img: asstProgrammer3,
            name: 'জনাব মোঃ শাহান শাহ্‌ টিপু',
            position: 'সহকারী প্রোগ্রামার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'tipu050180@gmail.com',
            mobile: '০১৭১৬-৫৩০০৮২',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 54,
            serial: '৫৪',
            img: asstProgrammer4,
            name: 'জনাব মোঃ রফিকুল ইসলাম',
            position: 'সহকারী প্রোগ্রামার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mrislam80@gmail.com',
            mobile: '০১৭১৫-৮৩৫৯১১',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 55,
            serial: '৫৫',
            img: registration,
            name: 'জনাব মেহেদী হাসান',
            position: 'রেজিস্ট্রেশন অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mastermehedi1990@gmail.com',
            mobile: '০১৫৩৩-৪৯২৮৪১',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 56,
            serial: '৫৬',
            img: subPorichalok4,
            name: 'জনাব মোঃ মেহেদী হাসান খান',
            position: 'সহকারী পরিচালক (প্রকাশনা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'adpublication.bteb@gmail.com',
            mobile: '০১৬৭০-৬৫৮৫৬৮',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 57,
            serial: '৫৭',
            img: subController8,
            name: 'জনাব মোঃ হুমায়ুন কবির',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক (বিএম)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'humayun1202041@gmail.com',
            mobile: '০১৭৩৮-৮৪৭০৬১',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 58,
            serial: '৫৮',
            img: subController9,
            name: 'জনাব মোঃ খাইরুল ইসলাম',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক (দাখিল ভোকেশনাল) ও প্রেস ম্যানেজার কাম প্রুফ রিডার (অ. দা.)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'khairulace21.bteb@gmail.com',
            mobile: '০১৭২৮-৫০৭৫১২',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 59,
            serial: '৫৯',
            img: subController10,
            name: 'জনাব রতন চন্দ্র নাথ',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক (ভোকেশনাল)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'acedvoc.bteb@gmail.com',
            mobile: '০১৭২৮-৩৬৬৩৪৪',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 60,
            serial: '৬০',
            img: subSpecialist,
            name: 'জনাব মোঃ জহিরুল ইসলাম',
            position: 'সহকারী বিশেষজ্ঞ (কোর্স এ্যাক্রিডিটেশন)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'zahirulislam6989@gmail.com',
            mobile: '০১৭২৩-৭৩১৩৫৫',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 61,
            serial: '৬১',
            img: subSpecialist1,
            name: 'জনাব মোঃ আহসান হাবীব',
            position: 'সহকারী বিশেষজ্ঞ (এলএমডি)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'ahsan.iman@gmail.com',
            mobile: '০১৭১২-৯২৬৫৬৬',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 62,
            serial: '৬২',
            img: quality4,
            name: 'জনাব মোঃ মওদুদ আহমেদ',
            position: 'কোয়ালিটি অ্যাসুরেন্স অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mdmaududahammad@gmail.com',
            mobile: '০১৭১০-২৪৪০৫৪',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 63,
            serial: '৬৩',
            img: quality5,
            name: 'জনাব শর্মিলা আক্তার',
            position: 'কোয়ালিটি অ্যাসুরেন্স অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'sharmila.akter77@gmail.com',
            mobile: '০১৩০০-৪১৫৭০৬',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 64,
            serial: '৬৪',
            img: subController11,
            name: 'মোহাম্মদ মাকসুদুর রহমান',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক (ডিপ্লোমা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'maksodor@gmail.com',
            mobile: '০১৫৫৮৮৫৪৮১৫',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 65,
            serial: '৬৫',
            img: subSpecialist2,
            name: 'জনাব মোঃ আবু তারিক সিদ্দিকী',
            position: 'সহকারী বিশেষজ্ঞ (লার্নিং ম্যাটেরিয়ালস ডেভেলপমেন্ট)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'tarique0001@yahoo.com',
            mobile: '০১৯১২১৫২৮৪২',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 66,
            serial: '৬৬',
            img: subController12,
            name: 'মোঃ সাখাওয়াত হোসেন',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক (গোপনীয়)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'sakhawat_1981@yahoo.com',
            mobile: '০১৫৫৮-৩৫৬২৮৮',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 67,
            serial: '৬৭',
            img: subController13,
            name: 'মোঃ ইলিয়াস হোসেন',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক (ডিপ্লোমা)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'acdip.bteb23@gmail.com',
            mobile: '০১৫৭৫৬৮২৫১৭',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 68,
            serial: '৬৮',
            img: subController14,
            name: 'প্রকৌশলী মোঃ সাইদুর রহমান',
            position: 'সহকারী পরীক্ষা নিয়ন্ত্রক (সনদ)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'sydurduet@gmail.com',
            mobile: '০১৭১৩৬৮৩০৮৮',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 69,
            serial: '৬৯',
            img: asstProgrammer5,
            name: 'জনাব মোঃ মামুন অর রশিদ',
            position: 'সহকারী প্রোগ্রামার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'mamun.592792@gmail.com',
            mobile: '০১৭১৬৫৯২৭৯২',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 70,
            serial: '৭০',
            img: section,
            name: 'জনাব মোঃ জাহাঙ্গীর আলম',
            position: 'সেকশন অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: '',
            mobile: '',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 71,
            serial: '৭১',
            img: section1,
            name: 'জনাব মোঃ নূরুন্নবী মন্ডল',
            position: 'সেকশন অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: '',
            mobile: '',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 72,
            serial: '৭২',
            img: store,
            name: 'জনাব মোঃ মোয়াজ্জেম হোসেন',
            position: 'স্টোর অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: '',
            mobile: '',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 73,
            serial: '৭৩',
            img: subEngineer,
            name: 'জনাব মোঃ মোরশেদ আলম',
            position: 'উপ-সহকারি প্রকৌশলী (ইলেকট্রিক্যাল)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'morshed.bteb@gmail.com',
            mobile: '০১৭১৪১১২১০০',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 74,
            serial: '৭৪',
            img: proof,
            name: 'জনাব মোঃ লিপন মিয়া',
            position: 'প্রুফ রিডার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'liponbteb@gmail.com',
            mobile: '০১৭৬৭৫২০৯৬৬',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 75,
            serial: '৭৫',
            img: subEngineer1,
            name: 'জনাব মোঃ জহির উদ্দিন আহাম্মেদ',
            position: 'উপ-সহকারি প্রকৌশলী (সিভিল)',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'jahir.bteb@gmail.com',
            mobile: '০১৭১৪১১২১১৫',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 76,
            serial: '৭৬',
            img: section2,
            name: 'জনাব মোঃ হারুন অর রশিদ',
            position: 'সেকশন অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'harunrashid214@gmail.com',
            mobile: '০১৭১১৩৮৩৮৪৫',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 77,
            serial: '৭৭',
            img: section3,
            name: 'জনাব কে এম আব্দুল্লাহ ইবনে ফজল',
            position: 'সেকশন অফিসার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'kmfazal.info@gmail.com',
            mobile: '০১৭৯০৭৩৬৩৮০',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        },
        {
            id: 78,
            serial: '৭৮',
            img: proof1,
            name: 'মোঃ ওয়াহিদুজ্জামান',
            position: 'প্রুফ রিডার',
            office: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড',
            email: 'wahidbd90@gmail.com',
            mobile: '০১৭৩৭-১০৮১৮৮',
            mobileOffice: '',
            mobileHome: '',
            fax: ''
        }
    ]

    return (
        <div className="container 2xl:px-10 pt-10 mx-auto bg-white">
            {/* left sections */}
            <TextChanger />
            <div className='flex text-3xl justify-end mt-7'>
                <MdPrint />
            </div>
            <h1 className='text-3xl'>কর্মকর্তাবৃন্দ</h1>
            <div className='flex justify-end'>
                <p className='text-sm text-center text-white hover:text-black w-1/5 py-1 bg-gradient-to-b from-gray-500 to-gray-300'>কর্মকর্তাবৃন্দের তালিকা ছবি ছাড়া</p>
            </div>
            {
                officers.map(officer =>
                    <div key={officer.id} className='text-base flex pb-10'>
                        <div className='w-1/6 border'>

                            <div className='flex border'>
                                <div className='w-2/12 border'>
                                    <h1 className='pl-1 pt-1'>{officer.serial}</h1>
                                </div>
                                <div className='w-10/12 border flex justify-center'>
                                    <img className='w-10/12 h-48' src={officer.img} alt="authority" />
                                </div>
                            </div>
                        </div>
                        <div className='w-4/5 flex border p-1'>
                            <div className='w-1/2 border border-gray-300 flex items-center p-1 bg-[#EEEEEE]'>
                                <div className='w-1/3'>
                                    <p className='border border-gray-300 py-2 pl-2'>নাম</p>
                                    <p className='border border-gray-300 py-2 pl-2'>পদবি</p>
                                    <p className='border border-gray-300 py-2 pl-2'>অফিস</p>
                                    <p className='border border-gray-300 py-2 pl-2'>ই-মেইল</p>
                                </div>
                                <div className='w-2/3'>
                                    <p className='border border-gray-300 py-2 pl-2'>{officer.name}</p>
                                    <p className='border border-gray-300 py-2 pl-2'>{officer.position}</p>
                                    <p className='border border-gray-300 py-2 pl-2'>{officer.office}</p>
                                    <p className='border border-gray-300 py-2 pl-2'>{officer.email}</p>
                                </div>
                            </div>
                            <div className='w-1/2 border flex items-center p-1'>
                                <div className='w-1/3'>
                                    <p className='border border-gray-300 bg-[#EEEEEE] py-2 pl-2'>মোবাইল</p>
                                    <p className='border border-gray-300 bg-[#EEEEEE] py-2 pl-2'>ফোন (অফিস)</p>
                                    <p className='border border-gray-300 bg-[#EEEEEE] py-2 pl-2'>ফোন (বাসা)</p>
                                    <p className='border border-gray-300 bg-[#EEEEEE] py-2 pl-2'>ফ্যাক্স</p>
                                </div>
                                <div className='w-2/3'>
                                    <p className='border border-gray-300 py-2 pl-2'>{officer.mobile}</p>
                                    <p className='border border-gray-300 py-2 pl-2'>{officer.mobileOffice}</p>
                                    <p className='border border-gray-300 py-2 pl-2'>{officer.mobileHome}</p>
                                    <p className='border border-gray-300 py-2 pl-2'>{officer.fax}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Officers;