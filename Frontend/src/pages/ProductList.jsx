
import Products from "../components/Products";

function ProductList() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between m-4">
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="text-lg font-semibold mr-4">Filter Products</span>
            <select name="concern" id="" className="p-2 mb-4 sm:mb-0 sm:mr-4">
                <option hidden>Concern</option>
                <option>Dry Skin</option>
                <option>Oil Control</option>
                <option>Pigmentation</option>
                <option>Anti Acne</option>
                <option>Skin Brightening</option>
                <option>Tan Removal</option>
                <option>Damaged Hair</option>
                <option>Color Protection</option>
                <option>Dry Hair</option>
                <option>Soothing</option>
                <option>Dandruff</option>
                <option>Night Routine</option>
                <option>UV Protection</option>
                <option>Sun Protection</option>
            </select>

            <select name="brand" id="" className="p-2 mb-4 sm:mb-0 sm:mr-4">
            <option hidden>Brands</option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            </select>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row sm:items-center">
        <span className="text-lg font-semibold mr-4">Sort Products</span>
        <select name="price" id="">
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
        </select>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default ProductList;
