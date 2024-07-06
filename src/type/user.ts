export enum EGender {
  M = "M",
  F = "F",
}

export interface IUserProfile {
  phone: string;
  password: string;
  fullname: string;
  gender: EGender;
  height: string;
  weight: string;
  age: string;
  calo?: string;
}
