import React from 'react';

import './cooperation.scss';

import circle from "../../assets/images/circle-for-categories.png";
import mountain from "../../assets/images/mountains-for-categories.png";
import wheel from "../../assets/images/wheelicon-for-cooperation.png";

function Cooperation() {
    return (
        <>
            <section className="categories">

                <section className="google-form">
                    <div className="img-container">
                        <img className="circle" src={circle} alt="" />
                        <img className="wheel" src={wheel} alt="" />
                        <img className="mountains" src={mountain} alt="" />
                    </div>
                    <iframe title="google form" src="https://docs.google.com/forms/d/e/1FAIpQLSdJ_6W_12zZGppsD4v9ovhleha-A1KTtFs_ihCRPgElIoWFrQ/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no"></iframe>
                </section>

            </section>

        </>
    );
}

export default Cooperation;