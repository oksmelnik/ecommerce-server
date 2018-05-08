import 'jest'
import * as request from 'supertest'
import app from '../app'
import setupDb from '../db'

beforeAll(async () => {
  await setupDb()
})

describe('get evaluations', () => {
  test('/evas', async () => {
    await request(await app.callback())
    .get('/evas')
    .set('Accept', 'application/json')
    .expect(200)
  })
})
