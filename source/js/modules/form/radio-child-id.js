import changeRequiredFields from './change-required-fields';

const form = document.querySelector(`.js-submit-documents-form`);
const formChildwithPassportClass = `submit-documents__form--child-with-passport`;
let isEventListenerExists = false;

const radioChildIDAction = () => {
  const childIDRadioInputs = document.querySelectorAll(`.submit-documents__patient-id-radio input`);

  if (childIDRadioInputs.length && form) {
    form.classList.remove(formChildwithPassportClass);
    const childIDRadioHandler = (evt) => {
      if (evt.target.value === `passport`) {
        form.classList.add(formChildwithPassportClass);
        changeRequiredFields(`passport`);
      } else if (evt.target.value === `birthСertificate`) {
        form.classList.remove(formChildwithPassportClass);
        changeRequiredFields(`birthСertificate`);
      }
    };

    if (!isEventListenerExists) {
      childIDRadioInputs.forEach((el) => {
        el.addEventListener(`click`, childIDRadioHandler);
        isEventListenerExists = true;
      });
    }
  }
};

export default radioChildIDAction;
