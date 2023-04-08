import React, { useState } from 'react';
import './contact.scss';
import author from '../../assets/images/author.png';
import book from '../../assets/images/book.png';
import phone from '../../assets/images/Vector.png';
import location from '../../assets/images/LocationIcon.svg';





function Contact() {
    const name = "Nazim Ibragimov"
    const position  = 'Senior Lecturer'
    const mobile = '8-702-586-98-75'

    const block = "block 5, number 69"
    const numb = '8-777-777-77-77'
    const address = "Алматинская область, Kарасайский район. 040900, город Каскелен, ул. Абылай хана, 1/1"
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(3);

    const goToPrev = () => {
        let index = currentIndex - 1;
        index < 0 ? setCurrentIndex(length - 1) : setCurrentIndex(index);
    }
    
    const goToNext = () => {
        let index = currentIndex + 1;
        index === length ? setCurrentIndex(0) : setCurrentIndex(index);
    }


    return (
        <>
            <div className='largest-container'>
                <div className='outer-container'>
                    <div className='inner-container'>
                        <p>контакты</p>
                    </div>
                </div>

                <div className='lecturer-container'>
                    <div className='contact-container'>
                        <div className='people-contacts'>
                            <button className='people-contacts__button left' onClick={goToPrev} disabled={currentIndex === 0}>❮</button>
                            <button className='people-contacts__button right' onClick={goToNext}  disabled={currentIndex === length - 1}>❯</button>
                            <div className="people-contacts__slider" style={{transform: `translateX(-${currentIndex * 690}px)`}}>
                                <div className="people-contacts__slide">
                                    <img src={author} alt="" />
                                    <h2>{name}</h2>
                                    <p>{position}</p>
                                    <p>{mobile}</p>
                                </div>
                                <div className="people-contacts__slide">
                                    <img src={author} alt="" />
                                    <h2>{name}</h2>
                                    <p>{position}</p>
                                    <p>{mobile}</p>
                                </div>
                                <div className="people-contacts__slide">
                                    <img src={author} alt="" />
                                    <h2>{name}</h2>
                                    <p>{position}</p>
                                    <p>{mobile}</p>
                                </div>
                            </div>
                        </div>
                        <div className='address-cont'>
                            <div className='detailed-address'>
                                <img src={location} alt="" />
                                <p>{address}</p>
                            </div>
                            <div className='detail-container'>
                                <div className='where-to-find'>
                                    <img src={book} alt="" />
                                    <p>{block}</p>
                                </div>
                                <div className='where-to-find'>
                                    <img src={phone} alt="" />
                                    <p>{numb}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sdu-in-google'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11632.333264440063!2d76.6690542!3d43.2077418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b7d14aec270c056!2sSDU%20(Suleyman%20Demirel%20University)!5e0!3m2!1sen!2skz!4v1669394791162!5m2!1sen!2skz" width="690" height="636" loading="lazy">grame body</iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;