import {
  FaBox,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="h-[100vh] bg-gray-100 p-[20px] w-[350px] shadow-lg">
      <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px]">
        <Link to="/">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300">
            <FaHome className="mr-[15px] text-[#ef93db]" />
            Home
          </li>
        </Link>
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300">
          <FaUser className="mr-[15px] text-[#ef93db]" />
          Profile
        </li>

        <hr className="w-full my-[20px] border-gray-300" />

        <Link to="/users">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300">
            <FaUsers className="mr-[15px] text-[#ef93db]" />
            Users
          </li>
        </Link>
        <Link to="/products">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300">
            <FaBox className="mr-[15px] text-[#ef93db]" />
            Products
          </li>
        </Link>
        <Link to="/orders">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300">
            <FaClipboardList className="mr-[15px] text-[#ef93db]" />
            Orders
          </li>
        </Link>

        <hr className="w-full my-[20px] border-gray-300" />

        <Link to="/banners">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300">
            <FaElementor className="mr-[15px] text-[#ef93db]" />
            Banners
          </li>
        </Link>
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300">
          <FaCog className="mr-[15px] text-[#ef93db]" />
          Settings
        </li>

        <hr className="w-full my-[20px] border-gray-300" />

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300">
          <FaChartBar className="mr-[15px] text-[#ef93db]" />
          Charts
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300">
          <FaSignOutAlt className="mr-[15px] text-[#ef93db]" />
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Menu;
