import styles from './footer.module.css'
import { Link } from 'react-router'

function Footer() {
    return(
    <div id={styles.footer}>
        <div id={styles.quicknav}>
            <h1>Quick Navigation</h1>
            <ul>
                <li><Link to='/'>Home Page</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/blog'>See our Blog</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
            </ul>
        </div>
        <div id={styles.socials}>
            <h1>Our Social Media</h1>
            <ul>
                <li><a href="https://instagram.com"><i className='fa-brands fa-instagram fa-2x'/></a></li>
                <li><a href="https://youtube.com"><i className='fa-brands fa-youtube fa-2x'/></a></li>
                <li><a href="https://twitter.com"><i className='fa-brands fa-x-twitter fa-2x'/></a></li>
                <li><a href="https://web.whatsapp.com"><i className='fa-brands fa-whatsapp fa-2x'/></a></li>
            </ul>
        </div>
    </div>
    )
}

export default Footer