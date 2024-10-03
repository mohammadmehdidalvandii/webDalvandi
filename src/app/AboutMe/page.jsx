import Navbar from '@/components/module/Navbar/Navbar';
import About from '@/components/template/about/About/About';
import React from 'react'

export const metadata = {
    title: "  درباره من |  دالوندی",
    description: "برنامه نویس فرانت اند ",
  };

function page() {
  return (
    <>
        <Navbar/>
        <About/>
    </>
  )
}

export default page