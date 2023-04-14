export interface IContactSlide {
  id: number;
  photo: string[];
  fullName: string;
  position: string;
  phoneNumber: string;
  email: string;
}

export interface IContactsBlock {
  locationPlace: string;
  sectionPlace: string;
  phoneNumberLocation: string;
}

export interface ITeamSlide {
  id: number;
  type: 'STUDENT' | 'EMPLOYEE';
  photo: string;
  fullName: string;
}
