import React from "react";
import BlogCard from "./BlogCard";

const BlogSection: React.FC = () => {
  return (
    <section id="Blog" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">BLOG</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard
            title="Card title"
            description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            imageUrl="/post-1 (1).jpg"
            authorName="Ahmed Khater"
            authorAvatarUrl="/mee.jpeg"
            timeAgo="5 mins"
          />
          <BlogCard
            title="Card title"
            description="This card has supporting text below as a natural lead-in to additional content."
            imageUrl="/post-2 (1).jpg"
            authorName="Ahmed Khater"
            authorAvatarUrl="/mee.jpeg"
            timeAgo="10 mins"
          />
          <BlogCard
            title="Card title"
            description="This is a wider card with supporting text below as a natural lead-in to additional content."
            imageUrl="/post-3 (1).jpg"
            authorName="Ahmed Khater"
            authorAvatarUrl="/mee.jpeg"
            timeAgo="15 mins"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
