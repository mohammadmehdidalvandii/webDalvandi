import Link from 'next/link'
import React from 'react'

function Articles({articles}) {
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
                        <button className="btn_red">حذف مقاله</button>
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