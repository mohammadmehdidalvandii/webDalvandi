import ProjectCart from '@/components/module/ProjectCart/ProjectCart'
import React from 'react'

function Projects({projects}) {
  return (
    <section className="block mt-12 mb-32 lg:mb-8"> 
       <div className="container">
       <div className="block">
            <h5 className="block text-center font-iranBlack text-3xl text-font-300">پروژه های من</h5>
        </div>
        <div className="grid mt-12 gap-6 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {
            projects.slice().reverse().map(project=>(
              <ProjectCart
                key={project.id}
                name={project.name}
                img={project.img[0]}
              />
            ))
          }
        </div>
       </div>
    </section>
  )
}

export default Projects