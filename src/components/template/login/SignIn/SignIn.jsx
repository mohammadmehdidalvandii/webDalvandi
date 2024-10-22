"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import swal from 'sweetalert'

function SignIn() {
    const [email , setEmail] =useState()
const [password , setPassword] =useState()

const router = useRouter()

const handlerIsLogin = async (e)=>{
    e.preventDefault();

    const user = {email , password};

    const res = await fetch('/api/auth/signin',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user),
    });
    if(res.status === 200){
        swal({
            title:"با موفقیت وارد شدید",
            icon:"success",
            buttons:"ورود به پنل کاربری"
        }).then(()=>{
            router.replace("/Admin")
        })
    }
}


  return (
    <section className="block mt-12">
        <div className="container">
            <div className="block md:w-[500px] mx-auto bg-white shadow-lg shadow-font-200 rounded-lg p-4">
                <h4 className="block text-center font-iranBold text-2xl font-black">ورود</h4>
                <form action="#" className="block mt-4">
                    <div className="block w-full mb-6">
                        <labe className="block mr-2 text-sm">نام کاربری یا ایمیل</labe>
                        <input
                         type="text"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                         className="block w-full h-12 mt-2 border border-font-300 rounded-md outline-secondary-default pr-3" />
                    </div>
                    <div className="block w-full ">
                        <labe className="block mr-2 text-sm">رمز عبور</labe>
                        <input
                         type="password"
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                         className="block w-full h-12 mt-2 border border-font-300 rounded-md outline-secondary-default pr-3" />
                    </div>
                    <button className="btn_secondary mt-8 w-full" onClick={handlerIsLogin}>ورود</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default SignIn