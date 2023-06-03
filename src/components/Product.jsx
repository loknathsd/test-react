import React from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Product = ({pd,handleDelete,handleEdit}) => {     
    const {id,image,category,price,title,} = pd || {};
    const navigate=useNavigate()
  
  const handleProduct=()=>{
     navigate(`/product-detail/${id}`);
  }
    return (
        <div  className='border border-red-500  mt-5 cursor-pointer'>
            <div  className='flex  gap-5'>
                <img className='w-32' src={image} alt="" />
                <div className=''>
                    <div className='flex gap-5 text-2xl my-8'>
                       <button onClick={()=>handleEdit(id)}> <AiOutlineEdit/></button>
                        <button onClick={()=>handleDelete(id)}><RiDeleteBin6Line/></button>
                    </div>
                    <p onClick={handleProduct} className='text-3xl'>{title}</p>
                    <p>price : {price}</p>
                    <p>{category}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Product;