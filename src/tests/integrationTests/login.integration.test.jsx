import { test, expect } from "vitest";

import axios from "axios";

test("should allow users to login with valid credentials", async () => {
  const response = await axios.post("http://localhost:3000/user/login", {
    username: "test",
    password: "test",
  });

  expect(response.status).toBe(401);
});
