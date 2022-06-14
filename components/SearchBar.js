import styles from './layout.module.css'
import Image from 'next/image'
import { BsFillCartPlusFill } from 'react-icons/bs';
export default function SearchBar() {
    return (
        <>
            <div className={`row ${styles.searchbar}`} style={{ backgroundColor: " #ffffff" }}>
                <div className='col d-flex flex-direction-row'>
                    <Image src="/images/logo.png" height={35} width={180} />
                    <input className={styles.styled_input} type="text" placeholder="Search" />
                    <button className={styles.search_button}>Search</button>
                    <div className={styles.cart_bg}><BsFillCartPlusFill color='white' /></div>
                </div>
            </div>
        </>
    )
}