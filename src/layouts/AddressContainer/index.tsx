import { useEffect, useState } from 'react';

import { IContactsBlock } from '../../utils/types';
import { variables } from './index.contacts';
import { AddressBlock } from '../../components/AddressBlock';

import './style.scss';
import { LocationIcon } from '../../assets/icons/LocationIcon';
import { RoomIcon } from '../../assets/icons/RoomIcon';
import { PhoneIcon } from '../../assets/icons/PhoneIcon';

export const AddressContainer: React.FC = () => {
  const [contacts, setContacts] = useState<IContactsBlock>(variables);

  useEffect(() => {
    // TODO: add fetch request to get people
    setContacts(variables);
  }, []);
  return (
    <div className="address-container">
      <AddressBlock text={contacts.address} image={<LocationIcon />} />
      <div className="address-container-small">
        <AddressBlock text={contacts.room} image={<RoomIcon />} />
        <AddressBlock text={contacts.number} image={<PhoneIcon />} />
      </div>
    </div>
  );
};
