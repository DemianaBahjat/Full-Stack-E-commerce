import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Categories.css';

// الصور الافتراضية - قم بتحديث المسارات حسب الضرورة
import ele from '../../Assets/Electronics.jpg';
import mobile from '../../Assets/Mobiles.jpg';
import kitch from '../../Assets/Kitchen.jpg';
import app from '../../Assets/Appliances.jpg';
import furn from '../../Assets/Furniture.jpg';
import offers from '../../Assets/Offers.jpg';
import { authContext } from '../../Contexts/AuthContext';


const categoryImages = {
    Electronics: ele,
    Mobiles: mobile,
    Kitchen: kitch,
    Appliances: app,
    Furniture: furn,
    Offers: offers,
};

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const {cat , setCat} = useContext(authContext)
    console.log(cat)
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://gazierproject.vercel.app/api/categories'); 
                setCategories(response.data);
                console.log(response)
            } catch (error) {
                console.error('Error fetching categories', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="categories py-3 m-auto position-relative d-flex gap-3 align-items-center justify-content-center">
            {categories.map((category) => (
                <div
                    key={category.name}
                    // to={`/${category.name.toLowerCase()}`}
                    className="text-decoration-none text-black"
                    onClick = {()=>setCat(category.name)}
                >
                    <div className="category text-center border px-3 py-2 rounded-4">
                        <div className="logo">
                            <img
                                src={categoryImages[category.name]}
                                alt={category.name}
                                className="w-100"
                            />
                        </div>
                        <p className="m-0 fw-bold">{category.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
