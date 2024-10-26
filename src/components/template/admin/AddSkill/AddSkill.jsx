"use client"
import React, { useState } from "react";
import swal from "sweetalert";


function AddSkill() {
  const [img , setImg] = useState(null);

  // handler Add Skill
  const handlerAddSkill = async (e)=>{
    e.preventDefault();

    if(img === null){
      swal({
        title:"مقدار عکس خالی است",
        icon:"error",
        buttons:"تلاش مجدد"
      })
    }

    const formData = new FormData();

    formData.append("img", img);

    const res = await fetch('/api/skill' ,{
      method:"POST",
      body:formData,
    });

    if(res.status === 201){
      swal({
        title:"مهارت شما با موفقیت اضافه شد",
        icon:"success",
        buttons:"فهمیدم"
      }).then(()=>{
        location.reload();
      })
    } else if(res.status === 422 || res.status === 419){
      swal({
        title:"اطلاعات به درستی وارد نشد است",
        icon:"error",
        buttons:"تلاش مجدد"
      })
    }

  }


  return (
    <section className="block mt-12 mb-8">
      <div className="container">
        <div className="block">
          <h6 className="block font-iranBlack text-2xl">افزودن مهارت</h6>
        </div>
        <div className="block mt-8 bg-white py-4 shadow-xl shadow-font-200 rounded-lg" >
            <form action="#" className="flex mr-4">
                <div className="block">
                    <label htmlFor="#" className="block text-lg mb-2">عکس مهارت</label>
                    <input type="file"
                      onChange={(e)=>setImg(e.target.files[0])}
                    />
                </div>
                    <button className="btn_primary" onClick={handlerAddSkill}>ثبت</button>
            </form>
        </div>
      </div>
    </section>
  );
}

export default AddSkill;
