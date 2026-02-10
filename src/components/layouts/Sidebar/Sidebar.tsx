import Menu from "@/components/common/Menu/Menu";
import { Gamepad } from "lucide-react";




function Sidebar() {

 

  return (
    <div className="w-full max-w-72 border-r px-1 py-4">
      <h1 className="font-bold text-2xl flex ite7ms-center justify-center gap-1 mb-4">
        <Gamepad size={40} />
        Game Club
      </h1>
        
        <Menu/>
       
    </div>
  );
}

export default Sidebar;
