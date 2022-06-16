import styles from './layout.module.css'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
export default function QuickAccess() {
    return (
        <>
            <div className={`${styles.quick_access}`}>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h6>Popular Brands</h6>
                        <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>Toyota</a></p>
                        <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>BMW</a></p>
                        <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>Nissan</a></p>
                        <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>Honda</a></p>
                    </div>
                    <div className='col-sm-4'>
                        <h6>Quick Links</h6>
                        <p><a className="btn" href='/about' style={{ fontSize: "14px", color: "#a0a0b0" }}>About</a></p>
                        <p><a className="btn" href='/contact' style={{ fontSize: "14px", color: "#a0a0b0" }}>Contact Us</a></p>
                        <p><a className="btn" href='/popular_cars' style={{ fontSize: "14px", color: "#a0a0b0" }}>Popular Cars</a></p>
                    </div>
                    <div className='col-sm-4'>
                        <h6>Get in Touch</h6>
                        <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>Ngong Rd, Nairobi Kenya </a></p>
                        <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>+254 721 123 456</a></p>
                        <p><a className="btn" style={{ fontSize: "14px", color: "#a0a0b0" }}>autocheck@mail.com</a></p>
                        <p><BsFacebook /> <BsTwitter /> <BsYoutube /></p>
                    </div>
                </div>
            </div>
        </>
    )
}