import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar'
import ArticleContent from '@/components/template/articleSingle/ArticleContent/ArticleContent'
import React from 'react'
import { authUser } from '@/utils/serverHelpers';
export const metadata = {
  title: "   جزئیات مقاله  |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user?true:false}/>
    <ArticleContent/>
    <Menubar/>
    </>
  )
}

export default page