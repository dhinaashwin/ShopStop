import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Item.css';

const Item = ({
  id,
  image,
  image2,
  title,
  old_price,
  new_price,
  sizes = []
}) => {
  const [currentImage, setCurrentImage] = useState(image);

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    let intervalId;
    let timeoutId;

    if (viewportWidth <= 480) {
      intervalId = setInterval(() => {
        setCurrentImage(prevImage => (prevImage === image ? image2 : image));
      }, 400); // Change images every 400 milliseconds

      timeoutId = setTimeout(() => {
        clearInterval(intervalId);
      }, 2000); // Disable automatic image change after 2 seconds
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [image, image2]);

  return (
    <motion.div className='parent-item flex flex-col bg-white'>
      <div className='img-parent w-full flex justify-center'>
        <Link to={`/product/${id}`}>
          <motion.img
            src={currentImage}
            className='item-image'
            alt={title}
            onMouseEnter={() => setCurrentImage(image2)}
            onMouseLeave={() => setCurrentImage(image)}
          />
        </Link>
      </div>
      <div className='title-container mt-1'>
        <Link to={`/product/${id}`}>
          <p className='title opacity-95 md:text-20 sm:text-16 xsm:text-14 px-1'>{title}</p>
        </Link>
      </div>
      <div className='item-prices flex gap-4 mt-1 px-1 items-center'>
        <div className='item-newPrice xsm:text-14 sm:text-18 md:text-22 font-bold cursor-pointer'>
          Rs.{new_price}
        </div>
        <div className='item-oldPrice xsm:text-14 opacity-60 sm:text-18 line-through md:text-22'>
          Rs.{old_price}
        </div>
      </div>
      <div className='sizes-container flex gap-2 mt-2 text-slate-800'>
        {sizes.map(size => (
          <div key={size} className='size-item'>
            {size}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Item;
