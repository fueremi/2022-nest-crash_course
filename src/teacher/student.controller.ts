import { Controller, Get, Param, Put } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { FindStudentsResponseDTO, StudentsResponseDTO } from '../student/dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private studentService: StudentService) {}
  @Get()
  getStudents(
    @Param('teacherId') teacherId: string,
  ): FindStudentsResponseDTO[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put(':studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentsResponseDTO {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
