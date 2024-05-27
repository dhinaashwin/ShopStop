import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FilteredItems from './Pages/FilterItems/FilterItems';
import Homepage from './Pages/Homepage';
import Product from './Pages/Product';
import Cart from './Pages/Cart/Cart';
import SearchPage from './Pages/SearchPage/SearchPage';
import ImageModal from './Pages/ImageModal';
import AllProducts from './Pages/AllProducts';

const filterRoutes = [
  { path: '/Men', filterType: 'category', filterValue: 'Men', title: 'Men' },
  { path: '/Women', filterType: 'category', filterValue: 'Women', title: 'Women' },
  { path: '/discount', filterType: 'discount', filterValue: true, title: 'Discount' },
  { path: '/NewCollections', filterType: 'newProduct', filterValue: true, title: 'New' },
  { path: '/TShirt', filterType: 'type', filterValue: 'TShirt', title: 'TShirt' },
  { path: '/Denim', filterType: 'materialType', filterValue: 'Denim', title: 'Denim' },
  { path: '/Shirt', filterType: 'type', filterValue: 'Shirt', title: 'Shirt' },
  { path: '/Jeans', filterType: 'type', filterValue: 'Jeans', title: 'Jeans' },
  { path: '/Shoe', filterType: 'type', filterValue: 'Shoe', title: 'Shoe' },
  { path: '/Hoodie', filterType: 'type', filterValue: 'Hoodie', title: 'Hoodie' },
  { path: '/Trousers', filterType: 'type', filterValue: 'Trousers', title: 'Trousers' },
  {
    path:"/linen",filterType:'fabricType',filterValue: 'linen',title:"Linen"
  }
];

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/allProducts" element={<AllProducts />} />
      {filterRoutes.map(({ path, filterType, filterValue, title }) => (
        <Route
          key={path}
          path={path}
          element={<FilteredItems filterType={filterType} filterValue={filterValue} title={title} />}
        />
      ))}
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/Modal" element={<ImageModal />} />
    </Routes>
  );
};

export default RoutesConfig;
