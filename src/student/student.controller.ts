import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDTO,
  FindStudentsResponseDTO,
  StudentsResponseDTO,
  UpdateStudentDTO,
} from './dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentsResponseDTO[] {
    return 'All students';
  }
  @Get(':studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentsResponseDTO {
    return `Student with id ${studentId}`;
  }
  @Post()
  createStudent(@Body() body: CreateStudentDTO): StudentsResponseDTO {
    return `Create student, data: ${JSON.stringify(body)}}`;
  }
  @Put(':studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDTO,
  ): StudentsResponseDTO {
    return `Update student with ${studentId}, changes: ${JSON.stringify(body)}`;
  }
}
