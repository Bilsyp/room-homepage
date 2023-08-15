import React from "react";

const SectionTwo = () => {
  return (
    <section className=' w-full flex flex-col lg:flex-row  '>
      <div className=' w-full'>
        <img
          src='/images/image-about-dark.jpg'
          className='w-full h-full'
          alt=''
        />
      </div>
      <div className='description p-8  '>
        <h2 className=' text-2xl font-bold lg:text-3xl  py-3'>
          About our furniture
        </h2>
        <p className=' font-medium text-Dark_Gray'>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className=' w-full  '>
        <img
          src='/images/image-about-light.jpg'
          className='w-full h-full'
          alt=''
        />
      </div>
    </section>
  );
};

export default SectionTwo;
