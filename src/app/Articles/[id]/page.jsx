import Navbar from '@/components/module/Navbar/Navbar'
import ArticleContent from '@/components/template/articleSingle/ArticleContent/ArticleContent'
import React from 'react'

export const metadata = {
  title: "   جزئیات مقاله  |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

function page() {
  return (
    <>
    <Navbar/>
    <ArticleContent/>
    </>
  )
}

export default page