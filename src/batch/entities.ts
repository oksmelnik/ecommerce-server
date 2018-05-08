import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany} from 'typeorm'
import { IsString, IsBoolean, IsDateString } from 'class-validator'
import { Student } from '../students/entities'

@Entity()
export class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  batchName: string

  @Column('date', { name: 'sdate' })
  startDate: Date

  @Column('date', { name: 'edate' })
  endDate: Date

  @OneToMany(() => Student, student => student.batch, {eager: true})
  students: Student[]

  }
