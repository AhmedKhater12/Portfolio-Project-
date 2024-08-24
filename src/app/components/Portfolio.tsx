import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg bg-white">
      <AspectRatio.Root ratio={16 / 9} className="w-full">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform transform hover:scale-90 duration-700" />
      </AspectRatio.Root>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  return (
    <section id='Portfolio' className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Portfolio</h2>
          <p className="text-gray-600 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <PortfolioCard
            title="Card title"
            description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            imageUrl="/work-1 (1).jpg"
          />
          <PortfolioCard
            title="Card title"
            description="This card has supporting text below as a natural lead-in to additional content."
            imageUrl="/work-2 (1).jpg"
          />
          <PortfolioCard
            title="Card title"
            description="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
            imageUrl="/work-3 (1).jpg"
          />
          <PortfolioCard
            title="Card title"
            description="This is a wider card with supporting text below as a natural lead-in to additional content."
            imageUrl="/work-4 (1).jpg"
          />
          <PortfolioCard
            title="Card title"
            description="This card has supporting text below as a natural lead-in to additional content."
            imageUrl="/work-5 (1).jpg"
          />
          <PortfolioCard
            title="Card title"
            description="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
            imageUrl="/work-6 (1).jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;








