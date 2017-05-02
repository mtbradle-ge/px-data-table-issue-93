module.exports = {
  verbose: false,
  persistent: true,
  plugins: {
    local: {
      browsers: ['chrome']
    },
    sauce: {
      disabled: true
    }
  },
  suites: [
    'test/index.html',
  ]
};
