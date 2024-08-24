import React from 'react';
import Image from 'next/image';
import * as Avatar from '@radix-ui/react-avatar';

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  authorName: string;
  authorAvatarUrl: string;
  timeAgo: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageUrl,
  authorName,
  authorAvatarUrl,
  timeAgo,
}) => {
  return (
    <div id='Blog' className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-95 duration-700">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="p-4 bg-gray-100 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar.Root className="inline-flex items-center justify-center overflow-hidden w-8 h-8 rounded-full bg-gray-500">
            <Avatar.Image
              src={authorAvatarUrl}
              alt={authorName}
              className="w-full h-full object-cover"
            />
            <Avatar.Fallback delayMs={600}>{authorName[0]}</Avatar.Fallback>
          </Avatar.Root>
          <span className="ml-2 text-sm text-gray-800">{authorName}</span>
        </div>
        <span className="text-sm text-gray-600">{timeAgo}</span>
      </div>
    </div>
  );
};

export default BlogCard;
