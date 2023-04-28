import { useRouter } from 'next/router'
import { items } from "../../components/AllData";
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/StarProducts.module.css'
import { Inter } from 'next/font/google'
import Categories from '@/components/Categories';

const inter = Inter({ subsets: ['latin'] })

const Post = () => {
  const router = useRouter()
  const { slug } = router.query
  const filteredItems = items.filter((item) => slug === 'all'? item : item.category === slug);
  return (
    <div className={`${styles.mainContainer} ${inter.className}`}>
      
      <div className={styles.container}>
      <Categories />
        <div className={styles.flexbox}>
            {filteredItems.map((item) => {
              const {id , img,description , price} = item;
              return(
                  <Link
                    key={id}
                    className={styles.product}
                    // onClick={() => window.top(0, 0)}
                    href={`/product/${id}`}
                  >
                    <Image src={img} alt={description} className={styles.image} priority />
                    <p className={styles.details}>{description}</p>
                    <p className={styles.price}>{price}$</p>
                  </Link>
              )
            })}
          </div>
      </div>
    </div>
  );
}

export default Post;
