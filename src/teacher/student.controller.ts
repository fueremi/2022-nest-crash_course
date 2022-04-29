import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentsResponseDTO, StudentsResponseDTO } from '../student/dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(
    @Param('teacherId') teacherId: string,
  ): FindStudentsResponseDTO[] {
    return `All student that belong to the teacher with id ${teacherId}`;
  }

  @Put(':studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentsResponseDTO {
    return `Update student with id ${studentId} teacher with id ${teacherId}`;
  }
}
