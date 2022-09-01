/**
 * Run me with 'npm test'
 */
const server = require('../app');
const supertest = require('supertest');
const request = supertest;

describe("Test the root path", () => {
  test("It should respond to the GET method...", done => {
    request(server)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
  })
})

describe("Test the favorites path", () => {
  test("It should respond to the GET method...", done => {
    request(server)
      .get('/favorites')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
  })
})

describe("Test the form path", () => {
  test("It should respond to the GET method...", done => {
    request(server)
      .get('/form')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
  })
})

describe("Test the home path", () => {
  test("It should respond to the GET method...", done => {
    request(server)
      .get('/home')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
  })
})

describe("Test the list path", () => {
  test("It should respond to the GET method...", done => {
    request(server)
      .get('/list')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
  })
})