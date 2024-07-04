// const username = "coalition";
// const password = "skills-test";
// const credentials = `${username}:${password}`;
// const encodedCredentials = btoa(credentials);
// const patientEntry = document.querySelector(".patients-list");
// console.log(patientEntry);

// const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
// const headers = {
//   Authorization: `Basic ${encodedCredentials}`,
//   "Content-Type": "application/json",
// };

// fetch(url, {
//   method: "GET",
//   headers: headers,
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("API Data:", data);

//     data.forEach((patient) => {
//       const { name, gender, age, profile_picture } = patient;
//       const patientDiv = document.createElement("div");
//       patientDiv.classList.add("patient");

//       const patientDetailsDiv = document.createElement("div");
//       patientDetailsDiv.classList.add("d-flex", "gap-4", "patient-details");

//       const avatar = document.createElement("img");
//       avatar.classList.add("avatar");
//       avatar.src = profile_picture;
//       patientDetailsDiv.appendChild(avatar);

//       const patientDetails = document.createElement("div");
//       const nameP = document.createElement("p");
//       nameP.classList.add("name");
//       nameP.textContent = name;
//       patientDetails.appendChild(nameP);

//       const genderAgeSpan = document.createElement("span");
//       genderAgeSpan.textContent = `${gender}, ${age} `;
//       patientDetails.appendChild(genderAgeSpan);

//       const actionBtn = document.createElement("img");
//       actionBtn.classList.add("more-btn");
//       actionBtn.src = "./assets/more_vert.png";
//       actionBtn.alt = "More options";

//       patientDetailsDiv.appendChild(patientDetails);
//       patientDiv.appendChild(patientDetailsDiv);
//       patientDiv.appendChild(actionBtn);
//       patientEntry.appendChild(patientDiv);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

import { fetchData } from "./patientService.js";
import { renderPatients } from "./dashboard.js";

const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
const patientEntry = ".patients-list";

fetchData(url)
  .done((data) => {
    console.log("API Data:", data);
    renderPatients(data, patientEntry);
  })
  .fail((error) => {
    console.error("Error fetching data:", error);
  });
