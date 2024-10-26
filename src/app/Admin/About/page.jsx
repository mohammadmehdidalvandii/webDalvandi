import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import About from '@/components/template/admin/About/About'
import AddSkill from '@/components/template/admin/AddSkill/AddSkill'
import React from 'react'
import SkillModel from '@/models/Skill';
import connectToDB from '@/config/db';

async function page() {
  await connectToDB()
  const skill = await SkillModel.find({});
  return (
    <AdminLayout>
        <About skills={skill}/>
        <AddSkill/> 
    </AdminLayout>
  )
}

export default page