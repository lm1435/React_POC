function isEmpty(value) { return value.length !== 0; }
function isValidEmail(value) {
  return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(value);
}
export default {
  errorObj(target) {
    const errors = {};
    switch (target.name) {
      case 'Email':
        errors[target.name] = isValidEmail(target.value) && isEmpty(target.value);
        break;
      default:
        errors[target.name] = isEmpty(target.value);
    }
    return errors;
  },
};
