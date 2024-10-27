import Link from "next/link";
import React from "react";

function Details({projects}) {

  return (
    <section className="block mt-12 mb-32 lg:mb-8">
      <div className="container">
            <div className="block w-full bg-white rounded-lg shadow-sm p-4 shadow-font-200">
                <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="block">
                        <h6 className="block font-iranBlack text-2xl text-font-300 mb-4">تکنولوژی :</h6>
                        <ul className="flex flex-wrap items-center gap-4">
                            {projects.techs[0].split(",").map((item , index)=>(
                            <li key={index} className="flex items-center justify-center bg-secondary-100 w-[120px] px-3 py-3 h-8 rounded-sm font-iranBold text-xl text-white">
                                {item}
                            </li>
                            ))}
                        </ul>
                        <div className="block mt-8">
                        <h6 className="block font-iranBlack text-2xl text-font-300 mb-4">توضیحات :</h6>
                        <p className="block text-base text-font-300">
                            {projects.description}
                        </p>
                        </div>
                    </div>
                    <div className="block">
                    <h6 className="block font-iranBlack text-2xl text-font-300 mb-4">لینک ها :</h6>
                        <div className="flex items-center gap-6">
                            <Link href={projects.onlineLink} target="-blank" className="btn_primary">نمایش آنلاین</Link>
                            <Link href={projects.github} target="-blank" className="btn_primary">گیت هاب</Link>
                            <Link href={projects.sourceCode}  download={`${projects.name}.rar`} target="_blank" className="btn_primary">سورس کد</Link>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}

export default Details;
