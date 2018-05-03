import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from 'typeorm'
import { IsString, IsBoolean, IsDateString } from 'class-validator'
import { Student } from '../students/entities'
import { Teacher } from '../teachers/entities'

export type Symbol = 'r' | 'y' | 'g'

@Entity()
export class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('date', { name: 'rdate' })
  date: Date

  @IsString()
  @Column('text')
  remark: string

  @Column('char', {length:1})
  color: Symbol

  @ManyToOne(_ => Student, student => student.evaluation,{onDelete: "CASCADE"})
  student: Student

  @ManyToOne(_ => Teacher, teacher => teacher.evaluation,{onDelete: "CASCADE"})
  teacher: Teacher
  }
