import React, { useContext } from 'react';
import '../App.css';
import { IoCloseSharp } from "react-icons/io5";
import { MainLayoutContext } from '../layout/MainLayout';

export default function OutletPage() {
  const { products } = useContext(MainLayoutContext);

  const handleDeleteCart = (event) => {
    event.target.closest('.cart').remove();
  };

  return (
    <div className="OutletBox">
      <h3>All Products List (36)</h3>
      <div className="OutletCartsWrapper overflow-y-scroll">
        <div className="d-flex gap-4 justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <h5>Products</h5>
            <h5>Title</h5>
          </div>
          <div className="d-flex gap-3">
            <h5>New Price</h5>
            <h5>Old Price</h5>
            <h5>Category</h5>
            <h5>Remove</h5>
          </div>
        </div>
        <div className="Carts">
          {products.map((item) => (
            <div key={item.id} className="cart">
              <div className="component d-flex justify-content-between">
                <div className="img2">
                  <img src={`${item.image}`} alt="" />
                </div>
                <div className="text2 d-flex justify-content-around align-items-center gap-4">
                  <h5 className='h5'>{item.name}</h5>
                  <h5>${item.new_price}</h5>
                  <h5>${item.old_price}</h5>
                  <h5>{item.category}</h5>
                  <button className='btn btn-outline-danger fs-5' onClick={handleDeleteCart}><IoCloseSharp /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
