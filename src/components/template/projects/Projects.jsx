import ProjectCart from '@/components/module/ProjectCart/ProjectCart'
import React from 'react'

function Projects() {
  return (
    <section className="block mt-12 mb-8"> 
       <div className="container">
       <div className="block">
            <h4 className="block text-center font-iranBlack text-3xl">پروژه های من</h4>
        </div>
        <div className="grid mt-12 gap-6 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <ProjectCart/>
            <ProjectCart/>
            <ProjectCart/>
            <ProjectCart/>
            <ProjectCart/>
        </div>
       </div>
    </section>
  )
}

export default Projects