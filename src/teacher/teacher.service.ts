import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { FindTeacherResponseDTO } from './dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  getTeachers(): FindTeacherResponseDTO[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDTO {
    return this.teachers.find((teacher) => teacher.id === teacherId);
  }
}
