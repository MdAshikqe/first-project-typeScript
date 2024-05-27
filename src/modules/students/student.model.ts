import { Schema, model } from 'mongoose';
import {
  Guardain,
  LocalGuardain,
  Student,
  UserName,
} from './Student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const guraindainSchema = new Schema<Guardain>({
  fatherName: { type: String, required: true },
  fatherOccopation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String, required: true },
  motherOccopation: { type: String },
  motherContactNo: { type: String },
});
const localGuradainSchema = new Schema<LocalGuardain>({
  name: { type: String, required: true },
  occupation: { type: String },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: Number, required: true },
  name: userNameSchema,
  email: { type: String, required: true },
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloadGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  parmentAddress: { type: String, required: true },
  guraindain: guraindainSchema,
  localGuradain: localGuradainSchema,
});

// 3. Create a Model.
export const studentModel = model<Student>('Student', studentSchema);
