import radioChildIDAction from './radio-child-id';
import changeRequiredFields from './change-required-fields';

const form = document.querySelector(`.js-submit-documents-form`);
const patientCategorySelectInput = document.querySelector(`.js-category input`);
const formClass = `submit-documents__form`;
const formModes = [`submit-documents__form--adult`, `submit-documents__form--child`];
const selectOptions = {
  'Гражданин РФ, взрослый': `adult`,
  'Гражданин РФ, не взрослый': `child`,
  'Не гражданин РФ, взрослый': `adult`,
  'Не гражданин РФ, не взрослый': `child`,
};

const setFormMode = () => {
  if (patientCategorySelectInput) {
    const newInputValue = patientCategorySelectInput.value;
    const newFormCalss = `${formClass}--${selectOptions[newInputValue]}`;
    formModes.forEach((el) => {
      form.classList.remove(el);
    });
    changeRequiredFields(selectOptions[newInputValue]);
    form.classList.add(newFormCalss);
    if (selectOptions[newInputValue] === `child`) {
      radioChildIDAction();
    }
  }
};

export default setFormMode;
