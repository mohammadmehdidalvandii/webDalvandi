import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar'
import ArticleContent from '@/components/template/articleSingle/ArticleContent/ArticleContent'
import React from 'react'
import { authUser } from '@/utils/serverHelpers';
import connectToDB from '@/config/db';
import ArticleModel from '@/models/Article';

export const metadata = {
  title: "   جزئیات مقاله  |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

async function page({params}) {
  const user = await authUser()
  await connectToDB()

  const articleID = params.id

  const article = await ArticleModel.findOne({_id:articleID});

  return (
    <>
    <Navbar isLogin={user?true:false}/>
    <ArticleContent article={article}/>
    <Menubar/>
    </>
  )
}

export default page