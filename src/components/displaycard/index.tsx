import styles from './displaycard.module.css'

interface DisplayCardProps {
    name:string,
    image:string,
    price:number
}

const DisplayCard : React.FC<DisplayCardProps> = ({name,image,price}) => {
    return(
        <div id={styles.displaycard}>
            <img src={image} alt=''/>
            <h2>{name}</h2><br/>           
            <h3>${price}</h3><br/>
            <div>Add to Cart <i className='fa-solid fa-cart-plus'/></div>
        </div>
    )
}
export default DisplayCard
