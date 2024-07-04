export const renderPatients = (data, container) => {
  data.forEach((patient) => {
    const { name, gender, age, profile_picture } = patient;

    const patientDiv = $("<div>").addClass("patient");

    const patientDetailsDiv = $("<div>").addClass(
      "d-flex gap-4 patient-details"
    );

    const avatar = $("<img>")
      .addClass("avatar")
      .attr("src", profile_picture)
      .attr("alt", `${name}'s profile picture`);
    patientDetailsDiv.append(avatar);

    const patientDetails = $("<div>");
    const nameP = $("<p>").addClass("name").text(name);
    patientDetails.append(nameP);

    const genderAgeSpan = $("<span>").text(`${gender}, ${age}`);
    patientDetails.append(genderAgeSpan);

    patientDetailsDiv.append(patientDetails);

    const moreBtn = $("<img>")
      .addClass("more-btn")
      .attr("src", "./assets/more_vert.png")
      .attr("alt", "More options");
    patientDiv.append(patientDetailsDiv).append(moreBtn);

    $(container).append(patientDiv);
  });
};

export const renderPatientDetails = (patientData, container) => {
  const patient = patientData.find(
    (patient) => patient.name === "Jessica Taylor"
  );

  console.log("Patient Data:", patient);
  const {
    name,
    profile_picture,
    date_of_birth,
    gender,
    phone_number,
    emergency_contact,
    insurance_type,
    lab_results,
  } = patient;

  $(container).empty();

  const $patientInfo = $('<div class="col d-flex-col pat-info"></div>');

  const $aside = $('<aside class="mb-5"></aside>');
  $aside.append(`
      <img class="pro-pic" src="${profile_picture}" alt="patient-profile">
      <h2>${name}</h2>
      <div class="align-self-start patient-more-details">
        <div class="date_of_birth">
          <img src="./assets/BirthIcon.png" alt="calendar">
          <span>
            <p>Date of Birth</p>
            <p>${date_of_birth}</p>
          </span>
        </div>
        <div class="gender">
          <img src="./assets/FemaleIcon.png" alt="calendar">
          <span>
            <p>Gender</p>
            <p>${gender}</p>
          </span>
        </div>
        <div class="contact">
          <img src="./assets/PhoneIcon.png" alt="contact">
          <span>
            <p>Contact Info.</p>
            <p>${phone_number}</p>
          </span>
        </div>
        <div class="emergency-contact">
          <img src="./assets/PhoneIcon.png" alt="emergency-contact">
          <span>
            <p>Emergency Contact.</p>
            <p>${emergency_contact}</p>
          </span>
        </div>
        <div class="insurance-provider">
          <img src="./assets/InsuranceIcon.png" alt="insurance-provider">
          <span>
            <p>Insurance Provider</p>
            <p>${insurance_type}</p>
          </span>
        </div>
      </div>
      <button type="submit">Show All Information</button>
    `);

  const $labResults = $("<aside></aside>");
  const $labsContainer = $(
    `<div class="align-self-start d-flex-col lab-container w-100">`
  );

  $labsContainer.append("<h2>Lab Results</h2>");
  lab_results.forEach((result) => {
    $labsContainer.append(`
        <div class="d-flex justify-content-between p-1 align-items-center w-100">
          <p class="mb-0">${result}</p>
          <img src="./assets/download.png" alt="download-button">
        </div>
    `);
  });
  $labResults.append($labsContainer);

  // Appending both sections to the main container
  $patientInfo.append($aside, $labResults);
  $(container).append($patientInfo);
};
