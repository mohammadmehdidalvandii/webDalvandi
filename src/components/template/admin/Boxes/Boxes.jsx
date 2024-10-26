import React from 'react'
import ProjectModel from '@/models/Project'
import ArticleModel from '@/models/Article'
import MessageModel from '@/models/Message'

async   function Boxes() {
    const project = await ProjectModel.find({})
    const article = await ArticleModel.find({})
    const message = await MessageModel.find({})

  return (
    <section className="block my-12">
        <div className="container">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200">
                    <h6 className="block text-center font-iranBlack text-2xl text-font-300">پروژه های من</h6>
                    <span className="block text-center text-3xl text-secondary-default mt-3">{project.length > 0 ? project.length : "پروژه هنوز ایجاد نشد"}</span>
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200">
                    <h6 className="block text-center font-iranBlack text-2xl text-font-300">بلاگ های من</h6>
                    <span className="block text-center text-3xl text-secondary-default mt-3">{article.length > 0 ? article.length : "مقاله هنوز ایجاد نشد"}</span>
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200">
                    <h6 className="block text-center font-iranBlack text-2xl text-font-300">تماس با من</h6>
                    <span className="block text-center text-3xl text-secondary-default mt-3">{message.length > 0 ? message.length : "پیام وجود ندارد"}</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Boxes