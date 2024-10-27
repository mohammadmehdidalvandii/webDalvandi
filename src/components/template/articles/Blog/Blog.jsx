import ArticleCart from "@/components/module/ArticleCart/ArticleCart";
import React from "react";

function Blog() {
  return (
    <section className="block mt-12 mb-32 lg:mb-8">
      <div className="container">
        <div className="block">
          <h5 className="block text-center font-iranBlack text-3xl text-font-300">
            مقالات من{" "}
          </h5>
        </div>
        {/* <div className="block mt-12">
          <h6 className="block text-center font-iranBlack text-3xl text-secondary-default">
            تا الان مقاله ای منتشر نشد{" "}
          </h6>
        </div> */}

        <div className="grid mt-12 gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <ArticleCart/>
            <ArticleCart/>
            <ArticleCart/>
            <ArticleCart/>
            <ArticleCart/>
        </div>
      </div>
    </section>
  );
}

export default Blog;
