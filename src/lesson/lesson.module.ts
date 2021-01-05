import { StudentModule } from './../student/student.module';
import { Lesson } from './lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonService } from './lesson.service';
import { LessonResolver } from './lesson.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [StudentModule, TypeOrmModule.forFeature([Lesson])],
  controllers: [],
  providers: [LessonService, LessonResolver],
})
export class LessonModule {}
