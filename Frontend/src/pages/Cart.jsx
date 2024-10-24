import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

function Cart() {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-[18px] font-bold mb-6">Shopping Cart</h2>
      <div className="flex gap-8">
        {/* LEFT */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Your Items</h3>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/lotion1.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-gray-600 mb-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                  id optio eum nihil rerum ipsum quidem sequi.
                </p>
                <div className="flex items-center my-5 p-4">
                  <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold mr-3">1</span>
                  <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                </div>
              </div>
              <div className=" flex flex-col text-right">
                <p className="text-xl font-bold mb-6 ">$90</p>
                <FaTrash className="text-red-600 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/lotion1.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-gray-600 mb-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                  id optio eum nihil rerum ipsum quidem sequi.
                </p>
                <div className="flex items-center my-5 p-4">
                  <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold mr-3">1</span>
                  <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                </div>
              </div>
              <div className=" flex flex-col text-right">
                <p className="text-xl font-bold mb-6 ">$90</p>
                <FaTrash className="text-red-600 cursor-pointer" />
              </div>
            </div>

            <button className="bg-red-400 w-[200px] text-white p-3 mt-4 rounded-md font-semibold">
              Clear Cart
            </button>
          </div>
        </div>
        {/* RIGHT */}

        <div className=" w-80 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex flex-col space-y-4 ">
            <div className="flex justify-between">
              <span className="text-lg font-medium">SubTotal:</span>
              <span className="text-lg font-medium">$450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Shipping:</span>
              <span className="text-lg font-medium">$50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-lg font-medium">$500</span>
            </div>
            <button className="bg-[#ef93db] text-white p-3 w-full rounded-lg font-semibold">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
