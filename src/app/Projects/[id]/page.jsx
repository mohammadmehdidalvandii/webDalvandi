import Navbar from '@/components/module/Navbar/Navbar'
import Banner from '@/components/template/ProjectSingle/Banner/Banner'
import Details from '@/components/template/ProjectSingle/Details/Details'
import React from 'react'

export const metadata = {
  title: "    جزئیات پروژه |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

function page() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Details/>
    </>
  )
}

export default page