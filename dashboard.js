// dom.js
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
