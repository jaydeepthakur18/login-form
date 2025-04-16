
const nameInput = document.getElementById("name");
const middleNameInput = document.getElementById("middle");
const lastNameInput = document.getElementById("lastName");
const DOBInput = document.getElementById("DOB");
const numberInput = document.getElementById("number");
const addressInput = document.getElementById("address");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");
const countryInput = document.getElementById("country");
const ZIPInput = document.getElementById("ZIP");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const languageInput = document.getElementById("language");
const startDateInput = document.getElementById("startDate");
const commentInput = document.getElementById("comment");

const form = document.getElementById("studentForm");
const tableBody = document.getElementById("table-body");

let data = {
  name: "",
  middleName: "",
  lastName: "",
  DOB: "",
  number: "",
  address: "",
  city: "",
  state: "",
  country: "",
  ZIP: "",
  email: "",
  course: "",
  language: "",
  startDate: "",
  comment: "",
};
console.log("before register", data);
function registerStudentDetails(event) {
  event.preventDefault();
  console.log(event);

  /*if(data.name === "" || data.number === "" ){
    alert("Please enter your name");
    return
  }*/

  data.name = nameInput.value;
  data.middleName = middleNameInput.value;
  data.lastName = lastNameInput.value;
  data.DOB = DOBInput.value;
  data.number = numberInput.value;
  data.address = addressInput.value;
  data.city = cityInput.value;
  data.state = stateInput.value;
  data.country = countryInput.value;
  data.ZIP = ZIPInput.value;
  data.email = emailInput.value;
  data.course = courseInput.value;
  data.language = languageInput.value;
  data.startDate = startDateInput.value;
  data.comment = commentInput.value;

  console.log("on register", data);

  tableBody.innerHTML += ` <tr>
                    <td>${data.name}</td>
                    <td>${data.number}</td>
                    <td>${data.city}</td>
                    <td>${data.address}</td>
                    <td>${data.DOB}</td>
                    <td>${data.course}</td>
                    <td>${data.language}</td>
                    <td>${data.startDate}</td>
                </tr>`;
}
form.addEventListener("submit", registerStudentDetails);


