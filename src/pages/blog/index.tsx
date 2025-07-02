import styles from './blog.module.css'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer';
import BlogPostCard from '../../components/blogpostcard';
import { blogPosts } from '../../assets/posts';

function Blog() {
    return(<>
        <div className={styles.blog}>
            <div id={styles.hero}>
                <NavBar/>
                <h1>Blog</h1>
            </div>
            <div id={styles.bloggrid}>
                {blogPosts.map((post) => (
                    <BlogPostCard title={post.title} imageUrl={post.image} subtitle={post.subtitle} slug={post.slug}/>
                ))}
            </div>
            <Footer/>
        </div>    
    </>)
}

export default Blog;