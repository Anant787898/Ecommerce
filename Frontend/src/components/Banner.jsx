
function Banner() {
  return (
    <div className=" relative bg-[url('/beautybanner.jpg')] bg-no-repeat bg-cover h-[80vh] px-[200px]">
      <div className="absolute inset-0 bg-black opacity-45">

      </div>

      <div className="relative flex flex-col text-white w-[50%] pt-[10%]">
        <span className="text-[30px] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit egfiu</span>
        <h1 className="text-3xl mt-3">Lorem ipsum dolor sit amet.</h1>
        <div className="flex items-center mt-[20px]">
          <button className="bg-[#e48bcd] p-[10px] w-[180px] text-white cursor-pointer mr-10">Shop Now</button>
          <button className="bg-gray-500 p-[10px] w-[200px] text-white cursor-pointer mr-10">CALL: (+91-8937812973)</button>
        </div>
      </div>
    </div>
  )
}

export default Banner