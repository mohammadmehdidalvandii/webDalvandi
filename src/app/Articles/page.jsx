import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar';
import Blog from '@/components/template/articles/Blog/Blog';
import React from 'react';
import connectToDB  from '@/config/db'; 
import ArticleModel from '@/models/Article';
import { authUser } from '@/utils/serverHelpers';


export const metadata = {
    title: "   مقالات |  دالوندی",
    description: "برنامه نویس فرانت اند ",
  };

async function page() {
  const user = await authUser()
  await connectToDB();

  const articles = await ArticleModel.find({});

  return (
    <>
    <Navbar isLogin={user?true:false}/>
    <Blog articles={articles}/>
    <Menubar/>
    </>
  )
}

export default page