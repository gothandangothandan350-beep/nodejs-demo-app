
const test = require("node:test");
const assert = require("node:assert/strict");

test("application has the correct response message", async () => {
  const response = await fetch("http://localhost:3000");

  assert.equal(response.status, 200);

  assert.equal(
    await response.text(),
    "Hello! My Node.js CI/CD app is running."
  );
});
