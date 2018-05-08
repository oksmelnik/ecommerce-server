import 'jest'
import * as request from 'supertest'
import app from '../app'
import setupDb from '../db'

beforeAll(async () => {
  await setupDb()
})

describe('BatchController', () => {
  test('/batches', async () => {
    await request(await app.callback())
    .get('/batches')
    .set('Accept', 'application/json')
    .set('x-user-roles', 'teacher')
    .expect(200)
  })
})
