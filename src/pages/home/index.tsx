import styles from './home.module.css'
import NavBar from '../../components/navbar'
import { Link } from 'react-router'
import descimg from '../../assets/desc.jpg'
import DisplayCard from '../../components/displaycard'
import product1 from '../../assets/produto1.jpg'
import product2 from '../../assets/produto2.jpg'
import product6 from '../../assets/produto6.jpg'
import Footer from '../../components/footer'

function Home() {
  
  return (
    <>
      <div className={styles.home}> 
        <div id={styles.hero}>
          <NavBar/>
          <div id={styles.herotext}>
            <h1>Love in Each Bite</h1>
            <h2>We bake our bread with love, from grain to table.</h2>
            <Link to="/products">PRODUCTS</Link>
          </div>
        </div>
        <div id={styles.desc}>
          <h1>50 Years of Experience</h1>
          <div>
            <p>Since 1967, we've brought the best of the oven straight to your home. A recipe passed down through generations, perfected by every hand that's touched it.</p>
            <img src={descimg} alt='French Bread'/>
          </div>
        </div>
        <div id={styles.productdisplay}>
          <h2>Some of our best products</h2>
          <div >
            <DisplayCard name='French Bread (15cm)' image={product1} price={3.15}/>
            <DisplayCard name='Cheese and Ham Sandwich' image={product2} price={4.35}/>
            <DisplayCard name='Tuna Sandwich' image={product6} price={4.99}/>
          </div>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default Home
