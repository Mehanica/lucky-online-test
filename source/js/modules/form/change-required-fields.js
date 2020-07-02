const form = document.querySelector(`.js-submit-documents-form`);

const requiredPatientFields = [`lastNameAdult`, `firstNameAdult`, `partonymAdult`, `birthDateAdult`, `emailAdult`, `phoneAdult`, `passportSeriesAdult`, `passportNumberAdult`, `issueDepartmentAdult`, `issueDepartmentCodeAdult`, `issueDateAdult`, `cityAdult`, `streetAdult`, `houseAdult`];
const requiredChildWithPassportFields = [`lastNameChild`, `firstNameChild`, `partonymChild`, `birthDateChild`, `passportSeriesChild`, `passportNumberChild`, `issueDepartmentChild`, `issueDepartmentCodeChild`, `issueDateChild`, `cityChild`, `streetChild`, `houseChild`, `lastNameParent`, `firstNameParent`, `partonymParent`, `birthDateParent`, `emailParent`, `phoneParent`, `passportSeriesParent`, `passportNumberParent`, `issueDepartmentParent`, `issueDepartmentCodeParent`, `issueDateParent`, `cityParent`, `streetParent`, `houseParent`];
const requiredChildWithSertificateFields = [`lastNameChild`, `firstNameChild`, `partonymChild`, `birthDateChild`, `birthSertificateSeries`, `birthSertificateNumber`, `issueDepartmentBirthSertificate`, `issueDateBirthSertificate`, `cityChild`, `streetChild`, `houseChild`, `lastNameParent`, `firstNameParent`, `partonymParent`, `birthDateParent`, `emailParent`, `phoneParent`, `passportSeriesParent`, `passportNumberParent`, `issueDepartmentParent`, `issueDepartmentCodeParent`, `issueDateParent`, `cityParent`, `streetParent`, `houseParent`];
// const requiredParentFields = [`lastNameParent`, `firstNameParent`, `partonymParent`, `birthDateParent`, `emailParent`, `phoneParent`, `passportSeriesParent`, `passportNumberParent`, `issueDepartmentParent`, `issueDepartmentCodeParent`, `issueDateParent`, `cityParent`, `streetParent`, `houseParent`];

const changeRequiredFields = (mode) => {
  if (mode === `adult`) {
    changeFields(requiredPatientFields);
  } else if (mode === `child`) {
    changeFields(requiredChildWithSertificateFields);
  } else if (mode === `passport`) {
    changeFields(requiredChildWithPassportFields);
  } else if (mode === `birthСertificate`) {
    changeFields(requiredChildWithSertificateFields);
  }
};

const changeFields = (newReqiredFields) => {
  const currentlyRequiredFields = form.querySelectorAll(`input[required="required"]`);
  if (currentlyRequiredFields.length) {
    currentlyRequiredFields.forEach((el) => {
      el.removeAttribute(`required`);
    });
  }
  newReqiredFields.forEach((el) => {
    if (form.querySelector(`input[name="${el}"]`)) {
      form.querySelector(`input[name="${el}"]`).setAttribute(`required`, `required`);
    }
  });

};

export default changeRequiredFields;
