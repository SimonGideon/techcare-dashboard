const username = "coalition";
const password = "skills-test";
const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);

const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
const headers = {
  Authorization: `Basic ${encodedCredentials}`,
  "Content-Type": "application/json",
};

fetch(url, {
  method: "GET",
  headers: headers,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("API Data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
