export type Guardain = {
  fatherName: string;
  fatherOccopation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccopation: string;
  motherContactNo: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGuardain = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: number;
  name: UserName;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloadGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmentAddress: string;
  guraindain: Guardain;
  localGuradain: LocalGuardain;
  profileImg?: string;
  isActive: 'active' | 'inActive';
};
