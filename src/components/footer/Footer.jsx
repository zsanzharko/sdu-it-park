import React from 'react';

import './footer.scss'
import facebook from '../../assets/images/link-icons/facebook-icon/facebook.png';
import sdulogo from '../../assets/images/sdu_technopark_logo.png'
import linkedin from '../../assets/images/link-icons/linkedin-icon/linkedin.png';
import instagram from '../../assets/images/link-icons/instagram-icon/instagram.png';
import earth from '../../assets/images/link-icons/earth-icon/earth.svg';
import envelope from '../../assets/images/link-icons/envelope-icon/Envelope.svg';




function Footer() {
    const number = '+7 (727) 307 95 65'
    const name = 'Нужна помощь? Свяжитесь с нами:'
    const link = 'www.technopark.sdu.edu.kz'
    const email = 'technopark@sdu.edu.kz'


    return ( <>
    
        <div className='footer'>
            <div className='logos-banner'>
                <div className='technopark-logo'>
                    <a href=""><img src={sdulogo} alt="Logo TechnoPark" loading="lazy" /></a>
                </div>
                <div className='social-networks'>    
                    <a href=""><img src={facebook} alt="facebook" loading="lazy" /></a>
                    <a href=""><img src={instagram} alt="instagram" loading="lazy" className='instagram' /></a>
                    <a href=""><img src={linkedin} alt="linkedin" loading="lazy" /></a>
                </div>
            </div>
            
            <div className='copyrights'>
                <div className='need-help'>
                    <h1>{name}</h1>
                    <a href="tel: {number}">{number}</a>
                </div>
                <div className='uni-contacts'>
                    <div className='contact'>
                        <img src={earth} alt="website" loading="lazy" />
                        <a href="">{link}</a>
                    </div>
                    <div className='contact'>
                        <img src={envelope} alt="website" loading="lazy" />
                        <a href="">{email}</a>
                    </div>
                </div>
            </div>

        </div>
    
    </> );
}

export default Footer;