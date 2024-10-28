import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import AddArticle from '@/components/template/admin/AddArticle/AddArticle'
import Articles from '@/components/template/admin/Articles/Articles'
import React from 'react'
import connectToDB from '@/config/db'
import ArticleModel from '@/models/Article';


async function page() {
  await connectToDB()

  const articles = await ArticleModel.find({});
  return (
   <AdminLayout>
        <Articles articles={articles}/>
        <AddArticle/>
   </AdminLayout>
  )
}

export default page