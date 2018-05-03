import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from 'typeorm'
import { IsString, IsBoolean, IsDateString } from 'class-validator'
import { Student } from '../students/entities'

@Entity()
export class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  batchName: string



  @OneToMany(() => Student, student => student.batch, {eager: true})
  students: Student[]

  }
