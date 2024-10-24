"use client"
import React, { useState } from 'react';
import swal from 'sweetalert';

function AddArticle() {
    const [name ,setName] = useState("")
    const [paragraph ,setParagraph] = useState([])
    const [img ,setImg] = useState({})

    const handlerAddArticle = async (e)=>{
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name)
        formData.append("paragraph", paragraph.split("/"))
        formData.append("img", img)

        const res = await fetch('/api/article',{
            method:"POST",
            body:formData,
        });

        if(res.status === 201){
            swal({
                title:"مقاله با موفقیت ایجاد شد",
                icon:"success",
                button:"باشه"
            }).then(()=>{
                location.reload()
            })
        } else if(res.status === 422 || res.status === 419){
            swal({
                title:"اطلاعات پروژه اضافه شد",
                icon:"error",
                buttons:"تلاش مجدد"
            })
        }
    }

  return (
    <section className="block my-12">
        <div className="container">
            <div className="block">
            <h6 className="block font-iranBlack text-2xl">افزودن مقاله</h6>
            </div>
            <div className="block mt-8 bg-white shadow-xl shadow-font-200 p-4 rounded-lg">
                <form action="#" className="block">
                    <div className="block mb-6">
                        <label htmlFor="" className='block font-iranBold text-sm mb-3'>نام مقاله</label>
                        <input 
                        type="text" 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="block w-full h-12 border border-font-300 pr-3 mt-3 rounded-md outline-secondary-100" />
                    </div>
                    <div className="block mb-6">
                        <label htmlFor="" className='block font-iranBold text-sm mb-3'>متن  مقاله (برای جدا سازی پراگرف از / استفاده کنید)</label>
                        <textarea 
                        type="text" 
                        value={paragraph}
                        onChange={(e)=>setParagraph(e.target.value)}
                        className="block w-full h-[500px] border border-font-300 pr-3 mt-3 rounded-md outline-secondary-100" />
                    </div>
                    <div className="block mb-6">
                        <label htmlFor="" className='block font-iranBold text-sm mb-3'>عکس مقاله</label>
                        <input 
                        type="file" 
                        onChange={(e)=>setImg(e.target.files[0])}
                        className="block" />
                    </div>
                    <button className="btn_secondary w-full" onClick={handlerAddArticle}>ثبت</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AddArticle