import { JsonController, Post, Param, Get, Body, Authorized, HttpCode } from 'routing-controllers'
import {Teacher} from './entities';

@JsonController()
export default class UserController {

  @Post('/teachers')
  async signup(
    @Body() teacher: Teacher
  ) {
    const {password, ...rest} = teacher
    const entity = Teacher.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }

  @Authorized()
  @Get('/users/:id([0-9]+)')
  getUser(
    @Param('id') id: number
  ) {
    return Teacher.findOneById(id)
  }


  @Get('/users')
  allUsers() {
    return Teacher.find()
  }
}
