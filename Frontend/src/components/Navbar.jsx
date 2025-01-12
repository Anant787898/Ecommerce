import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBacketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";

import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  return (
    <div className="flex items-center justify-between h-[100px] shadow-md px-6">
      <Link to="/">
        <div className="cursor-pointer m-2">
          <img src="/blisslogo1.png" alt="" height="200px" width="200px" />
        </div>
      </Link>

      <div className="flex items-center m-2">
        <input
          type="text"
          placeholder="search"
          className="p-[15px] border-2 border-[#f096dd] border-solid w-[500px] outline-none rounded-lg mr-[-30px]"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to={`/products/${search}`}>
          <FaSearch className="text-[20px] cursor-pointer" />
        </Link>
      </div>

      <div className="flex items-center">
        <Link to="/cart">
          <div className="mr-[20px] cursor-pointer">
            <Badge badgeContent={cart.quantity} color="secondary">
              <ShoppingBacketIcon className="text-pink-500" />
            </Badge>
          </div>
        </Link>

        <div className="flex items-center cursor-pointer space-x-2 border border-pink-300 p-2 rounded-lg hover:bg-pink-100 duration-300">
          <FaUser className="text-[#e455c5] hover:text-pink-600 transition duration-300" />
          {!user.currentUser ? (
            <Link
              to="/login"
              className="text-[#e455c5] hover:text-pink-600 font-semibold"
            >
              Login
            </Link>
          ) : (
            <Link
              to="/myaccount"
              className="text-[#e455c5] hover:text-pink-600 transition duration-300 font-semibold"
            >
              {user.currentUser.name}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
