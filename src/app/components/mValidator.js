class ValidatorController {
  /** @ngInject */
  constructor($log) {
    this.$log = $log;
  }
}

export const Validator = {
  template: require('./mValidator.html'),
  controller: ValidatorController,
  bindings: {
    valid: '='
  }
};
