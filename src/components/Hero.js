import Image from 'next/image'
import Link from 'next/link'
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";
import styles from '@/styles/Hero.module.css'

const links = [
    {id : 1 , title : 'Live Comfortably' , image : Main1 , url : '/' , grid : 'one'},
    {id : 2 , title : 'Skincare' , image : Main2 , url : '/', grid : 'two'},
    {id : 3 , title : 'Kitchen' , image : Main3 , url : '/', grid : 'three'},
    {id : 4 , title : 'Electronics' , image : Main4 , url : '/', grid : 'four'}
]
const Hero = ()=> {
  return (
    <div className={styles.homeContainer}>
        <div className={styles.gridContainer}>
            {links.map((item)=>{
                const {id,title,image,url , grid} = item;
                return(
                    <div key={id} className={`${styles.featured} 
                    ${grid === 'one' ? styles.one
                    : grid === 'two' ? styles.two
                    : grid === 'three' ? styles.three
                    : styles.four}`}>
                        <Link href={url}>
                            <div className={styles.overlay}></div>
                            <Image src={image} alt={title} className={styles.image} />
                            <p className={styles.description}>{title}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Hero;