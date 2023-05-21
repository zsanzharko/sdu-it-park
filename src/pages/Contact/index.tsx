import { PageTitle } from '../../components/PageTitle';
import { ContactSlider } from '../../layouts/ContactSlider';
import { AddressContainer } from '../../layouts/AddressContainer';

import './style.scss';

export const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-page__wrapper">
        <PageTitle name="контакты" />
        <div className="contact-page__container">
          <div className="contact-page__container-contacts">
            <ContactSlider />
            <AddressContainer />
          </div>
          <div className="contact-page__container-map">
            <iframe
              title="SDU map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11632.333264440063!2d76.6690542!3d43.2077418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b7d14aec270c056!2sSDU%20(Suleyman%20Demirel%20University)!5e0!3m2!1sen!2skz!4v1669394791162!5m2!1sen!2skz"
              width="690"
              height="636"
              loading="lazy"
            >
              grame body
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
