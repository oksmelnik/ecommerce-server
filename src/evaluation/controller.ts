import {
JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
Body, Patch
} from 'routing-controllers'
import { Student } from '../students/entities'
import { Teacher } from '../teachers/entities'
import { Evaluation } from './entities'
export const baseUrl = 'http://localhost:4001'



@JsonController()
export default class EvaController {

  @Get("/evas")
  @HttpCode(200)
  async allEva() {
    const eva = await Evaluation.find()
    return { eva }
  }

 @Post("/:id([0-9]+)/eva")
 @HttpCode(201)
 async createEva(
 @Param('id') stuId: number,
 @Body() {color, date, remark}
) {
  const student = await Student.findOneById(stuId)
  if(!student) throw new BadRequestError("Student doesn't exist.")
  const entity = await Evaluation.create({
    date: date,
    remark: remark,
    color: color,
    student: student
  }).save()
  return entity
}
}
