import Image from "next/image";
import Elements from "./components/Elements.js"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 m-8">
      <div className="relative w-5/6">
        <div className="h-1 bg-slate-500 w-full"></div>
        <div className="absolute inset-0 pointer-events-none flex h-1">
          <div className="w-1/10 bg-linear-to-r from-slate-100 to-transparent"></div>
          <div className="flex-auto"></div>
          <div className="w-1/10 bg-gradient-to-l from-slate-100 to-transparent"></div>
        </div>

        <Elements />
  
      </div>
    </div>
  //   <div className="relative overflow-hidden">
  //   <div className="absolute inset-0 bg-gradient-to-l from-white to-transparent pointer-events-none" />
  //   <div className="absolute inset-0 right-0 bg-gradient-to-r from-white to-transparent pointer-events-none" />
  //   <div
  //     className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide"
  //   >
  //     {Array.from({ length: 20 }, (_, index) => (
  //       <div key={index} className="flex-shrink-0 w-48 p-4 bg-gray-200 rounded-lg shadow-md">
  //         <h3 className="text-lg font-semibold">Event {index + 1}</h3>
  //         <p className="text-gray-600">Description of event {index + 1}.</p>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  );
}
