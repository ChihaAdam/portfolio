import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-scroll";
import { MenuIcon } from "lucide-react";
function BurgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden">
          <MenuIcon size={30}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-800/40 md:hidden border-1 border-white/40">
        {["skills", "projects", "contact"].map((item, index) => (
          <>
            <DropdownMenuItem key={index} className="focus:bg-transparent active:bg-gray-300/20">
              <Link
                to={item}
                smooth={true}
                duration={1000}
                className="text-[#c9d1d9] transition-colors capitalize text-lg font-medium cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full link"
              >
                {item}
              </Link>
            </DropdownMenuItem>
            
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BurgerMenu;
