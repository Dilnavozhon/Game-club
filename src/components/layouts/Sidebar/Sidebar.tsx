import Menu from "@/components/common/Menu/Menu";
import { Gamepad2, GamepadIcon } from "lucide-react";

function Sidebar() {
  return (
    <div className="min-w-72 border-r-2 px-1 py-4">
      <h1 className="font-bold text-2xl flex ite7ms-center justify-center gap-1 mb-4">
        <Gamepad2 size={38} />
        Game Club
      </h1>

      <Menu />
    </div>
  );
}

export default Sidebar;
