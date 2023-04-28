import { useState } from 'react';
import './style.scss';

interface IHomeInformationBlock {
  title: string;
  text: string;
  additionalText?: string;
}

export const HomeInformationBlock: React.FC<IHomeInformationBlock> = ({
  title,
  text,
  additionalText = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const addMoreText = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-information__block">
      <h3 className="home-information__block-title">{title}</h3>
      <p className="home-information__block-text">{text}</p>
      {isOpen && <p className="home-information__block-text">{additionalText}</p>}
      {additionalText && (
        <button className="home-information__block-button" type="button" onClick={addMoreText}>
          {`${isOpen ? 'скрыть текст' : 'читать дальше...'}`}
        </button>
      )}
    </div>
  );
};
