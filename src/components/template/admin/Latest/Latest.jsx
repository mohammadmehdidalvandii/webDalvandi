"use client"
import ArticleCart from '@/components/module/ArticleCart/ArticleCart'
import ProjectCart from '@/components/module/ProjectCart/ProjectCart'
import React from 'react'
import swal from 'sweetalert'

function Latest({project , article , message}) {
    // Latest 
    const latestProject = project.slice(-1)[0];
    const latestArticle = article.slice(-1)[0];
  return (
    <section className="block my-12">
        <div className="container">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200 h-[400px] overflow-y-auto">
                    <h6 className="block font-iranBold text-lg text-secondary-100 mb-4">آخرین پروژه</h6>
                    {
                        project.length > 0 ? 
                        <ProjectCart img={latestProject.img} name={latestProject.name}/>
                        : 
                        <span className="block text-center font-iranBold ">پروژه وجود ندارد</span>
                    }
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200 h-[400px] overflow-y-auto">
                    <h6 className="block font-iranBold text-lg text-secondary-100 mb-4">آخرین بلاگ</h6>
                    {
                        project.length > 0 ? 
                        <ArticleCart  />
                        : 
                        <span className="block text-center font-iranBold ">مقاله وجود ندارد</span>
                    }
                    
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200 h-[400px] overflow-y-auto">
                    <h6 className="block font-iranBold text-lg text-secondary-100 mb-4"> تماس ها</h6>
                    {
                        message.length > 0 ? 
                        message.map((msg)=>(
                        <div className="flex justify-between items-center" key={msg._id}>
                        <span className="block">{msg.username}</span>
                        <div className="flex gap-4">
                            <button className="btn_primary" onClick={()=>{
                               swal({
                                text:msg.text,
                                buttons:"خوندم"
                               })
                            }}>مشاهده پیام</button>
                            <button className="flex justify-center items-center w-[120px] h-10 rounded-lg bg-red-700 text-white text-lg duration-300 hover:bg-red-500">حذف</button>
                        </div>
                    </div>
                        ))
                        :
                        <span className="block text-center font-iranBold ">پیام  وجود ندارد</span>

                    }
                 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Latest