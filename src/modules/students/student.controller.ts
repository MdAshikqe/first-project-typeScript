import { Request, Response } from 'express';
import { studentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //req korbo serverce
    const result = await studentServices.createStudentDB(studentData);

    //response patabo clint ke
    res.status(200).json({
      success: true,
      message: 'Student create successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentDB();

    res.status(200).json({
      success: true,
      message: 'Student all retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleSudentDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student are retrived succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getStudent,
  getSingleStudent,
};
