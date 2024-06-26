import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./ProductType.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const ProductType = () => {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 3 },
  };
  const { Datas } = useContext(ShopContext);
  const [selectedType, setSelectedType] = useState("TShirt");
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  const types = ["TShirt", "Shirt", "Jeans", "Trousers"];
  console.log(types);
  // Filter data based on selected type
  const filteredData = Datas.filter(
    (item) => item.type === selectedType && item.category === "Men"
  );
  return (
    <section className="mt-8 producttype-section">
      <div className="flex flex-col">
        <h1 className="m-auto font-b">SHOP BY CATEGORY</h1>
        <div className="flex justify-center md:gap-16 xsm:gap-4 md:text-[18px] xsm:text-[15px] mt-8">
          <div className="flex xsm:gap-6 md:gap-12">
            {types.map((type) => (
              <button
                key={type}
                className={`radio-button ${
                  selectedType === type ? "selected" : ""
                }`}
                onClick={() => handleTypeChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="md:block xsm:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid items-center Parent-filter py-10 lg:grid-cols-5 md:grid-cols-3 xsm:grid-cols-2 p-20 "
            key={filteredData.length} // Use a unique key to force remount when data changes
          >
            {/* Map through a slice of the filteredData array containing only the first 4 items */}
            {filteredData.slice(0, 5).map((data, i) => (
              <Item
                key={data.id}
                id={data.id}
                title={data.title}
                old_price={data.old_price}
                new_price={data.new_price}
                image={data.image}
                image2={data.image2}
                sizes={data.sizes}
              />
            ))}
          </motion.div>
        </div>
        <div className="m-auto">
          <Link
            className={`radio-button xsm:hidden md:block`}
            to={`/${selectedType}`}
            onClick={() => handleTypeChange(`${selectedType}`)}
          >
            View All
          </Link>
        </div>
        <div className="md:hidden xsm:block mt-6">
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            disableButtonsControls
            controlsStrategy="none"
          >
            {filteredData.slice(0, 5).map((data, i) => (
              <div key={i} className="p-4">
                <Item
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  old_price={data.old_price}
                  new_price={data.new_price}
                  image={data.image}
                  image2={data.image2}
                
                />
              </div>
            ))}
          </AliceCarousel>
        </div>
        <Link
          className={`radio-button md:hidden xsm:block m-auto mt-4`}
          to={`/${selectedType}`}
          onClick={() => handleTypeChange(`${selectedType}`)}
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default ProductType;
