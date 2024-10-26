"use client"
import Link from "next/link";
import React from "react";
import swal from "sweetalert";

function Messages({messages}) {


  // handler show Message
  const showMessage = (msgText)=>{
    swal({
      text:msgText,
      buttons:"خوندم"
    })
  }

  // handlerRemoved message 
  const removedMessage = (msgID)=>{
    swal({
      title:"آیا اطمینان از حذف پیام دارید ؟",
      icon:"warning",
      buttons:["نه","آره"]
    }).then(async(result)=>{
      if(result){
        const res =  await fetch(`/api/message/${msgID}`,{
          method :"DELETE",
          headers:{"Content-Type" : "application/json"}
        })

        if(res.status === 200 ){
          swal({
            title:"پیام مورد نظر شما با موفقیت حذف شد",
            icon:"success",
            buttons:"فهمیدم"
          }).then(()=>{
            location.reload()
          })
        }
      };
    })
  }

  return (
    <section className="block my-12">
      <div className="container">
        <div className="block">
          <h6 className="title text-right">پیام های شما</h6>
        </div>
        <div className="block mt-8 bg-white rounded-lg shadow-xl shadow-font-200 p-4">
          <table className="min-w-full border border-font-300">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="py-2 px-4 border-b">نام</th>
                <th className="py-2 px-4 border-b">شماره همراه</th>
                <th className="py-2 px-4 border-b">ایمیل</th>
                <th className="py-2 px-4 border-b">پیام</th>
                <th className="py-2 px-4 border-b">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(msg=>(
              <tr className="hover:bg-gray-100 text-center" key={msg._id}>
                <td className="py-2 px-4 border-b">{msg.username}</td>
                <td className="py-2 px-4 border-b">{msg.phone}</td>
                <td className="py-2 px-4 border-b">
                  <Link href={msg.email} target="_blank">{msg.email}</Link>
                </td>
                <td className="py-2 px-4 border-b">
                    <button className="btn_secondary mx-auto" onClick={()=>showMessage(msg.text)}>مشاهده پیام</button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="btn_red mx-auto" onClick={()=>removedMessage(msg._id)}>
                    حذف
                  </button>
                </td>
              </tr>
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Messages;
