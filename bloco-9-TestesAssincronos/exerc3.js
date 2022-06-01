const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('olá should be equal to OLA', (done) => {
  uppercase('ola', (str) => {
    try {
      expect(str).toBe('OLA');
      done();
    } catch (error) {
      done(error);
    }
  })
});