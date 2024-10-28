"use client"
import ArticleCart from '@/components/module/ArticleCart/ArticleCart'
import ProjectCart from '@/components/module/ProjectCart/ProjectCart'
import React from 'react'
import swal from 'sweetalert'

function Latest({project , article , message}) {
    
    // handler Removed message
    const removedMessage = (msgID)=>{
        swal({
            title:"آیا اطمینان از حذف پیام دارید ؟",
            icon:"warning",
            buttons:["نه","آره"]
          }).then(async(result)=>{
            if(result){
              const res =  await fetch(`/api/message/${msgID}`,{
                method :"DELETE",
                headers:{"Content-Type" : "application/json"}
              })
      
              if(res.status === 200 ){
                swal({
                  title:"پیام مورد نظر شما با موفقیت حذف شد",
                  icon:"success",
                  buttons:"فهمیدم"
                }).then(()=>{
                  location.reload()
                })
              }
            };
          })
    }
  return (
    <section className="block my-12">
        <div className="container">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200 h-[400px] overflow-y-auto">
                    <h6 className="block font-iranBold text-lg text-secondary-100 mb-4">آخرین پروژه</h6>
                    {
                        project.length >= 0 ? 
                        <ProjectCart 
                        key={project[project.length - 1]._id}
                        id={project[project.length - 1]._id}
                        img={project[project.length - 1].img[0]}
                        name={project[project.length - 1].name}
                    />
                        : 
                        <span className="block text-center font-iranBold ">پروژه وجود ندارد</span>
                    }
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200 h-[400px] overflow-y-auto">
                    <h6 className="block font-iranBold text-lg text-secondary-100 mb-4">آخرین بلاگ</h6>
                    {
                        article.length > 0 ? 
              
                          <ArticleCart 
                          key={article[article.length - 1]._id}
                          id={article[article.length - 1]._id}
                          img={article[article.length - 1].img}
                          name={article[article.length - 1].name}
                          />
                        : 
                        <span className="block text-center font-iranBold ">مقاله وجود ندارد</span>
                    }
                    
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200 h-[400px] overflow-y-auto">
                    <h6 className="block font-iranBold text-lg text-secondary-100 mb-4"> تماس ها</h6>
                    {
                        message.length > 0 ? 
                        message.map((msg)=>(
                        <div className="flex justify-between items-center mb-3" key={msg._id}>
                        <span className="block">{msg.username}</span>
                        <div className="flex gap-4">
                            <button className="btn_primary" onClick={()=>{
                               swal({
                                text:msg.text,
                                buttons:"خوندم"
                               })
                            }}>مشاهده پیام</button>
                            <button className="flex justify-center items-center w-[120px] h-10 rounded-lg bg-red-700 text-white text-lg duration-300 hover:bg-red-500"
                            onClick={()=>removedMessage(msg._id)}
                            >حذف</button>
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