import React, { useContext } from 'react'
import '../App.css'
import { MainLayoutContext } from '../layout/MainLayout'


export default function AddCarts() {
  const { setProducts, products } = useContext(MainLayoutContext);

  const handleCreate = () => {
    const title = document.getElementById('title').value
    const price = document.getElementById('price').value
    const oldprice = document.getElementById('oldprice').value
    const category = document.getElementById('category').value
    const image = document.getElementById('img').value
    if(title == '' || price=='' || oldprice=='' || category == '' || image == ''){
      alert('Please fill all the fields')
      return;
    }
    const data = {
      name: title,
      new_price: price,
      image: image,
      old_price: oldprice,
      category: category
    }
    console.log(data)

    setProducts([...products, data])
    document.getElementById('title').value = ''
    document.getElementById('price').value = ''
    document.getElementById('oldprice').value = ''
    document.getElementById('category').value = ''
    document.getElementById('img').value = ''

   console.log(products) 
  }
  return (
    <>
      <div className="AddCarts">
        <h3>Add Product</h3>
        <label htmlFor="title" className='w-100'><h5>Product Title</h5></label>
        <input placeholder='Enter your product title' type="text" name='title' id='title' className='form-control' />

        <div className="d-flex align-items-center mt-3 w-100 justify-content-between gap-5">
          <div className='w-50'>
            <label htmlFor="price"><h5>Price</h5></label>
            <input placeholder='Enter your product price' type="number" name='price' id='price' className='form-control' />
          </div>
          <div className='w-50 '>
            <label htmlFor="oldprice"><h5>Old Price</h5></label>
            <input placeholder='Enter your product price' type="number" name='oldprice' id='oldprice' className='form-control' />
          </div>
        </div>

        <div className="d-flex w-100 mt-4 flex-column">
          <label htmlFor="category"><h5>Category</h5></label>
          <select name="category" id="category" className='form-control w-50'>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kid">kid</option>
          </select>
        </div>

        <div className="d-flex align-items-center mt-4 flex-column w-100">
          <label htmlFor="img" className='w-100'><h5>Image URL</h5></label>
          <input placeholder='Enter your product image url' type="text" name='img' id='img' className='form-control' />
        </div>

        <button className='add font-monospace fs-5 btn btn-outline-success mt-4  w-50' onClick={handleCreate}>Add</button>
      </div>
    </>
  )
}
