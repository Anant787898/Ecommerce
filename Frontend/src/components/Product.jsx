import StarRatings from 'react-star-ratings'
function Product() {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] m-[10px] cursor-pointer">
        <img src="/serum1.jpg" alt="" className="h-[400px] w-[300px] bg-cover" />
        <h2 className="font-semibold text-[18px] w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <span className="text-[18px] font-semibold flex items-center justify-center">
          $100
        </span>
        <span className="flex items-center">
          <StarRatings
            rating={2.703}
            starDimension="25px"
            starSpacing="10px"
            starRatedColor="gold"
          />
          (2)
        </span>
      </div>
  )
}

export default Product