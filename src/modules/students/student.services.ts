import { Student } from './Student.interface';
import { studentModel } from './student.model';

const createStudentDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentDB = async () => {
  const result = await studentModel.find();
  return result;
};
const getSingleSudentDB = async (id: string) => {
  const result = await studentModel.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentDB,
  getAllStudentDB,
  getSingleSudentDB,
};
