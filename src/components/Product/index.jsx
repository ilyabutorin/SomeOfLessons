import React from 'react'
import s from './style.module.css';

export default function Product({ id, title, image, delete_product, price }) {

    return (
        <div className={s.card}>
            <img src={image} alt="product" />
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={()=>delete_product(id)}>Delete</button>
        </div>
    )
}