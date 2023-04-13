export interface IContactSlide {
  url: string;
  name: string;
  role: string;
  mobile: string;
  id: number;
}

export interface IContactsBlock {
  address: string;
  room: string;
  number: string;
}

export interface ITeamSlide {
  id: number;
  type: 'STUDENT' | 'EMPLOYEE';
  photo: string;
  fullName: string;
}
