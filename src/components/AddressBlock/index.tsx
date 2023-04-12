import React from 'react';
import './style.scss';

interface IAddressBlock {
  text: string;
  image: React.ReactNode;
}

export const AddressBlock: React.FC<IAddressBlock> = ({ text, image }) => {
  return (
    <div className="address-block">
      {image}
      <p>{text}</p>
    </div>
  );
};
