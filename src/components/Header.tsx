import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const titles: { [key: string]: string } = {
    "/": "Explore Your Exercise Library",
    "/my-favorites": "Here is Your Personal Exercise Collection",
  };
  4;
  return (
    <div className="py-4 border-b border-neutral">
      <h1 className="h-[40px] flex items-center text-xl font-semibold">
        {titles[location.pathname]}
      </h1>
    </div>
  );
};

export default Header;
