
class LoginController {
  constructor($state, $log) {
    this.testVal = 'TESTVAL';
    this.$log = $log;
    this.$state = $state;
    this.$log.log('<LoginController>');
  }

  forgot() {
    this.$state.go('forgot');
  }

  signup() {
    this.$state.go('signup');
  }
}

export const Login = {
  template: require('./Login.html'),
  controller: LoginController
};
