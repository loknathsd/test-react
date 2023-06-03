import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({handleEdit}) => {
    const [products,setProducts] =useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

    const handleDelete=(id)=>{
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const filterProduct = products.filter(pd=>pd.id !== id);
            setProducts(filterProduct);
        })

    }

    return (
        <div className='w-[50%]'>
            <h1>Products</h1>
            {
                products.map(pd=><Product handleEdit={handleEdit} handleDelete={handleDelete} key={pd.id} pd={pd} />)
            }
            
        </div>
    );
};

export default Products;