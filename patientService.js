const username = "coalition";
const password = "skills-test";
const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);
const headers = {
  Authorization: `Basic ${encodedCredentials}`,
  "Content-Type": "application/json",
};
export const fetchData = (url) => {
  return $.ajax({
    url: url,
    method: "GET",
    headers: headers,
    dataType: "json",
  });
};
