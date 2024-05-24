import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ProductType.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const ProductType = () => {
  const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 3 },
  };
  const { Datas } = useContext(ShopContext);
  const [selectedType, setSelectedType] = useState('TShirt');
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  // Filter data based on selected type
  const filteredData = Datas.filter(item => item.type === selectedType && item.category === 'Men');
  return (
    <section className='mt-8'>
          <div className="flex flex-col">
            <div className="flex justify-center md:gap-16 xsm:gap-4 md:text-[18px] xsm:text-[14px]">
            <div>
          <button
          className={`radio-button  ${selectedType === 'TShirt' && 'selected'}`}
          onClick={() => handleTypeChange('TShirt')}
        >
          TShirt
        </button>
      </div>
      <div>
        <button
          className={`radio-button ${selectedType === 'Shirt' && 'selected'}`}
          onClick={() => handleTypeChange('Shirt')}
        >
          Shirt
        </button>
      </div>
      <div>
        <button
          className={`radio-button ${selectedType === 'Jeans' && 'selected'}`}
          onClick={() => handleTypeChange('Jeans')}
        >
          Jeans
        </button>
      </div>
      <div>
        <button
          className={`radio-button ${selectedType === 'Trousers' && 'selected'}`}
          onClick={() => handleTypeChange('Trousers')}
        >
          Trousers
        </button>

          </div>

          </div>
          <div >
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid items-center Parent-filter py-10 lg:grid-cols-4 md:grid-cols-3 xsm:grid-cols-2 px-2 "
          key={filteredData.length} // Use a unique key to force remount when data changes
        >
          {/* Map through a slice of the filteredData array containing only the first 4 items */}
          {filteredData.slice(0, 4).map((data, i) => (
            <Item
              key={i}
              id={data.id}
              title={data.title}
              old_price={data.old_price}
              new_price={data.new_price}
              image={data.image}
              image2={data.image2}
            />
          ))}
        </motion.div>
            </div>
            <div className='m-auto'>
<Link className={`radio-button `} to={`/${selectedType}`} onClick={() => handleTypeChange(`${selectedType}`)}>View All</Link>
</div>  
          </div>
    </section>

  )
}

export default ProductType