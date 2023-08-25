import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto p-2">
        <Link to={"/"}>
          <h3 className="text-white text-2xl font-bold ">React CRUD</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
