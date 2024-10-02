import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <section className="block w-full py-8 bg-background-100">
        <div className="container">
            <div className="flex items-center justify-between">
                <ul className="xs:hidden lg:flex items-center gap-6">
                    <li className="block">
                        <Link href="/" className='link'>خانه</Link>
                    </li>
                    <li className="block">
                        <Link href="/AboutMe" className='link'>درباه من</Link>
                    </li>
                    <li className="block">
                        <Link href="/Projects" className='link'>پروژه ها</Link>
                    </li>
                    <li className="block">
                        <Link href="/Articles" className='link'>بلاگ</Link>
                    </li>
                </ul>
                 <Link href="/" className='block uppercase font-iranBlack text-3xl sm:text-2xl xs:text-lg'><span className="text-secondary-100">dalvnadi</span> - <span className="text-primary-100">front-end</span></Link>

                 <Link href="/ContactMe" className='link'>تماس با من</Link>
            </div>
        </div>
    </section>
  )
}

export default Navbar