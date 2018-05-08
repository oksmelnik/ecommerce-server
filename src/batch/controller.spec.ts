import 'jest'
import * as request from 'supertest'
import app from '../app'
import setupDb from '../db'

const batch = {
  "batchName": "Name",
  "startDate": "2017-08-22T06:11:00.000Z",
  "endDate": "2017-08-22T06:11:00.000Z"
}

beforeAll(async () => {
  await setupDb()
})

describe('get batches', () => {
  test('/batches', async () => {
    await request(await app.callback())
    .get('/batches')
    .set('Accept', 'application/json')
    .expect(200)
  })
})

describe('post batch', () => {
  test('/batches', async () => {
    await request(await app.callback())
    .post('/batches')
    .set('Accept', 'application/json')
    .send(batch)
    .expect(function(res) {
      res.body.id = 'someid'
    })
    .expect(201, {
      "batchName": "Name",
      "id": 'someid',
      "startDate": "2017-08-22T06:11:00.000Z",
      "endDate": "2017-08-22T06:11:00.000Z"
    })
  })
})
