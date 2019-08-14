const form = document.querySelector(".application");
const database = firebase.database().ref();

const firstNameElement = document.getElementById("first-name");
const lastNameElement = document.getElementById("last-name");
const emailElement = document.getElementById("email");
const universityElement = document.getElementById("university");
const reasonElement = document.getElementById("reason");

form.addEventListener('submit', function(event) { 
    event.preventDefault();

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const email = emailElement.value;
    const university = universityElement.value;
    const reason = reasonElement.value;
    
    firstNameElement.value = "";
    lastNameElement.value = "";
    emailElement.value = "";
    universityElement.value = "";
    reasonElement.value = "";

    const application = {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        EMAIL: email,
        UNIVERSITY: university,
        REASON: reason,
    };
    alert('application submitted!');
    database.push(application);
});
