import styles from './products.module.css'
import NavBar from '../../components/navbar'
import ProductCard from '../../components/productcard';
import Product1 from '../../assets/produto1.jpg'
import Product2 from '../../assets/produto6.jpg'
import Product3 from '../../assets/produto2.jpg'
import Footer from '../../components/footer';

function Products() {
    return (<>
        <div className={styles.products}>
            <div id={styles.hero}>
                <NavBar/>
                <h1>Products</h1>
            </div>
            <ProductCard name='French Bread' image={Product1} description='Known originally as a baguette' prices={[3.15,5.99,8.39]} sizes={[15,30,45]}/>
            <ProductCard name='Tuna Sandwich' image={Product2} description='Made with white bread, canned tuna and mayonnaise' prices={[4.99]} sizes={[0]}/>
            <ProductCard name='Cheese and Ham Sandwich' image={Product3} description='Melted mozzarella cheese and ham in a grilled sandwich' prices={[4.35]} sizes={[0]}/>
            <section id={styles.space}/>
            <Footer/>
        </div>
    </>)
}
export default Products;