import Menubar from '@/components/module/MenuBar/Menubar'
import Navbar from '@/components/module/Navbar/Navbar'
import SignIn from '@/components/template/login/SignIn/SignIn'
import React from 'react'

function page() {
  return (
  <>
  <Navbar/>
  <SignIn/>
  <Menubar/>
  </>
  )
}

export default page