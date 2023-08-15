import { FaBars, FaTimes } from "react-icons/fa";
import { useToggle, useClickAway } from "@uidotdev/usehooks";
import { useEffect } from "react";

const Nav = ({ blank, size }) => {
  const [toogle, setToogle] = useToggle(false);
  const ref = useClickAway(() => {
    setToogle(false);
    blank.current.classList.add("hidden");
  });
  useEffect(() => {
    blank.current.classList.add("hidden");
  }, []);

  const handleClick = () => {
    if (!toogle) {
      blank.current.classList.remove("hidden");

      setToogle(true);
    } else {
      blank.current.classList.add("hidden");

      setToogle(false);
    }
    console.log(blank);
  };
  return (
    <nav className=' absolute w-full top-0 z-50'>
      <div className='relative  '>
        <div className={``}>
          {!toogle && (
            <div
              className={`${
                size.width > 1024 ? "hidden" : ""
              } w-full  relative  text-white`}
            >
              <button
                onClick={handleClick}
                className={`p-6 text-2xl cursor-pointer`}
              >
                <FaBars />
              </button>
              <div className='text-center  absolute top-6 left-[50%] translate-x-[-50%] '>
                <h2 className='text-3xl'>room</h2>
              </div>
            </div>
          )}
        </div>
        <div
          data-store='close'
          ref={ref}
          className={`${
            toogle || size.width > 1024
              ? "translate-x-0 duration-300  "
              : "translate-x-[-100%] mt-0 "
          } ${
            size.width > 1024 ? "bg-transparent" : " bg-white"
          } flex items-center   justify-between p-8 lg:py-16`}
        >
          {size.width > 1024 ? (
            ""
          ) : (
            <button onClick={handleClick} className='text-2xl text-gray-300 '>
              <FaTimes />
            </button>
          )}
          <div className='flex lg:text-white justify-center items-center'>
            <h2 className='text-3xl font-light hidden lg:block  mx-8'>room</h2>
            <ul className='flex text-[1.1rem]  items-center justify-center   gap-x-5 mt-1 font-light'>
              <li>home</li>
              <li>shop</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
