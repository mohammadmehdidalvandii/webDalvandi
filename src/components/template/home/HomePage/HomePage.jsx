import Link from 'next/link'
import React from 'react'
import { FaInstagram  , FaLinkedinIn , FaGithub ,FaTelegram, FaPhone } from "react-icons/fa";


function HomePage() {
  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className=" md:grid xs:flex xs:flex-col-reverse sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                <div className="block md:mt-32 sm:mt-16 xs:mt-12">
                    <h1 className="block font-iranBlack text-6xl ">محمدمهدی دالوندی  </h1>
                    <span className="block mt-6 font-iranBold text-4xl  text-secondary-100">فرانت اند کار </span>
                    <p className="block mt-6 text-lg text-font-300">یک مید لول فرانت اند هستم میگن HTML-CSS-JAVASCRIPT ترکیب کنی میشه ازش سایت جالب باحال درست کرد منم درست کردم کنارشم REACT بلدم و ....</p>
                    <div className="flex gap-6 mt-6">
                        <Link href="/AboutMe"  className='btn_secondary'>درباه من</Link>
                        <Link href="/ContactMe"  className='btn_primary'>تماس با من</Link>
                        <Link href="" download={true}  className='btn_secondary'>رزومه من</Link>
                    </div>
                    <div className="block mt-8">
                        <h5 className="block font-iranBold text-xl text-font-300">لینک شبکه های اجتماعی</h5>
                        <div className="flex gap-6 mt-4">
                        <Link href="https://www.instagram.com/dalvandi_dev" className='text-xl duration-300 ease-linear hover:text-secondary-100' target='_blank'>
                            <FaInstagram/>
                        </Link>
                        <Link href="www.linkedin.com/in/mohammadmehdidalvandii" className='text-xl duration-300 ease-linear hover:text-secondary-100' target='_blank'>
                            <FaLinkedinIn/>
                        </Link>
                        <Link href="https://github.com/mohammadmehdidalvandii" className='text-xl duration-300 ease-linear hover:text-secondary-100' target='_blank'>
                            <FaGithub/>
                        </Link>
                        <Link href="tel:09390944025" className='text-xl duration-300 ease-linear hover:text-secondary-100' target='_blank'>
                            <FaPhone/>
                        </Link>
                        {/* <Link href="#" className='text-xl duration-300 ease-linear hover:text-secondary-100' target='_blank'>
                            <FaTelegram/>
                        </Link> */}
                        </div>
                    </div>
                </div>
                <div className="block">
                <img src="/assets/images/home.svg" alt="home image" className="block w-[84%] h-full text-center" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePage