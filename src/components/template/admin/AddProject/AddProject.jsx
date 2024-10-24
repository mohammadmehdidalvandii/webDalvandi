"use client";
import React, { useState } from "react";
import swal from "sweetalert";


function AddProject() {
  const [name, setName] = useState("");
  const [techs, setTechs] = useState("");
  const [description, setDescription] = useState("");
  const [onlineLink, setOnlineLink] = useState("");
  const [github, setGithub] = useState("");
  const [img, setImg] = useState([]);
  const [sourceCode, setSourceCode] = useState("");

  const handlerAddProject = async (e) => {
    e.preventDefault();

    // validations

    const formData = new FormData();

    formData.append("name" , name )    
    formData.append("techs" , techs.split("-") )
    formData.append("description" , description )
    formData.append("onlineLink" , onlineLink )
    formData.append("github" , github )
    formData.append("img" , img )
    // img.forEach((file)=>{
    //   console.log("img" , file)
    //   formData.append("img[]",file)
    // })
    formData.append("sourceCode" , sourceCode )

    const res = await fetch('/api/project',{
        method :"POST",
        body:formData,
    })

    if(res.status === 201){
        swal({
            title:"با موفقیت پروژه اضافه شد",
            icon:"success",
            buttons:"باشه"
        }).then(()=>{
            location.reload()
        })
    } else if(res.status === 422 || res.status === 419){
        swal({
            title:"اطلاعات به درستی وارد نشد است",
            icon:"error",
            buttons:"تلاش مجدد"
        })
    }
};

// const handleImageChange = (e) => {
//     const files = e.target.files;
//     console.log("files=>" ,files)
//     setImg(Array.from(files));
//   };

  return (
    <section className="block my-12 ">
      <div className="container">
        <div className="block">
          <h4 className="block font-iranBold text-3xl"> افزودن پروژه جدید</h4>
        </div>
        <div className="block gap-6 mt-8 bg-white p-4 rounded-lg shadow-xl shadow-font-200">
          <form action="#" className="block w-full">
            <div className="block w-full mb-4">
              <label htmlFor="#" className="block">
                نام پروژه
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full h-12 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2"
              />
            </div>
            <div className="block w-full mb-4">
              <label htmlFor="#" className="block">
                تکنولوژِی ها
              </label>
              <input
                type="text"
                value={techs}
                onChange={(e) => setTechs(e.target.value)}
                className="block w-full h-12 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2"
              />
            </div>
            <div className="block w-full mb-4">
              <label htmlFor="#" className="block">
                توضیحات{" "}
              </label>
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full h-28 pt-2 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2"
              />
            </div>
            <div className="block w-full mb-4">
              <label htmlFor="#" className="block">
                لینک نمایش انلاین
              </label>
              <input
                type="text"
                value={onlineLink}
                onChange={(e) => setOnlineLink(e.target.value)}
                className="block w-full h-12 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2"
              />
            </div>
            <div className="block w-full mb-4">
              <label htmlFor="#" className="block">
                لینک گیت هاب
              </label>
              <input
                type="text"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="block w-full h-12 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2"
              />
            </div>
            {/* <div className="block w-full mb-4">
              <label htmlFor="#" className="block">
                انتخاب عکس‌ها
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                className="block w-full h-12 mt-2"
                multiple // Allow multiple file selection
              />
            </div> */}
             <div className="flex mt-4">
              <div className="block w-full mb-4">
                <label htmlFor="#" className="block">
                  عکس 1
                </label>
                <input
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                  className="block w-full h-12 mt-2"
                />
              </div>
              {/* <div className="block w-full mb-4">
                <label htmlFor="#" className="block">
                  عکس 2
                </label>
                <input
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                  className="block w-full h-12 mt-2"
                />
              </div>
              <div className="block w-full mb-4">
                <label htmlFor="#" className="block">
                  عکس 3
                </label>
                <input
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                  className="block w-full h-12 mt-2"
                />
              </div>
              <div className="block w-full mb-4">
                <label htmlFor="#" className="block">
                  عکس 4
                </label>
                <input
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                  className="block w-full h-12 mt-2"
                />
              </div> */}
            </div> 
            <div className="block w-full mb-4">
              <label htmlFor="#" className="block">
                سورس کد
              </label>
              <input
                type="file"
                onChange={(e) => setSourceCode(e.target.files[0])}
                className="block w-full h-12 mt-2"
              />
            </div>
            <button
              className="btn_secondary w-full"
              onClick={handlerAddProject}
            >
              افزودن
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddProject;
