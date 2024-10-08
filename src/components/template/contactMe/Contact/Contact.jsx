import React from 'react'

function Contact() {
  return (
    <section className="block mt-12 mb-8">
        <div className="container">
            <div className="block">
                <h5 className="title">تماس با من</h5>
            </div>
            <div className="xs:flex xs:flex-col-reverse  md:grid mt-12 xs:grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2">
                <div className="block mt-10">
                    <form action="" className="block bg-white p-4 rounded-lg">
                        <div className="block mb-3">
                            <label htmlFor="name" className="block pr-2 text-sm font-bold">نام و نام خانوادگی</label>
                            <input type="text" id="name" className="block w-full h-12 border rounded-md mt-2 outline-secondary-100 pr-2 text-sm font-bold" />
                        </div>
                        <div className="block mb-3">
                            <label htmlFor="phone" className="block pr-2 text-sm font-bold">شماره همراه</label>
                            <input type="text" id="phone" className="block w-full h-12 border rounded-md mt-2 outline-secondary-100 pr-2 text-sm font-bold" />
                        </div>
                        <div className="block mb-3">
                            <label htmlFor="email" className="block pr-2 text-sm font-bold">ایمیل</label>
                            <input type="text" id="email" className="block w-full h-12 border rounded-md mt-2 outline-secondary-100 pr-2 text-sm font-bold" />
                        </div>
                        <div className="block mb-3">
                            <label htmlFor="message" className="block pr-2 text-sm font-bold">پیام شما</label>
                            <textarea name="" id="message" className="block w-full h-32 border rounded-md mt-2 outline-secondary-100 pr-2 pt-2 text-sm font-bold"></textarea>
                        </div>
                        <button className="btn_secondary w-full mt-8">ارسال</button>
                    </form>
                </div>
                <div className="block">
                    <img src="/assets/images/contact.svg" alt="contact img" className="block" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact