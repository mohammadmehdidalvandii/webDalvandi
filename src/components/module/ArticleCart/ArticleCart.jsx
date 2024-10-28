import Link from 'next/link';
import React from 'react';


function ArticleCart({id , img , name ,paragraph}) {
  return (
    <Link href={`/Articles/${id}?=${name}`} className="block bg-white shadow-lg shadow-font-200 rounded-lg p-4 cursor-pointer duration-300 hover:scale-90">
    <img src={img} alt="article" className="block rounded-lg" />
    <div className="block mt-8">
        <h6 className="block font-iranBold text-lg text-secondary-100">{name}</h6>
        <p className="block mt-4 text-sm text-font-300">
          {paragraph}
        </p>
    </div>
</Link>
  )
}

export default ArticleCart