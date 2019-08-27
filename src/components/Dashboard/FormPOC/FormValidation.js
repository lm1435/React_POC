export default {
  isEmpty(value) { return value.length !== 0; },
  isUgly(value) { return value !== ''; },
  isValidEmail(value) {
    return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(value);
  },
};
