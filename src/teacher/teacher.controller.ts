import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDTO } from './dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDTO[] {
    return 'All teachers';
  }
  @Get(':teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDTO {
    return `Teacher with id ${teacherId}`;
  }
}
