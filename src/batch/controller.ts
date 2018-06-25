import {
JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
Body, Patch
} from 'routing-controllers'
import { Batch } from './entities'
export const baseUrl = 'http://localhost:4001'

const x = [
  {"id": 1,
  "batchName": "Name",
  "startDate": "2017-08-22",
  "endDate": "2017-08-22"}
]
const b = JSON.stringify(x)

@JsonController()
export default class BatchController {

  @Get("/batches")
  @HttpCode(200)
  async allBatches() {
    return  {b}
  }

  @Get('/batches/:id([0-9]+)')
  @HttpCode(200)
  getQuiz(
    @Param('id') batchId: number
  )
  {
    return Batch.findOneById(batchId)
  }

   @Post("/batches")
   @HttpCode(201)
   async create(
     @Body() batch: Batch
   ) {
     const entity = await Batch.create(batch).save()
     return entity
   }
 }
