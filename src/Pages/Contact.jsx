import React, { useEffect } from 'react';
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsLetterBox'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component loads
  }, []);
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t mt-6'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-xl text-gray-600'>Address</p>
          <p className=' text-gray-500'>47B/2, Sorkka vaasal street<br /> C N village, Tirunelveli, Tamil Nadu, 627001</p>
          <p className=' text-gray-500'>Phone: (+91) 98439 29032 <br /> Email: riyascouture24@gmail.com</p>
          <p className=' font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact



