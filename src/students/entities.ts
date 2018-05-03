import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from 'typeorm'
import { IsString, IsBoolean, IsDateString } from 'class-validator'
import { Batch } from '../batch/entities'
import { Evaluation } from '../evaluation/entities'



@Entity()
export class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  studentName: string

  @IsString()
  @Column('text')
  image: string

  @OneToMany(() => Evaluation, evaluation => evaluation.student, {eager: true})
  evaluation: Evaluation[]

  @ManyToOne(_ => Batch, batch => batch.students,{onDelete: "CASCADE"})
  batch: Batch

  }
