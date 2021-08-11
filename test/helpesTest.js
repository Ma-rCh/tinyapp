const { assert } = require('chai');

const { getUserByEmail } = require('../helpers.js');

const testUsers = {
  "userRandomID": {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur"
  },
  "user2RandomID": {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk"
  }
};

describe('getUserByEmail', () => {
  it('return a user with valid email', () => {
    const user = getUserByEmail("user@example.com", testUsers).user;
    const expectedOutput = "userRandomID";
    // Write your assert statement here
    assert.equal(user, expectedOutput);
  });
  it('return undefined if the user is not in the database', ()=>{
    const user = getUserByEmail("123@example.com", testUsers).user;
    const expectedOutput = undefined;
    assert.equal(user, expectedOutput);
  });
});