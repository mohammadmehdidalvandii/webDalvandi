"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import swal from 'sweetalert'

function Topbar() {

    const router = useRouter();

    // Logic LogoutHandler

    const handlerLogout = ()=>{
        swal({
            title:"آیا از خروج اطمینان دارید ؟",
            icon:"warning",
            buttons:["نه","آره"]
        }).then(async(result)=>{
            console.log("result" , result)
            if(result){
                const res = await fetch('/api/auth/signout',{
                    method:"POST",
                });
                if(res.status === 200){
                    swal({
                        title:"با موفقیت از اکانت خارج شدید",
                        icon:"success",
                        buttons:"فهمیدم"
                    }).then(()=>{
                        router.replace('/')
                    })
                }
            }
        })
    }

  return (
    <section className="block bg-white h-12 pt-2 px-4">
        <div className="flex items-center justify-between">
            <h5 className="block font-iranBlack text-xl text-font-300">خوش آمدید محمدمهدی دالوندی عزیز</h5>
            <ul className="flex gap-6">
                <li className="block">
                    <Link href='/Admin' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">پیشخوان</Link>
                </li>
                <li className="block">
                    <Link href='/Admin/About' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">درباره من</Link>
                </li>
                <li className="block">
                    <Link href='/Admin/Projects' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">پروژه من</Link>
                </li>
                <li className="block">
                    <Link href='/Admin/Article' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">بلاگ من</Link>
                </li>
                <li className="block">
                    <Link href='/Admin' className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-secondary-100">تماس با من</Link>
                </li>
                <li className="block">
                    <button className="block font-iranBold text-font-300 duration-300 ease-linear hover:text-red-700" onClick={handlerLogout}>خروج</button>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Topbar