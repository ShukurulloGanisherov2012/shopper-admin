import React, { createContext, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom/dist'
import Categories from '../components/Categories'

export const MainLayoutContext = createContext();
export default function MainLayout() {
  const array = [
    {
      id: 1,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image: '/product1.png',
      new_price: 50.00,
      old_price: 80.50,
      category: 'women'
    },
    {
      id: 2,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image: '/product2.png',
      new_price: 85.00,
      old_price: 120.50,
      category: 'women'
    },
    {
      id: 3,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image: '/product3.png',
      new_price: 60.00,
      old_price: 100.50,
      category: 'women'
    },
    {
      id: 4,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image: '/product4.png',
      new_price: 100.00,
      old_price: 150.00,
      category: 'women'
    },
    {
      id: 5,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image: '/product5.png',
      new_price: 85,
      old_price: 120.5,
      category: 'women'
    },
    {
      id: 6,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      image: '/product6.png',
      new_price: 85,
      old_price: 120.5,
      category: 'men',
    },
    {
      id: 7,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      image: '/product7.png',
      new_price: 85,
      old_price: 120.5,
      category: 'men',
    },
    {
      id: 8,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      image: '/product8.png',
      new_price: 85,
      old_price: 120.5,
      category: 'men',
    },
    {
      id: 9,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      image: '/product9.png',
      new_price: 85,
      old_price: 120.5,
      category: 'men',
    },
    {
      id: 10,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      image: '/product10.png',
      new_price: 85,
      old_price: 120.5,
      category: 'men',
    },
    {
      id: 11,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      image: '/product11.png',
      new_price: 85,
      old_price: 120.5,
      category: 'kid',
    },
    {
      id: 12,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      image: '/product12.png',
      new_price: 85,
      old_price: 120.5,
      category: 'kid',
    },
    {
      id: 13,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      image: '/product13.png',
      new_price: 85,
      old_price: 120.5,
      category: 'kid',
    },
    {
      id: 14,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      image: '/product14.png',
      new_price: 85,
      old_price: 120.5,
      category: 'kid',
    },
    {
      id: 15,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      image: '/product15.png',
      new_price: 85,
      old_price: 120.5,
      category: 'kid',
    }
  ];
  const [products, setProducts] = useState(array);
  return (
    <MainLayoutContext.Provider value={{setProducts, products}}>
      <Header />

      <div className="d-flex">
        <Categories />
        <Outlet />
      </div>
    </MainLayoutContext.Provider>
  )
}
