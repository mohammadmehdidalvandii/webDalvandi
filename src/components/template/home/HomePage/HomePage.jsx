import Link from 'next/link'
import React from 'react'

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
                        <Link href="/"  className='btn_primary'>تماس با من</Link>
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