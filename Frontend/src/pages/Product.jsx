import StarRatings from 'react-star-ratings'
import {FaMinus, FaPlus} from 'react-icons/fa'
function Product() {
  return (
    <div className="h-auto flex  justify-stretch p-[30px]">
      {/* LEFT */}
      <div className="flex-1 h-[500px] w-[600px]">
        <img
          src="/lotion2.jpg"
          alt=""
          className="h-[100%] w-[100%] object-cover"
        />
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 flex-col ml-10">
        <h2 className="text-[25px] font-semibold mb-[20px] ">Bajaj Almond Drops</h2>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus, deserunt commodi magnam nulla quasi suscipit exercitationem, modi facilis sed iusto totam! Esse magnam expedita a, dolor amet voluptatum numquam nihil commodi facilis placeat animi id sint consequatur unde eveniet illo. Quae aspernatur, expedita officiis adipisci reprehenderit voluptatum, quos dignissimos iste, quasi porro alias eveniet fuga eum nisi quia dolore.</span>
        <h2 className="font-semibold mt-2 text-[20px]">$90</h2>

        <span className="flex items-center mt-2">
          <StarRatings
            rating={2.703}
            starDimension="25px"
            starSpacing="10px"
            starRatedColor="gold"
          />
          (2)
        </span>

        <div className='h-52 w-96 border-2 border-gray-300 rounded-lg shadow-md my-4 p-6'>
            <h2 className='flex items-center justify-center font-semibold text-lg text-gray-700 mb-4'>BOX CONTENTS</h2>
            <hr className='mb-4'/>
            <span className='block text-gray-600 text-base text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, molestiae.</span>
        </div>

        <div className='inline-flex items-center justify-center bg-[#ef93db] text-white font-semibold text-sm p-2 rounded-full shadow-md'>
            Wholesale Available : $70 as from 10 items
        </div>

        <div className='flex items-center my-5 p-4'>
            <FaMinus className='bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl' />
            <span className='text-lg font-semibold mr-3'>1</span>
            <FaPlus className='bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl'/>
        </div>
        <button className='bg-[#1e1e1e] p-[8px] w-[200px] text-white cursor-pointer'>Add To Bag</button>

        <hr className='my-6'/>

        <div className='flex flex-col'>
            <h2 className='font-semibold text-[18px] '>Reviews</h2>
            <div className='flex items-center'>
            <StarRatings
            rating={2.703}
            starDimension="25px"
            starSpacing="10px"
            starRatedColor="gold"
          />
          <span className='font-semibold mx-[20px]'>Anant K.</span>
            </div>

            
        </div>
        <div className='flex flex-col'>
            <div className='flex items-center'>
            <StarRatings
            rating={2.703}
            starDimension="25px"
            starSpacing="10px"
            starRatedColor="gold"
          />
          <span className='font-semibold mx-[20px]'>Anant K.</span>
            </div>

            
        </div>
      </div>
    </div>
  );
}

export default Product;
