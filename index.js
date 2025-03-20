document.querySelector("form").addEventListener("submit", myHospital);
let HospArr = JSON.parse(localStorage.getItem("hospital")) || [];

function myHospital(e) {
  e.preventDefault();
  let doctorName = document.querySelector("#name").value;
  let doctorID = document.querySelector("#docID").value;
  let specialization = document.querySelector("#dept").value;
  let experience = document.querySelector("#exp").value;
  let email = document.querySelector("#email").value;
  let mobileNumber = document.querySelector("#mbl").value;

  let doctorObj = {
    doctorName,
    doctorID,
    specialization,
    experience,
    email,
    mobileNumber,
  };

  console.log(doctorObj);
  HospArr.push(doctorObj);
  localStorage.setItem("hospital", JSON.stringify(HospArr));
  displayTable(HospArr);
}

function displayTable(HospArr) {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  HospArr.forEach((el, i) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.doctorName;
    let td2 = document.createElement("td");
    td2.innerText = el.doctorID;
    let td3 = document.createElement("td");
    td3.innerText = el.specialization;
    let td4 = document.createElement("td");
    td4.innerText = el.experience;
    let td5 = document.createElement("td");
    td5.innerText = el.email;
    let td6 = document.createElement("td");
    td6.innerText = el.mobileNumber;
    let td7 = document.createElement("td");
    td7.innerText = "Doctor";
    let td8 = document.createElement("button");
    td8.innerText = "delete";
    td8.style.cursor = "pointer";
    td8.addEventListener("click", function () {
      HospArr.splice(i, 1);
      localStorage.setItem("hospital", JSON.stringify(HospArr));
      displayTable(HospArr);
    });
    row.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(row);
  });
}


