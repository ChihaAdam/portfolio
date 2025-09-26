import { Link } from "react-scroll";
import BurgerMenu from "./BurgerMenu";
function Nav() {
  return (
    <nav className="bg-[#161b2299] max-md:bg-[#161b22] text-[#c9d1d9] py-5 px-6 sticky top-0 z-50 shadow-lg lg:backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-white transition-colors cursor-pointer"
          >
            My Portfolio
          </Link>
        </div>
        <ul className="flex space-x-8 max-md:hidden ">
          {["skills", "projects", "contact"].map((item) => (
            <li key={item} className="max-md:m-0">
              <Link
                to={item}
                smooth={true}
                duration={1000}
                className="text-[#c9d1d9] transition-colors capitalize text-lg font-medium cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full link"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <BurgerMenu />
      </div>
    </nav>
  );
}

export default Nav;
