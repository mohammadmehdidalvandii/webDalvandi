import Menubar from '@/components/module/MenuBar/Menubar'
import Navbar from '@/components/module/Navbar/Navbar'
import SignIn from '@/components/template/login/SignIn/SignIn'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'

async function page() {
  const user = await authUser()
  return (
  <>
  <Navbar isLogin={user?true:false}/>
  <SignIn/>
  <Menubar/>
  </>
  )
}

export default page