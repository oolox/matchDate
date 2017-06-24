
class ForgotController {
  constructor($log, $mdToast, $state) {
    this.$log = $log;
    this.$mdToast = $mdToast;
    this.$state = $state;

    this.$log.log('<ForgotController>');
    this.logUser = {};
  }

  sendEmail() {
    this.$log.log('<sendEmail>');
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent('Reset Email Sent')
        .position('top center')
        .hideDelay(3000)
    );
    this.$state.go('login');
  }

  back() {
    this.$state.go('login');
  }
}

export const Forgot = {
  template: require('./Forgot.html'),
  controller: ForgotController
};
