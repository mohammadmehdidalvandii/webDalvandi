import React from "react";

function ArticleContent({article}) {
  return (
    <section className="block mt-12 mb-32 lg:mb-8">
      <div className="container max-w-[900px]">
        <div className="block">
          <h6 className="block text-center font-iranBlack text-2xl text-font-300">
            جزئیات مقاله :
            <span className="text-secondary-100">
              {article.name}
            </span>
          </h6>
        </div>
        <div className="block mt-12">
          <img
            src={article.img}
            alt=""
            className="block w-full h-[500px] rounded-lg"
          />

          <h6 className="block mt-8 text-font-100 font-iranBold text-xl">
            {article.name}
          </h6>
          <div className="black mt-8 bg-white rounded-lg shadow-lg shadow-font-200 p-4">
            {article.paragraph[0].split(",").map((text ,index)=>(
          <p className="block my-4 text-font-200" key={index}>
              {text}
          </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleContent;
