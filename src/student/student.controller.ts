import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateStudentDTO,
  FindStudentsResponseDTO,
  StudentsResponseDTO,
  UpdateStudentDTO,
} from './dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Get()
  getStudents(): FindStudentsResponseDTO[] {
    return this.studentService.getStudents();
  }
  @Get(':studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentsResponseDTO {
    return this.studentService.getStudentById(studentId);
  }
  @Post()
  createStudent(@Body() body: CreateStudentDTO): StudentsResponseDTO {
    return this.studentService.createStudent(body);
  }
  @Put(':studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDTO,
  ) {
    return this.studentService.updateStudent(studentId, body);
  }
}
