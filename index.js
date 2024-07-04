import { fetchData } from "./patientService.js";
import { renderPatients, renderPatientDetails } from "./dashboard.js";

const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
const patientEntry = ".patients-list";
const patientDetails = ".pat-info";

fetchData(url)
  .done((data) => {
    console.log("API Data:", data);
    renderPatients(data, patientEntry);
    renderPatientDetails(data, patientDetails);
  })
  .fail((error) => {
    console.error("Error fetching data:", error);
  });
