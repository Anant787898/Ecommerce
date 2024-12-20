import { FaPlus } from "react-icons/fa";

function NewProduct() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-center mb-5">
        <h1 className="text-2xl font-semibold">New Product</h1>
      </div>

      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">
        <form className="flex flex-col md:flex-row rounded-lg">
          {/* LEFT */}

          <div className="flex-1 space-y-5">
            <div>
              <label className="font-semibold">Product Page</label>
              <div className="border-2 border-[#444] h-[100px] w-[100px] border-solid rounded-md cursor-pointer">
                <div className="flex items-center justify-center mt-[39px]">
                  <label htmlFor="">
                    <FaPlus className="text-[20px] cursor-pointer" />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-2 border border-gray-300 rounded "
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Description
              </label>
              <textarea
                type="text"
                cols={15}
                rows={7}
                placeholder="Product Description"
                className="w-full p-2 border border-gray-300 rounded "
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Original Price
              </label>
              <input
                type="number"
                placeholder="$100"
                className="w-full p-2 border border-gray-300 rounded "
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Discounted Price
              </label>
              <input
                type="number"
                placeholder="$80"
                className="w-full p-2 border border-gray-300 rounded "
              />
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex-1 space-y-5 ml-5">
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Wholesale Price
              </label>
              <input
                type="number"
                placeholder="$70"
                className="w-full p-2 border border-gray-300 rounded "
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Wholesale Minimum Quantity
              </label>
              <input
                type="number"
                placeholder="10"
                className="w-full p-2 border border-gray-300 rounded "
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Brand
              </label>
              <input
                type="text"
                placeholder="Garnier"
                className="w-full p-2 border border-gray-300 rounded "
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Concern
              </label>
              <select
                name=""
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Select Concern
                </option>
                <option>Dry Skin</option>
                <option>Pigmentation</option>
                <option>Oil Control</option>
                <option>Anti Acne</option>
                <option>Sunburn</option>
                <option>Skin Brightening</option>
                <option>Tan Removal</option>
                <option>Night Routine</option>
                <option>UV Protection</option>
                <option>Damaged Hair</option>
                <option>Frizzy Hair</option>
                <option>Stretch Marks</option>
                <option>Color Protection</option>
                <option>Dry Hair</option>
                <option>Soothing</option>
                <option>Dandruff</option>
                <option>Greying</option>
                <option>Hairfall</option>
                <option>Hair Color</option>
                <option>Well Being</option>
                <option>Acne</option>
                <option>Hair Growth</option>
              </select>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Skintype
              </label>
              <select
                name=""
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Select Skin Type
                </option>
                <option>Oily</option>
                <option>Dry</option>
                <option>Sensitive</option>
                <option>Normal</option>
              </select>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Category
              </label>
              <select
                name=""
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Category
                </option>
                <option>Toners</option>
                <option>Serums</option>
                <option>Foundations</option>
                <option>lotions</option>
              </select>
            </div>
            <button className="bg-slate-500 text-white py-2 px-4 rounded">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
