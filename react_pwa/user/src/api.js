const API_URL = "http://localhost:8000";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    let stringifiedData = JSON.stringify(data);
    document.querySelector("#root").innerHTML = stringifiedData;
    localStorage.setItem("root", stringifiedData);
  });
