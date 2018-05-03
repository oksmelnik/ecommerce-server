import {
JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
Body, Patch
} from 'routing-controllers'
import { Student} from './entities'
import { Batch } from '../batch/entities'
export const baseUrl = 'http://localhost:4001'


@JsonController()
export default class StudentController {

  @Get('/students/:id([0-9]+)')
    @HttpCode(201)
    getQuiz(
      @Param('id') studentId: number
    ) {
     return Student.findOneById(studentId)
    }

     @Post("/batch")
     @HttpCode(201)
     async create(
     @Body() batch: Batch
    ) {
      const entity = await Batch.create(batch).save();

     return entity;
   }

 @Post("/student")
 @HttpCode(201)
 async createStudent(
 @Body() {studentName, image, batchId}
) {
  const nBatch = await Batch.findOneById(batchId)
  if(!nBatch) throw new BadRequestError("Class doesn't exist.")
  const entity = await Student.create({
    studentName: studentName,
    image: image,
    batch: nBatch
 }).save();

 return entity;
}
}
