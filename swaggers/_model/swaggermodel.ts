
export interface User {
    email: string;
    firstName: string;
    lastName: string;
    loginId: string;
    phoneNumber: string;
  }
  export interface RootObject {
    message: string;
    status: boolean;
    users: User[];
  }

    export interface ISegment {
        segmentCode: string;
        segmentDesc: string;
        segmentName: string;
        segmentPrecedence: number;
    }



  
    
  

