import React from 'react';

const AcademicRecognition = () => {

    const forms = [
        {
            id: 1,
            name: 'স্বীকৃতির জন্য আবেদনের সাথে জমাকৃত ডকুমেন্টসের চেকলিস্ট'
        },
        {
            id: 2,
            name: 'একাডেমিক স্বীকৃতি'
        },
        {
            id: 3,
            name: 'এসএসসি (ভোকেশনাল)/দাখিল (ভোকেশনাল)/এইচএসসি (বিএম) শিক্ষাক্রম পরিচালনাকারী বেসরকারি প্রতিষ্ঠানের একাডেমিক স্বীকৃতি প্রদানের আবেদন ফরম'
        },
        {
            id: 4,
            name: 'বেসরকারি ডিপ্লোমা-ইন-এগ্রিকালচার/ডিপ্লোমা-ইন-ফিসারিজ শিক্কা প্রতিষ্ঠানের একাডেমিক স্বীকৃতি প্রদানের আবেদন ফরম'
        },
        {
            id: 5,
            name: 'পাঠদান নবায়ন'
        }
    ]

    return (
        <div className='mt-10'>
            <h1 className='text-lg font-semibold'>একাডেমিক স্বীকৃতি ও পাঠদান নবায়ন ফরম</h1>
            {
                forms.map(form =>
                    <div key={form.id} className='border border-gray-300'>
                        <p className='text-base py-3 text-gray-500 hover:text-black hover:cursor-pointer pl-2'>{form.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export default AcademicRecognition;