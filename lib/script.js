const form = document.querySelector(".application");
const database = firebase.database().ref();
const firstNameElement = document.getElementById("first-name");
const lastNameElement = document.getElementById("last-name");
const emailElement = document.getElementById("email");
const recommendationElement = document.getElementById("recommendation");
const universityElement = document.getElementById("university");
const reasonElement = document.getElementById("reason");
form.addEventListener('submit', function(event) { 
    event.preventDefault();

    let timestamp = Number(new Date());
    const storageRef = firebase.storage().ref(timestamp.toString());

    let $ = jQuery;
    let file_data = $('#uploadPNG').prop('files')[0];

    storageRef.put(file_data);
    
    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const email = emailElement.value;
    const recommendation = recommendationElement.value;
    const university = universityElement.value;
    const reason = reasonElement.value;
    
    firstNameElement.value = "";
    lastNameElement.value = "";
    emailElement.value = "";
    recommendationElement.value = "";
    universityElement.value = "";
    reasonElement.value = "";

    const application = {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        EMAIL: email,
        RECOMMENDATION: recommendation,
        UNIVERSITY: university,
        REASON: reason
    };
    database.push(application);
});