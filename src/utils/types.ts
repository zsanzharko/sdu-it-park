export interface IContactSlide {
  url: string;
  name: string;
  role: string;
  mobile: string;
  id: number;
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
