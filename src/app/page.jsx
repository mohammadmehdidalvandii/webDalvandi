import Menubar from '@/components/module/MenuBar/Menubar'
import Navbar from '@/components/module/Navbar/Navbar'
import HomePage from '@/components/template/home/HomePage/HomePage'
import React from 'react'

function page() {
  return (
   <>
    <Navbar/>
    <HomePage/>
    <Menubar/>
   </>
  )
}

export default page