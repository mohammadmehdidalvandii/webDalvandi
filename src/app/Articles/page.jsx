import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar';
import Blog from '@/components/template/articles/Blog/Blog';
import React from 'react';

export const metadata = {
    title: "   مقالات |  دالوندی",
    description: "برنامه نویس فرانت اند ",
  };

function page() {
  return (
    <>
    <Navbar/>
    <Blog/>
    <Menubar/>
    </>
  )
}

export default page