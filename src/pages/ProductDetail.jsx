import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const ProductDetail = () => {
    const [product,setProduct] = useState({});
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[id])
    return (
        <div>
            <div className='flex gap-5 mt-10'>
                <img className='w-96' src={product.image} alt="" />
                <div className='mt-24'>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <h1>{product.price}</h1>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;