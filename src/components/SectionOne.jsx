import Buttons from "./Buttons";
import { useCounter } from "@uidotdev/usehooks";
import Nav from "./Nav";
const SectionOne = ({ size, dataArr, blank }) => {
  const [count, { increment, decrement, set, reset }] = useCounter(0, {
    min: 0,
    max: 2,
  });
  return (
    <section className=' grid  lg:grid-cols-5  bg-white   items-center gap-0   '>
      <div className='relative  col-span-3    '>
        <Nav blank={blank} size={size} />
        <div>
          <img
            src={`${
              size.width > 678
                ? `/images/desktop-image-hero-${count}.jpg`
                : `/images/mobile-image-hero-${count}.jpg`
            }`}
            className='md:h-[80vh] w-full'
            alt=''
          />
        </div>

        {size.width < 1024 ? (
          <Buttons
            count={count}
            set={set}
            minHandle={decrement}
            maxHandle={increment}
            reset={reset}
            size={size}
          />
        ) : (
          ""
        )}
      </div>
      <div className='description lg:h-[80vh] flex-col flex justify-center items-center  relative p-12 lg:p-16 col-span-2   '>
        <div>
          <h1 className='lg:text-4xl  text-3xl font-bold py-3'>
            {dataArr[count].title}
          </h1>
          <p className=' text-Dark_Gray'>{dataArr[count].paragraph}</p>
          <br />
          <div className='py-5   hover:text-Dark_Gray cursor-pointer font-medium'>
            <span className=' text-left tracking-[1rem] pr-3'>SHOP</span>
            <span className=' tracking-[1rem]'>NOW</span>
            <button>
              <img src='/images/icon-arrow.svg' alt='' />
            </button>
          </div>
        </div>
        {size.width > 1024 ? (
          <Buttons
            count={count}
            set={set}
            minHandle={decrement}
            maxHandle={increment}
            reset={reset}
            size={size}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default SectionOne;
