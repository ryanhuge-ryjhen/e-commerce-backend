// setup a function that accepts user object and returns userToken object
// - [] export as default
// - [] setup all the correct imports/exports and refactor existing code

const createTokenUser = (user) => {
  return { name: user.name, userId: user._id, role: user.role };
};

module.exports = createTokenUser;
