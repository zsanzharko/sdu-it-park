export interface IContactSlide {
  id: number;
  photo: string;
  fullName: string;
  position: string;
  phoneNumber: string;
  email: string;
}

export interface IContactsBlock {
  location: string;
  section: string;
  phoneNumber: string;
}

export interface ITeamSlide {
  id: number;
  type: 'STUDENT' | 'EMPLOYEE';
  photo: string;
  fullName: string;
}

export interface IActualPagePost {
  id: number;
  photoList: {
    id: number;
    contentByte: string;
    contentType: string;
  }[];
  title: string;
  tags: string[];
  content: {
    contentByte: string;
    contentType: string;
  };
  createdDate: string;
  creatorId: number;
}

export interface IStore {
  contactsPeopleData: {
    people: IContactSlide[];
    pending: boolean;
    isNew: boolean;
  };
  contactsAddressesData: {
    addresses: IContactsBlock;
    isNew: boolean;
  };
  aboutTeamData: {
    team: ITeamSlide[];
    isNew: boolean;
    pending: boolean;
  };
  actualPostsData: {
    posts: IActualPagePost[];
    isNew: boolean;
    pending: boolean;
  };
}
