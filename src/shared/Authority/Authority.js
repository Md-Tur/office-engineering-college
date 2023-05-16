import React from 'react';
// images
import edu from "../../images/edu-minster.jpg";
import edu1 from "../../images/edu1-mins.jpg";
import sochib from "../../images/sochib.jpg";
import porichalok from "../../images/porichalok.jpg";
import principal from "../../images/principal.jpg";
// component
import SingleAuthor from './SingleAuthor';

const Authority = () => {

  const titles = [
    {
      id: 1,
      title: 'মাননীয় মন্ত্রী',
      img: edu,
      name: 'ডা. দীপু মনি,',
      position: 'এম.পি.'
    },
    {
      id: 2,
      title: 'মাননীয় উপমন্ত্রী',
      img: edu1,
      name: 'মহিবুল হাসান চৌধুরী,',
      position: 'এম.পি.'
    },
    {
      id: 3,
      title: 'সিনিয়র সচিব',
      img: sochib,
      name: 'মোঃ কামাল হোসেন',
      position: ''
    },
    {
      id: 4,
      title: 'মহাপরিচালক',
      img: porichalok,
      name: 'ড. মোঃ ওমর ফারুক',
      position: ''
    },
    {
      id: 5,
      title: 'অধ্যক্ষ',
      img: principal,
      name: 'অধ্যাপক মোঃ আলমগীর হোসেন',
      position: ''
    },
  ]

  return (
    <div className='2xl:flex 2xl:flex-col lg:flex lg:flex-col md:grid md:grid-cols-2 md:gap-5 sm:grid sm:grid-cols-2 sm:gap-3'>
      {
        titles.map(title =>
          <SingleAuthor key={title.id} title={title} />
        )
      }
    </div>
  );
};

export default Authority;