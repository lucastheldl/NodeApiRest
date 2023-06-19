import { afterAll, beforeAll, expect, test } from "vitest";
import request from "supertest";
import { app } from "../src/app";

beforeAll(async () => {
  await app.ready();
});

afterAll(async () => {
  await app.close();
});

test("User can create a new transaion", async () => {
  const response = await request(app.server).post("/transactions").send({
    title: "New Transaction",
    amount: 5000,
    type: "credit",
  });

  expect(response.statusCode).toEqual(201);
});
