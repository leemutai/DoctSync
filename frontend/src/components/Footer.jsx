import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ------Left Section------- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a modern, digital-first healthcare management platform designed to simplify the way patients, doctors, and administrators connect. Whether you're booking appointments, consulting with a physician, or managing health data, Prescripto brings healthcare to your fingertips fast, secure, and personalized.

With real-time scheduling, secure payment integrations like M-PESA and Razorpay, and smart reminders, we ensure your health always comes first wherever you are..</p>

        </div>
        {/* ------Middle/center Section------- */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* ------Right Section------- */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+254797001959</li>
                <li>mutailee361@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* ------Copyright Text Section------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2024 LeeSpien - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
