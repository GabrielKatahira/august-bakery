import styles from './productcard.module.css'
import { useState } from 'react';

interface ProductProps {
    name:string;
    image:string;
    description:string;
    sizes:number[];
    prices:number[];
}

const ProductCard : React.FC<ProductProps> = ({name,image,description,sizes,prices}) => {
    const [size,setSize] = useState(sizes[0]);
    const [price,setPrice] = useState(prices[0]);

    function HandleSize(e:React.ChangeEvent<HTMLSelectElement>) {
        if (e.target) {
            setSize(Number(e.target.value));
            setPrice(prices[sizes.indexOf(Number(e.target.value))])
        }
    }
    
    return (<div id={styles.productcard}>
        <div id={styles.image}>
            <img src={image}/>
        </div>
        <div id={styles.title}>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
        {sizes[0] > 0 &&
        <div id={styles.choosesize}>
            <p>Choose the size:</p>
            <select onChange={(e) => {HandleSize(e)}} value={size}>
                {sizes.map((size) => (<option value={size}>{`${size} cm`}</option>))}
            </select>
        </div>}
        <div id={styles.price}><p>${price}</p></div>
        <div id={styles.btnbuy}><p>Add to Cart</p><i className='fa-solid fa-cart-plus'></i></div>
    </div>)
}

export default ProductCard