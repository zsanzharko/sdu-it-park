import { useEffect, useState } from 'react';

import { IContactsBlock } from '../../utils/types';
import { AddressBlock } from '../../components/AddressBlock';
import { LocationIcon } from '../../assets/icons/LocationIcon';
import { RoomIcon } from '../../assets/icons/RoomIcon';
import { PhoneIcon } from '../../assets/icons/PhoneIcon';

import './style.scss';

export const AddressContainer: React.FC = () => {
  const initialContacts: IContactsBlock = {
    locationPlace:
      'Алматинская область, Kарасайский район. 040900, город Каскелен, ул. Абылай хана, 1/1',
    sectionPlace: 'block 5, number 69',
    phoneNumberLocation: '8777-777-77-77',
  };
  const [contacts, setContacts] = useState<IContactsBlock>(initialContacts);

  const fetchData = async () => {
    const res = await fetch('http://185.4.180.23:8000/api/v1/general/website/place');
    if (res.ok) {
      const data = await res.json();
      setContacts(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="address-container">
      <AddressBlock text={contacts.locationPlace} image={<LocationIcon />} />
      <div className="address-container-small">
        <AddressBlock text={contacts.sectionPlace} image={<RoomIcon />} />
        <AddressBlock text={contacts.phoneNumberLocation} image={<PhoneIcon />} />
      </div>
    </div>
  );
};
