import React, { useState } from 'react';
import Products from '../components/Products';
import AddProduct from '../components/AddProduct';

const Home = () => {
    const [editId,setEditId] = useState(null);
    const handleEdit=(id)=>{
        console.log(id,'from hoome');
        setEditId(id)
    }
    return (
        <div className='container mx-auto' >
            <div className='flex gap-10 '>
                <Products handleEdit={handleEdit} />
                <AddProduct editId={editId} />
            </div>

        </div>
    );
};

export default Home;