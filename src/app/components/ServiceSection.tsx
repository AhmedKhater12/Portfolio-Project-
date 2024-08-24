import ServiceCard from "./ServiceCard";
import {
  FaDesktop,
  FaCode,
} from "react-icons/fa";
import { BsClipboardCheck , BsCoin ,BsDroplet , BsCamera} from "react-icons/bs";


export default function ServicesSection() {
  return (
    <section id="Service" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 ">Services</h2>
        <p className="text-center text-gray-600 mb-12 text-2xl font-semibold border-b-5 border-blue-500 contain-inline-size">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="WEB DESIGN"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!"
            icon={<FaDesktop size={200} />}
          />
          <ServiceCard
            title="WEB DEVELOPMENT"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!"
            icon={<FaCode size={200} />}
          />
          <ServiceCard
            title="PHOTOGRAPHY"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!"
            icon={<BsCamera size={200} />}
          />
          <ServiceCard
            title="RESPONSIVE DESIGN"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!"
            icon={<BsClipboardCheck size={200} />}
          />
          <ServiceCard
            title="GRAPHIC DESIGN"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!"
            icon={<BsDroplet size={200} />}
          />{" "}
          <ServiceCard
            title="MARKETING SERVICES"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!"
            icon={<BsCoin  size={200} />}
          />
        </div>
      </div>
    </section>
  );
}
