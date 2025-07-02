import styles from './cart.module.css'
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

function Cart() {
    return(<>
        <div className={styles.cart}>
            <div id={styles.hero}>
                <NavBar/>
                <h1>Your Cart</h1>
            </div>
            <ul>
                <li><p>French Bread (15cm)</p><span id={styles.dots}/><p>$3.15 x 1 = $3.15 <i className="fa-solid fa-trash"></i></p></li>
                <li><p>French Bread (45cm)</p><span id={styles.dots}/><p>$8.39 x 3 = $25.17 <i className="fa-solid fa-trash"></i></p></li>
                <li><p>Tuna Sandwich</p><span id={styles.dots}/><p>$4.99 x 2 = $9.98 <i className="fa-solid fa-trash"></i></p></li>
            </ul>
            <div id={styles.total}><p>Total</p><span id={styles.dotstotal}/><p>$38.30</p></div>
            <button id={styles.orderbtn}>Order Now</button>
            <Footer/>
        </div>
    </>)
}

export default Cart;