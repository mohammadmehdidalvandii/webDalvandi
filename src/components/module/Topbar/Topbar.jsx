import Link from 'next/link'
import React from 'react'

function Topbar() {
  return (
    <section className="block bg-white h-12 pt-2 px-4">
        <div className="flex items-center justify-between">
            <h5 className="block font-iranBlack text-xl text-font-300">خوش آمدید محمدمهدی دالوندی عزیز</h5>
            <ul className="flex gap-6">
                <li className="block">
                    <Link href='/Admin' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">پیشخوان</Link>
                </li>
                <li className="block">
                    <Link href='/Admin' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">درباره من</Link>
                </li>
                <li className="block">
                    <Link href='/Admin/Projects' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">پروژه من</Link>
                </li>
                <li className="block">
                    <Link href='/Admin' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">بلاگ من</Link>
                </li>
                <li className="block">
                    <Link href='/Admin' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">تماس با من</Link>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Topbar