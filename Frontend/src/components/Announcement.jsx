import { Typewriter } from "react-simple-typewriter";
function Announcement() {
  return <div className="flex items-center justify-center bg-[#e9acd9] text-white text-[18px] font-semibold h-[30px]">
    <Typewriter
            words={['Welcome', 'to', 'our', 'Shopping' , 'Website']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
  </div>;
}

export default Announcement;
