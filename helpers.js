const getUserByEmail = (email, users) => {
  for (const user in users) {
    if (users[user].email === email) return { valid: true, user };
  }
  return { valid: false };
};
const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 8);
};
const urlsForUser = (id, urlDatabase) => {
  let urls = {};
  for (const shortURL in urlDatabase) {
    if (urlDatabase[shortURL].userID === id) {
      urls[shortURL] = urlDatabase[shortURL].longURL;
    }
  }
  return urls;
};
module.exports = { getUserByEmail, generateRandomString, urlsForUser };