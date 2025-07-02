import styles from './blogpostcard.module.css'
import { Link,useNavigate } from 'react-router'

interface BlogPostProps {
    title:string,
    subtitle?:string,
    imageUrl:string,
    slug:string,
    imagedesc:string
}

const BlogPostCard:React.FC<BlogPostProps> = ({title,subtitle,imageUrl,slug,imagedesc}) => {
    const navigate = useNavigate();
    return(<>
        <div id={styles.post}>
            <img src={imageUrl} onClick={() => navigate(`/blog/${slug}`)} alt={imagedesc}/>
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <Link to={`/blog/${slug}`}>Read More</Link>
            </div>
        </div>
       
    </>)
}

export default BlogPostCard