"use client"
import Link from 'next/link'
import React from 'react'

function Articles({articles}) {

    const handlerRemovedArticle = (articleID , articleName)=>{
        swal({
            title:"آیا از حذف مقاله اطمینان دارید ؟",
            icon:"warning",
            buttons:["نه","آره"]
        }).then(async (result)=>{
            if(result){
                const res = await fetch(`/api/article/${articleID}`,{
                    method:"DELETE",
                    headers:{"Content-Type" : "application/json"}
                   })
                   if(res.status === 200 ){
                    swal({
                        title:`مقاله با نام ${articleName} با موفقیت حذف شد`,
                        icon:"success",
                        buttons:"متوجه شدم"
                    }).then(()=>{
                        location.reload()
                    })
            }
           }
        })
    }

  return (
    <section className="block my-12 h-[600] overscroll-y-auto">
    <div className="container">
        <div className="block">
            <h4 className="block font-iranBlack text-4xl text-font-300">پروژه های من</h4>
        </div>
        <div className="grid mt-12 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                articles.map(article=>(
                <div className="block bg-white rounded-lg p-4" key={article._id}>
                    <img src={article.img} alt="" className="block" />
                        <span className="block mt-4 font-iranBold text-xl">{article.name}</span>
                    <div className="flex justify-between mt-12">
                        <Link href={`/Articles/${article._id}?=${article.name}`} className="btn_primary">مشاهده مقاله</Link>
                        <button className="btn_red" onClick={()=>handlerRemovedArticle(article._id , article.name)}>حذف مقاله</button>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
</section>  
  )
}

export default Articles