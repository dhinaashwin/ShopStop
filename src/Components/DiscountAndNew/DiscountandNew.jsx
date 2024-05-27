import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const DiscountandNew = () => {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 3 },
  };
  const { Datas } = useContext(ShopContext);
  const filters = ["Discount", "New"];
  const [selectedFilter, setSelectedFilter] = useState("Discount");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Adjusted filtering logic
  const filteredData = Datas.filter((item) => {
    if (selectedFilter === "Discount") {
      return item.discount === true && item.category === "Men";
    } else if (selectedFilter === "New") {
      return item.newProduct === true && item.category === "Men";
    }
    return false;
  });

  return (
    <>
      <div className="flex justify-center gap-8 mt-24 md:text-[24px]">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`radio-button ${selectedFilter === filter ? "selected" : ""}`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="md:block xsm:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid items-center Parent-filter py-10 lg:grid-cols-5 md:grid-cols-3 xsm:grid-cols-2 p-20"
          key={filteredData.length}
        >
          {filteredData.slice(0,5).map((data) => (
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
      <div className="md:hidden xsm:block mt-6">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          disableButtonsControls
          controlsStrategy="none"
        >
          {filteredData.slice(0,5).map((data, i) => (
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
    </>
  );
};

export default DiscountandNew;
