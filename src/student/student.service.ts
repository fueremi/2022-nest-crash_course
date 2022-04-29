import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { v4 as uuid } from 'uuid';
import {
  CreateStudentDTO,
  FindStudentsResponseDTO,
  StudentsResponseDTO,
  UpdateStudentDTO,
} from './dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentsResponseDTO[] {
    return this.students;
  }
  getStudentById(id: string): FindStudentsResponseDTO {
    return this.students.find((student) => student.id === id);
  }
  createStudent(payload: CreateStudentDTO): StudentsResponseDTO {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  updateStudent(id: string, payload: UpdateStudentDTO): StudentsResponseDTO {
    let updateStudent: StudentsResponseDTO;
    const updatedStudentList = this.students.map((student) => {
      if (student.id === id) {
        updateStudent = {
          id: student.id,
          ...payload,
        };
        return updateStudent;
      } else return student;
    });

    this.students = updatedStudentList;
    return updateStudent;
  }
  getStudentsByTeacherId(teacherId: string): FindStudentsResponseDTO[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }
  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentsResponseDTO {
    let updateStudent: StudentsResponseDTO;
    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updateStudent = {
          ...student,
          teacher: teacherId,
        };
        return updateStudent;
      } else return student;
    });

    this.students = updatedStudentList;
    return updateStudent;
  }
}
