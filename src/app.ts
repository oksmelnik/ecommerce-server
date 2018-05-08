import 'reflect-metadata'
import {createKoaServer, Action, BadRequestError} from "routing-controllers"

import StudentController from './students/controller'
import BatchController from './batch/controller'
import EvaController from './evaluation/controller'
import LoginController from './logins/controller'
import UserController from './teachers/controller'
import { verify } from './jwt'
import {Teacher} from './teachers/entities'



export default createKoaServer({
  controllers: [
    StudentController,
    BatchController,
    EvaController,
    LoginController,
    UserController
  ],
  authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization
    if (header && header.startsWith('Bearer ')) {
      const [ , token ] = header.split(' ')

      try {
        return !!(token && verify(token))
      }
      catch (e) {
        throw new BadRequestError(e)
      }
    }

    return false
  },
  currentUserChecker: async (action: Action) => {
    const header: string = action.request.headers.authorization
    if (header && header.startsWith('Bearer ')) {
      const [ , token ] = header.split(' ')

      if (token) {
        const {id} = verify(token)
        return Teacher.findOneById(id)
      }
    }
    return undefined
  }
})
