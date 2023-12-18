const mongoose = require("mongoose");
const request = require("supertest");
const {
  beforeAll,
  afterAll,
  expect,
  describe,
  test,
} = require("@jest/globals");
const app = require("../../app");

const { DB_MONGO } = process.env;

describe("test login", () => {
  beforeAll(async () => {
    await mongoose.connect(DB_MONGO);
  });
  const user = {
    email: "andrey@gmail.com",
    password: "123456",
  };
  test("the response must have a status code of 200, return a token and user, and user object should be returned with 2 fields email and subscription with the String data type", async () => {
    const { status, body } = await request(app).post("/users/login").send(user);
    expect(status).toBe(200);
    expect(body.token).toBeTruthy();
    expect(body.user).toBeInstanceOf(Object);
    expect(typeof body.user.email).toBe("string");
    expect(typeof body.user.subscription).toBe("string");
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });
});
