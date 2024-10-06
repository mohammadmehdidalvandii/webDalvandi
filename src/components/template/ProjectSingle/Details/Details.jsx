import Link from "next/link";
import React from "react";

function Details() {
  return (
    <section className="block mt-12 mb-8">
      <div className="container">
            <div className="block w-full bg-white rounded-lg shadow-sm p-4 shadow-font-200">
                <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="block">
                        <h6 className="block font-iranBlack text-2xl text-font-300 mb-4">تکنولوژی :</h6>
                        <ul className="flex items-center gap-3">
                            <li className="flex items-center justify-center bg-secondary-100 w-[100px] h-8 rounded-sm font-iranBold text-xl text-white">
                                react
                            </li>
                            <li className="flex items-center justify-center bg-secondary-100 w-[100px] h-8 rounded-sm font-iranBold text-xl text-white">
                                react
                            </li>
                            <li className="flex items-center justify-center bg-secondary-100 w-[100px] h-8 rounded-sm font-iranBold text-xl text-white">
                                react
                            </li>
                        </ul>
                        <div className="block mt-8">
                        <h6 className="block font-iranBlack text-2xl text-font-300 mb-4">توضیحات :</h6>
                        <p className="block text-base text-font-300">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                        </div>
                    </div>
                    <div className="block">
                    <h6 className="block font-iranBlack text-2xl text-font-300 mb-4">لینک ها :</h6>
                        <div className="flex items-center gap-6">
                            <Link href="" target="-blank" className="btn_primary">نمایش آنلاین</Link>
                            <Link href="" target="-blank" className="btn_primary">گیت هاب</Link>
                            <Link href="" download className="btn_primary">سورس کد</Link>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}

export default Details;
