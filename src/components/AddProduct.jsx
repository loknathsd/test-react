import React, { useEffect, useState } from 'react';

const AddProduct = ({editId}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [category,setCategory] = useState();
    // const [editData,setEditData] = useState({});


    // useEffect(()=>{
    //     fetch(`https://fakestoreapi.com/products/${editId}`)
    //         .then(res=>res.json())
    //         .then(data=>{
    //            if(data?.length>0){
    //             setName(data.name);
    //             setDescription(data.description);
    //             setPrice(data.price);
    //             setImageUrl(data.image);
    //             setCategory(data.category);
    //            }
    //         })
    // },[editId])

    const handleSubmit=(e)=>{
        e.preventDefault()
       fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: name,
                price:price,
                description: description,
                image: imageUrl,
                category: category
            }
        )
    })
        .then(res=>res.json())
        .then(data=>{
            console.log(data,'add')
            alert("product added successfully")
        })
    }
    return (
        <div>
            <div className='mt-10'>
                <h1 className='text-2xl my-5'>Add products</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e)=>setName(e.target.value)} value={name}  name="name" className='w-full px-6 py-1 border border-gray-400 my-2' type="text" placeholder='Product name' /><br />
                    <input onChange={(e)=>setDescription(e.target.value)} value={description} name='description' className='w-full px-6 py-1 border border-gray-400 my-2' type="text" placeholder='Description' /><br />
                    <input onChange={(e)=>setImageUrl(e.target.value)} value={imageUrl} name="imageUrl" className='w-full px-6 py-1 border border-gray-400 my-2' type="text" placeholder='Image Url' /><br />
                    <input onChange={(e)=>setPrice(e.target.value)} name='price' value={price} className='w-full px-6 py-1 border border-gray-400 my-2' type="text" placeholder='Price' /><br />
                    <select onChange={(e)=>setCategory(e.target.value)} value={category}  name="category" id="">
                        <option  value="select Category">Select Category</option>
                        <option value="electronics">electronics</option>
                        <option value="jewelery">jewelery</option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="women's clothing">women's clothing</option>
                    </select>
                    <input className='w-full px-6 py-1 border border-gray-400 my-2' type="submit" /><br />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;