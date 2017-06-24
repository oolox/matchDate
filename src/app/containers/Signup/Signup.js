
class SignupController {
  constructor($state, $log) {
    this.testVal = 'TESTVAL';
    this.$log = $log;
    this.$state = $state;
    this.$log.log('<SignupController>');
  }

  back() {
    this.$log.log('<SignupController>');
    this.$state.go('login');
  }
}

export const Signup = {
  template: require('./Signup.html'),
  controller: SignupController
};
