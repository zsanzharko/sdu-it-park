import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../utils/types';
import { useAppDispatch } from '../../store/store.dispath';
import { fetchAddressesData } from '../../store/slices/contactsAddresses.slice';
import { AddressBlock } from '../../components/AddressBlock';
import { LocationIcon } from '../../assets/icons/LocationIcon';
import { RoomIcon } from '../../assets/icons/RoomIcon';
import { PhoneIcon } from '../../assets/icons/PhoneIcon';

import './style.scss';

export const AddressContainer: React.FC = () => {
  const { addresses, isNew } = useSelector((state: IStore) => state.contactsAddressesData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isNew) {
      dispatch(fetchAddressesData());
    }
  }, [dispatch, isNew]);

  return (
    <div className="address-container">
      <AddressBlock text={addresses.location} image={<LocationIcon />} />
      <div className="address-container-small">
        <AddressBlock text={addresses.section} image={<RoomIcon />} />
        <AddressBlock text={addresses.phoneNumber} image={<PhoneIcon />} />
      </div>
    </div>
  );
};
