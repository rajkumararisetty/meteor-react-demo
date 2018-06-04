export default class FormValidator {
  constructor(validations) {
    this.validations = validations;
  }

  // Validates all fields when submit the form
  validateForm = (formData) => {
    // start out assuming valid
    const validation = { isValid: true, errors: {} };
    Object.entries(formData).map(
      ([key, value]) => {
        let validationStatus = this.validateInput(key, value);
        if (!validationStatus.isValid) {
          validation.errors[key] =  validationStatus.message;
        }
      }
    );
    if (Object.keys(validation.errors).length > 0) {
      validation.isValid = false;
    }

    return validation;
  };

  // Validates a single field
  validateInput = (field, value) => {
    // start out assuming valid
    let validation = { isValid: true, message: '' };
    let rules = this.validations;
    let fieldRules = rules.filter((rule) => (rule.field === field));
    fieldRules.some((rule) => {
      let status = rule.method(value);
      if (status) {
        validation.isValid = false;
        validation.message = rule.message;
        return true;
      }

      return false;
    });
    return validation;
  };
}
