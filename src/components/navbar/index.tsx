import styles from './navbar.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import HeaderLink from '../headerlink'

function NavBar() {

    return (
        <>
            <div id={styles.header}>
                <Link to='/'>
                    <img alt="logo" src={logo} id={styles.logo}></img>
                </Link>
                <div id={styles.headerlinks}>
                    <HeaderLink link='/' icon="fa-solid fa-house-chimney fa-2x" title='Home'/> 
                    <HeaderLink link='/products' icon="fa-solid fa-bag-shopping fa-2x" title='Products'/> 
                    <HeaderLink link='/blog' icon='fa-solid fa-newspaper fa-2x' title='Blog'/> 
                    <HeaderLink link='/contact' icon='fa-solid fa-envelope fa-2x' title='Contact Us'/>
                    <HeaderLink link='/cart' icon='fa-solid fa-cart-shopping fa-2x' title='Your Cart'/> 
                </div>
            </div>
        </>
    )

}

export default NavBar