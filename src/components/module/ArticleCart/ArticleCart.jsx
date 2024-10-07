import Link from 'next/link';
import React from 'react';


function ArticleCart() {
  return (
    <Link href='#' className="block bg-white shadow-lg shadow-font-200 rounded-lg p-4 cursor-pointer duration-300 hover:scale-90">
    <img src="/assets/images/article.jpg" alt="article" className="block rounded-lg" />
    <div className="block mt-8">
        <h6 className="block font-iranBold text-lg text-secondary-100">چگونه به خوبی HTML یاد بگیریم ؟</h6>
        <p className="block mt-4 text-sm text-font-300">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ....
        </p>
    </div>
</Link>
  )
}

export default ArticleCart