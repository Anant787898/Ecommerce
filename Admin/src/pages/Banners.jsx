import { FaPlus } from "react-icons/fa";

function Banners() {
  return (
    <div className="flex justify-evenly m-[5%]">
      {/* LEFT */}

      <div className="mr-50px">
        <h2 className="text-xl font-semibold mb-4">Active Banners</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <img
              src="https://images.pexels.com/photos/8054395/pexels-photo-8054395.jpeg"
              alt=""
              className="w-32 h-32 object-cover rounded-md "
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold mb-2">
                Radiate Beauty, Inside and Out.
              </h3>
              <p className="text-gray-600 mb-2">
                Discover Your Perfect Products For a Flawless Look.
              </p>
            </div>
            <button className="bg-red-500 p-2 twxt-white font-semibold cursor-pointer ml-3">
              Delete
            </button>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <img
              src="https://images.pexels.com/photos/2496219/pexels-photo-2496219.jpeg"
              alt=""
              className="w-32 h-32 object-cover rounded-md "
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold mb-2">
                Radiate Beauty, Inside and Out.
              </h3>
              <p className="text-gray-600 mb-2">
                Discover Your Perfect Products For a Flawless Look.
              </p>
            </div>
            <button className="bg-red-500 p-2 twxt-white font-semibold cursor-pointer ml-3">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <img
              src="https://images.pexels.com/photos/4792671/pexels-photo-4792671.jpeg"
              alt=""
              className="w-32 h-32 object-cover rounded-md "
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold mb-2">
                Radiate Beauty, Inside and Out.
              </h3>
              <p className="text-gray-600 mb-2">
                Discover Your Perfect Products For a Flawless Look.
              </p>
            </div>
            <button className="bg-red-500 p-2 twxt-white font-semibold cursor-pointer ml-3">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex flex-col ml-11">
        <div className="flex-1 bg-white p-5">
          <div className="flex flex-col">
            <span className="font-semibold">Image:</span>
            <div className="border-2 border-[#444] h-[100px] w-[100px] border-solid rounded-md cursor-pointer">
              <div className="flex items-center justify-center mt-[39px]">
                <label htmlFor="">
                  <FaPlus className="text-[20px] cursor-pointer" />
                </label>
              </div>
            </div>

            <div className="flex flex-col my-3">
              <span className="font-semibold">Title:</span>
              <input
                type="text"
                className="w-[250px] outline-none border-b-2 border-[#444] border-solid"
              />
            </div>

            <div className="flex flex-col my-3">
              <span className="font-semibold">Subtitle:</span>
              <input
                type="text"
                className="w-[250px] outline-none border-b-2 border-[#444] border-solid"
              />
            </div>
            <button className="bg-[#1e1e1e] p-2 text-white ">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banners;
