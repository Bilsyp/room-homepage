import React from "react";

const Buttons = ({ count, set, minHandle, maxHandle, reset, size }) => {
  const handleMax = () => {
    maxHandle();

    if (count >= 2) {
      reset();
    }
  };
  const handleMin = () => {
    minHandle();
    if (count <= 0) {
      set(2);
    }
  };
  return (
    <div
      className={` bg-black absolute bottom-0  text-white flex justify-center items-center   gap-5   ${
        size.width > 1024 ? "left-0" : "right-0"
      }`}
    >
      <button onClick={handleMin} className='btn'>
        <img src='/images/icon-angle-left.svg' />
      </button>
      <button className='btn' onClick={handleMax}>
        <img src='/images/icon-angle-right.svg' />
      </button>
    </div>
  );
};

export default Buttons;
