const phoneInputs = document.querySelectorAll(`.js-tel input`);

const validatePhone = () => {
  if (phoneInputs.length) {
    phoneInputs.forEach((el) => {
      const input = el;
      // eslint-disable-next-line no-undef
      return new IMask(input, {
        mask: `+{7}(000)000-00-00`
      });
    });
  }
};

export default validatePhone;
