import styles from './layout.module.css'
import { BsFillTelephoneOutboundFill, BsFillArrowRightSquareFill, BsClipboard, BsPinFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FiLogIn } from 'react-icons/fi';
export default function Header() {
    return (
        <>
            <div className={`row ${styles.bluebackground}`} style={{ backgroundColor: " #1596F8" }}>
                <div className='col-sm-5'>Offer Zone Top Deals & Discounts </div>
                <div className='col-sm-7 d-flex flex-direction-row justify-content-around'>
                    <div><BsPinFill /> Select Location </div> |
                    <div><TbTruckDelivery />  Track Order </div> |

                    <div><BsFillTelephoneOutboundFill /> 0072 980 800 </div> |
                    <div><FiLogIn /> Login </div> |
                    <div><FiLogIn /> Register </div> |
                </div>
            </div>
        </>
    )
}