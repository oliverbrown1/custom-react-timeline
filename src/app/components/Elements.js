import Image from "next/image";

export default function Elements() {
  return (
    <div className="justify-center flex">
        <div className="w-5/6 flex justify-between">
            <div className="flex flex-col items-center h-2/3 justify-center"> 
                <div className="w-1 h-40 bg-slate-500"></div>
                <div> element 1</div>
            </div>
            <div>
                <div className="absolute -translate-y-full h-2/3 flex flex-col items-center justify-center">
                    <div> element 2</div> 
                    <div className="w-1 h-40 bg-slate-500"></div>
                </div>
            </div>
            <div className="flex flex-col items-center h-2/3 justify-center"> 
                <div className="w-1 h-40 bg-slate-500"></div>
                <div> element 3</div>
            </div>



        </div>
    </div>
  );
}
