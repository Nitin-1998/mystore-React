import React from "react";
import BlogCard from "./BlogCard";

const BlogComp = () => {
  return (
    <>
      <main className="dark:bg-slate-900 py-10 dark:text-white">
        <div className="container">
          <div data-aos="fade-up">
            {/* Text area */}
            <div className="text-center">
              <h1 className="text-4xl font-bold">Recent News</h1>
              <p className="text-gray-600">Explore Our Blogs</p>
            </div>
            {/* Blog area */}
            <div>
              <BlogCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogComp;
