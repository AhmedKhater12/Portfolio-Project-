import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white">
      <div className="flex items-center justify-center text-gray-500 rounded-full shadow-lg p-6 mb-4 w-52 h-52  -transform transform hover:scale-90 hover:bg-blue-500 duration-700">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}





// import { ReactNode } from "react";

// interface ServiceCardProps {
//   title: string;
//   description: string;
//   icon: ReactNode;
// }

// export default function ServiceCard({
//   title,
//   description,
//   icon,
// }: ServiceCardProps) {
//   return (
//     <div id="Service" className="flex flex-col text-center items-center p-6  rounded-lg shadow-lg bg-white">
//       <div className=" flex items-center justify-center mb-4 text-blue-500 shadow-lg  border border-transparent rounded-lg p-6 m-4 w-full md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-90">
//         {icon}
//       </div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600 text-center">{description}</p>
//     </div>
//   );
// }