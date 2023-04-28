import { PageTitle } from '../PageTitle';
import './style.scss';
import software from '../../assets/images/laptop2.png';

export const HardwareSection: React.FC = () => {
  return (
    <div className="software-section">
      <PageTitle name="software" />
      <div className="software-section__wrapper">
        <img className="software-section__image" src={software} alt="" />
        <div className="software-section__text-block">
          <p className="software-section__text">
            Команда Технопарка предоставляет решения и продукты для бизнеса, такие как:
          </p>
          <ul className="software-section__text software-section__text-marked">
            <li className="software-section__text">мобильное приложение</li>
            <li className="software-section__text">веб приложение</li>
            <li className="software-section__text">дэшборды</li>
            <li className="software-section__text">Internet of Things (IoT) решения</li>
            <li className="software-section__text">Computer Vision</li>
            <li className="software-section__text">Natural Langiage Processing</li>
          </ul>
          <p className="software-section__text">
            Наша команда состоит из опытных преподавателей, магистрантов и докторантов SDU. Также
            выпусники университета, имеющие большой опыт разработки, консультируют и курируют
            Технопарк в разработке продуктов.
          </p>
          <p className="software-section__text">
            Студенты бакалавриата могут получить промышленный опыт разработки программного
            обеспечения, присоединившись к команде Технопарка.
          </p>
        </div>
      </div>
    </div>
  );
};
