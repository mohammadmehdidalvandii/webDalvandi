"use client"
import React from 'react'

function About({skills}) {

    // handler Removed Skill

    const handlerRemovedSkill =(skillID)=>{
        swal({
            title:"آیا از حذف تخصص خود اطمینان دارید؟",
            icon:"warning",
            buttons:["نه","آره"]
        }).then(async (result)=>{
            if(result){
                const res = await fetch(`/api/skill/${skillID}`,{
                    method:"DELETE",
                    headers:{"Content-Type":"application/json"}
                })
                if(res.status === 200){
                    swal({
                        title:"تخصص مورد نظر حذف شد ",
                        icon:"success",
                        buttons:"فهمیدم"
                    }).then(()=>{
                        location.reload()
                    })
                }
            }
        })
    }

  return (
    <section className="block mt-12 mb-8">
        <div className="container">
            <div className="block">
                <h6 className="block font-iranBlack text-2xl">تخصص های من</h6>
            </div>
            <div className="grid gap-6 mt-12 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {skills.map(skill=>(
                         <div className="flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md shadow-font-200" key={skill.id}>
                         <img src={skill.img}alt="skill" className="block" />
                         <button className="btn_red mt-8" onClick={()=>handlerRemovedSkill(skill._id)}>حذف</button>
                     </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default About