import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer';
import { MinLength, IsString, IsEmail } from 'class-validator';
import { Evaluation } from '../evaluation/entities'
import * as bcrypt from 'bcrypt'


@Entity()
export class Teacher extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @IsEmail()
  @Column('text')
  email: string

  @IsString()
  @MinLength(2)
  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }

  @OneToMany(() => Evaluation, evaluation => evaluation.teacher, {eager: true})
  evaluation: Evaluation[]

}
