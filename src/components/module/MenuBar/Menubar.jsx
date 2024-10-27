"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Menubar() {
    const pathName = usePathname();
    const [activeMenu , setActiveMenu] = useState('/');
    
    useEffect(()=>{
        const userLocation = pathName;
        setActiveMenu(userLocation);
        window.scroll(0 , 0)
    },[pathName])

  return (
    <section className="block  lg:hidden fixed bottom-0 w-full  py-4 bg-white">
        <div className="container">
            <div className="flex justify-center items-center  gap-6">
                <Link href="/" className={activeMenu === '/' ? "block font-iranBold text-xl text-secondary-100" :'block font-iranBold text-xl text-font-100 ease-linear duration-300 hover:text-secondary-100'}>خانه</Link>
                <Link href="/AboutMe" className={activeMenu === '/AboutMe' ? "block font-iranBold text-xl text-secondary-100" :'block font-iranBold text-xl text-font-100 ease-linear duration-300 hover:text-secondary-100'}>درباه من</Link>
                <Link href="/Projects" className={activeMenu === '/Projects' ? "block font-iranBold text-xl text-secondary-100" :'block font-iranBold text-xl text-font-100 ease-linear duration-300 hover:text-secondary-100'}>پروژه ها</Link>
                <Link href="/Articles" className={activeMenu === '/Articles' ? "block font-iranBold text-xl text-secondary-100" :'block font-iranBold text-xl text-font-100 ease-linear duration-300 hover:text-secondary-100'}>بلاگ</Link>
            </div>
        </div>
    </section>
  )
}

export default Menubar