import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar';
import Blog from '@/components/template/articles/Blog/Blog';
import React from 'react';
import connectToDB  from '@/config/db'; 
import ArticleModel from '@/models/Article';


export const metadata = {
    title: "   مقالات |  دالوندی",
    description: "برنامه نویس فرانت اند ",
  };

async function page() {
  await connectToDB();

  const articles = await ArticleModel.find({});

  return (
    <>
    <Navbar/>
    <Blog articles={articles}/>
    <Menubar/>
    </>
  )
}

export default page