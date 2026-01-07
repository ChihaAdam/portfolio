import BurgerMenu from "./BurgerMenu";
function Nav() {
  return (
    <nav className="bg-[#161b2299] max-md:bg-[#161b22] text-[#c9d1d9] py-5 px-6 sticky top-0 z-50 md:shadow-lg md:backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home">My Portfolio</a>
        </div>
        <ul className="flex space-x-8 max-md:hidden ">
          {["skills", "projects", "contact"].map((item) => (
            <li key={item} className="max-md:m-0">
              <a href={`#${item}`} className="link">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <BurgerMenu />
      </div>
    </nav>
  );
}

export default Nav;
