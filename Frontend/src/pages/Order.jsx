import { FaCheck, FaCheckCircle } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const Order = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="text-center mb-8 ">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Thank You for Your Orders!</h1>
            <p className="text-gray-600 mt-2">
              Here are the details for your orders
            </p>
          </div>

          <div className="mb-8 ">
            <h2 className="text-2xl font-semibold mb-4">Order #1</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg ">
                <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
                <div className="flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <img
                        src="/lotion.jpg"
                        alt=""
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1 ml-4">
                        <h4 className="text-lg font-semibold ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Incidunt, quod!
                        </h4>
                        <p className="text-gray-600">2</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">$90</p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <h3>Rate This Product</h3>
                      <StarRatings
                        rating={2.703}
                        starDimension="25px"
                        starSpacing="10px"
                        starRatedColor="gold"
                      />
                      <textarea
                        name=""
                        id=""
                        placeholder="Leave a message"
                        className="p-[10px] w-[300px] mt-3"
                      ></textarea>
                      <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <img
                        src="/lotion.jpg"
                        alt=""
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1 ml-4">
                        <h4 className="text-lg font-semibold ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Incidunt, quod!
                        </h4>
                        <p className="text-gray-600">2</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">$90</p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <h3>Rate This Product</h3>
                      <StarRatings
                        rating={2.703}
                        starDimension="25px"
                        starSpacing="10px"
                        starRatedColor="gold"
                      />
                      <textarea
                        name=""
                        id=""
                        placeholder="Leave a message"
                        className="p-[10px] w-[300px] mt-3"
                      ></textarea>
                      <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg ">
            <h3 className="text-xl font-semibold mb-2 ">
              Shipping Information
            </h3>
            <p className="text-gray-600">anantsrivastava7878@gmail.com</p>
            <p className="text-gray-600">(+91)- 7678567585</p>
            <p className="text-gray-600">Anant Kumar</p>
          </div>

          <div className="bg-gray-50 rounded-lg my-2">
            <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
            <p className="text-gray-600">VISA</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg ">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-lg font-semibold">$720</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">Shipping</span>
              <span className="text-lg font-semibold">$720</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-semibold">$720</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-[#ef93db] text-white rounded-lg font-semibold p-3">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
