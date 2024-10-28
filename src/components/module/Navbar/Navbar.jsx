"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Navbar() {
    const pathName = usePathname();
    const [activeMenu , setActiveMenu] = useState('/');
    
    useEffect(()=>{
        const userLocation = pathName;
        setActiveMenu(userLocation);
        window.scroll(0 , 0)
    },[pathName])
  return (
    <section className="block w-full py-8 bg-background-100 px-2">
        <div className="container">
            <div className="flex items-center justify-between">
                <ul className="hidden lg:flex items-center gap-6">
                    <li className="block">
                        <Link href="/" className={activeMenu === '/' ? "link_hover" : "link"}>خانه</Link>
                    </li>
                    <li className="block">
                        <Link href="/AboutMe" className={activeMenu === '/AboutMe' ? "link_hover" : "link"}>درباه من</Link>
                    </li>
                    <li className="block">
                        <Link href="/Projects" className={activeMenu === '/Projects' ? "link_hover" : "link"}>پروژه ها</Link>
                    </li>
                    <li className="block">
                        <Link href="/Articles" className={activeMenu === '/Articles' ? "link_hover" : "link"}>بلاگ</Link>
                    </li>
                </ul>
                 <Link href="/" className='block uppercase font-iranBlack text-sm lg:text-3xl sm:text-2xl xs:text-sm'><span className="text-secondary-100">dalvnadi</span> - <span className="text-primary-100">front-end</span></Link>

                 <Link href="/ContactMe" className={activeMenu === '/ContactMe' ? "link_hover" : "link"}>تماس با من</Link>
            </div>
        </div>
    </section>
  )
}

export default Navbar