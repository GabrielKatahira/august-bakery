import styles from './blogpost.module.css';
import { Link } from 'react-router';
import { useParams, useNavigate } from 'react-router';
import { blogPosts } from '../../assets/posts';
import logo from '../../assets/logo.png';
import Footer from '../../components/footer';

function BlogPost() {
    const {slug} = useParams<{slug: string}>();
    const post = blogPosts.find(p => p.slug == slug);
    const navigate = useNavigate();

    return(<>
        <div className={styles.blogpost}>
            <div id={styles.return}>
                <Link to='/blog'>{'< '}Return to Blog</Link>
                <img src={logo} onClick={()=>navigate('/')}/>
                <div/>
            </div>
            <img src={post?.image} alt={post?.alt}/>
            <div id={styles.postcontent}>
                <h1>{post?.title}</h1>
                <h2>{post?.subtitle}</h2>
                <h3>By {post?.creator}</h3>
                <p>{post?.content}</p>
            </div>
            <Footer/>
        </div>
    </>)
}

export default BlogPost