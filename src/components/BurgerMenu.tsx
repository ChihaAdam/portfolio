import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
const links = ["skills", "projects", "contact"];
function BurgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden">
        <MenuIcon size={30} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-800 md:hidden border-1 border-white/40">
        {links.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className="focus:bg-transparent active:bg-gray-300/20"
          >
            <a
              href={`#${item}`}
              className="text-[#c9d1d9] transition-colors text-lg font-medium cursor-pointer relative link"
            >
              {item}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BurgerMenu;
