import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from '../Product';
import Search from '../Search';
import s from './style.module.css';

function App() {

    const default_products = [
        { id: 1, title: 'One', image: 'https://robohash.org/hicveldicta.png' },
        { id: 2, title: 'Two', image: 'https://robohash.org/hicveldicta.png' },
        { id: 3, title: 'Three', image: 'https://robohash.org/hicveldicta.png' },
        { id: 4, title: 'Four', image: 'https://robohash.org/hicveldicta.png' },
        { id: 5, title: 'Five', image: 'https://robohash.org/hicveldicta.png' },
    ];

    const [products, setProducts] = useState(default_products);

    // создать функцию, которая принимает id продукта и удляет его (задает новый state без данного продукта)

    const delete_product = (id) => {
        const new_product = products.filter(product => product.id !== id);
        setProducts(new_product);
    };

    // передать через промисы метод delete_product и вызывать его по нажатию на кнопку в компоненте

    // реализовать процесс загрузки данных с API

    // добавить свойство show

    useEffect(() => {
        (async () => {
            const resp = await fetch('https://fakestoreapi.com/products');
            const data = await resp.json();
            setProducts(data.map(({ id, title, image, price }) => ({ id, title, image, price, show: true })));
        })()
    }, []);


    // написать функцию, которая получает substring и если у товара название начинается
    // на указанное значение, то в show указывае true, в ином случае false
    // startsWith
    // toLowerCase()

    const search_handler = (substring) => {
        substring = substring.toLowerCase();

        const new_product = products.map(product => {
            product.show = product.title.toLowerCase().startsWith(substring);
            return product
        })
        setProducts(new_product);
    }



    return (
        <div>
            <Search 
            search_handler = {search_handler}
            />
            <div className={s.product_container}>
                {
                    products
                    .filter(({show})=> show)
                    .map(product =>
                        <Product
                            key={product.id}
                            {...product}
                            delete_product={delete_product}
                        />)
                }
            </div>
        </div>

    );
}

export default App;

// создать компонент Product
// создать массив с продуктами (id, title, image)
// пройтись map по массиву и отобразить товары
// стилизовать по вкусу
