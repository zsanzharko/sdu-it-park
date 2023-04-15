export interface IContactSlide {
  id: number;
  photo: string;
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

export interface IActualPagePost {
  id: number;
  title: string;
  tags: {
    id: number;
    tagName: string;
    postList: string[];
  }[];
  content: string;
  createdDate: string;
  creatorId: number;
  comment: {
    messageId: number;
    repliedMessageId: number;
    post: string;
    text: string;
    creatorId: number;
    createdDate: string;
  }[];
}
