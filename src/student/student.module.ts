import { StudentResolver } from './student.resolver';
import { Student } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
