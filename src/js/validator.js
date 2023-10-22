export default class Validator {
  constructor(userName) {
      this.userName = userName;
  }

  validateUsername() {
      return /^[a-z][\w-]+[a-z]$/i.test(this.userName) && !/\d{4,}/.test(this.userName);
  }
}
